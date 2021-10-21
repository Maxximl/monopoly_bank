import React from "react";
import {UserCard} from "../UserCard/UserCard";
import {ICurrentUserProps} from "./CurrentUser.types";
import styles from "./CurrentUser.module.scss";
import { BankCard } from "../BankCard/BankCard";
import { BANK_ID } from "../../utils/constants";

export const CurrentUser: React.FC<ICurrentUserProps> = ({user, onClick}) => {
    console.log(user);
    if (!user) {
        
        return null;
    }
    return (
        <div className={styles.container}>
            <UserCard user={user} onClick={() => onClick(user.id)} />
            <BankCard onClick={() => onClick(BANK_ID)} />
        </div>
    );
};
