import React from 'react'
import styles from "./BankCard.module.scss";
import { IBankCardProps } from './BankCard.types';

export const BankCard: React.FC<IBankCardProps> = ({onClick}) => {
    return (
        <div className={styles.outerContainer} onClick={onClick}>
            <div className={styles.content}>
                $$$
            </div>
        </div>
    )
}
