import {Button, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Join.module.scss";
import {IJoin} from "./Join.types";

export const Join: React.FC<IJoin> = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <h2 className={styles.heading}>Введите данные</h2>
                <div>
                    <TextField
                        className={styles.joinInput}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Имя"
                    />
                </div>
                <div className={styles.joinInput}>
                    <TextField
                        onChange={(event) => setRoom(event.target.value)}
                        placeholder="Комната"
                    />
                </div>
                <Link
                    className={styles.buttonLink}
                    onClick={(event) =>
                        !name || !room ? event.preventDefault() : null
                    }
                    to={`/monopoly_bank/room?name=${name}&room=${room}`}>
                    <Button color="primary" variant="contained">
                        Войти
                    </Button>
                </Link>
            </div>
        </div>
    );
};
