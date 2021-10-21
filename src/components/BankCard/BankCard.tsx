import React from "react";
import styles from "./BankCard.module.scss";
import {IBankCardProps} from "./BankCard.types";
import bankIcon from "./images/bank.svg";

export const BankCard: React.FC<IBankCardProps> = ({onClick, user}) => {
    return (
        <div className={styles.outerContainer} onClick={onClick}>
            <div className={styles.name}>{user.name}</div>
            <div className={styles.content}>
                <img src={bankIcon} alt="" />
            </div>
        </div>
    );
};
