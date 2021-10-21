import React, {useCallback, useState} from "react";
import {UserCard} from "../UserCard/UserCard";
import {IUserCardProps} from "../UserCard/UserCard.types";
import {IUsers} from "./Users.types";
import styles from "./Users.module.scss";

export const Users: React.FC<IUsers> = ({users, currentUserName, onClick}) => {

    const handeOnUserClick = useCallback((id: string) => () => onClick(id), [users, onClick]);

    return (
        <div className={styles.outerContainer}>
            {users.map((user) => {
                const {name, id} = user;
                if (user.name === currentUserName) {
                    return null;
                }
                return <UserCard user={user} key={id} onClick={handeOnUserClick(id)} />;
            })}
        </div>
    );
};
