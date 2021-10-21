import React from "react";
import styles from "./UserCard.module.scss";
import {IUserCardProps} from "./UserCard.types";

export const UserCard: React.FC<IUserCardProps> = ({user, onClick}) => {
    return (
        <div className={styles.outerContainer} onClick={onClick}>
            <div className={styles.name}>{user.name}</div>
            <div className={styles.money}>{`${user.money} $`}</div>
        </div>
    );
};
