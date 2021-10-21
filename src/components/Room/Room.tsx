import React, {useEffect, useState} from "react";
import queryString from "query-string";
import {io, Socket} from "socket.io-client";
import styles from "./Room.module.scss";
import {IRoom, IRoomData} from "./Room.types";
import {Users} from "../Users/Users";
import {CurrentUser} from "../CurrentUser/CurrentUser";
import {IUser} from "../UserCard/UserCard.types";
import {BANK_CARD, BANK_ID, ENDPOINT} from "../../utils/constants";
import {Modal} from "../Modal/Modal";

let socket: Socket;

export const Room: React.FC<IRoom> = ({}) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [users, setUsers] = useState<IUser[]>([]);
    const [currentUser, setCurrentUser] = useState<IUser>(null);
    const [messages, setMessages] = useState([]);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [toUser, setToUser] = useState<IUser>(null);

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        setName(name as string);
        setRoom(room as string);
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        if (name) {
            socket = io(ENDPOINT, {
                transports: ["websocket", "polling", "flashsocket"],
            });

            socket.emit("join", {name, room}, () => {});

            return () => {
                socket.emit("disconnect");

                socket.off();
            };
        }
    }, [name]);

    useEffect(() => {
        if (name) {
            socket.on("message", (message) => {
                setMessages([...messages, message]);
            });

            socket.on("roomData", ({users}: IRoomData) => {
                const currentUser = users.find((user) => {
                    console.log("USER_NAME", user.name, "name ", name);
                    return user.name === name;
                });
                setCurrentUser(currentUser);
                setUsers(users);
            });
        }
    }, [name]);

    const updateUser = (money: number) => {
        socket.emit(
            "updateUser",
            {room, money, fromUserId: name, toUserId: toUser.id},
            () => {},
        );
    };

    const handleClickUser = (id: string) => {
        const toUser = users.find((user) => {
            return user.id === id;
        });
        if (id === BANK_ID) {
            setToUser(BANK_CARD);
        } else {
            setToUser(toUser);
        }

        setModalVisible(true);
    };

    return (
        <div className={styles.outerContainer}>
            <Modal
                visible={modalVisible}
                onClickClose={() => setModalVisible(false)}
                onSendMoney={updateUser}
                toUser={toUser}
                currentUserId={currentUser?.id}
            />
            <div className={styles.roomContainer}>
                <Users
                    users={users}
                    currentUserName={name}
                    onClick={handleClickUser}
                />
                <CurrentUser user={currentUser} onClick={handleClickUser} />
            </div>
        </div>
    );
};
