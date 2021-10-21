import React, {useState} from "react";
import styles from "./Modal.module.scss";
import {Button, TextField} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {IModalProps} from "./Modal.types";
import {BANK_ID} from "../../utils/constants";

export const Modal: React.FC<IModalProps> = ({
    visible,
    toUser,
    currentUserId,
    onClickClose,
    onSendMoney,
}) => {
    const [moneyValue, setMoneyValue] = useState<number>(0);
    const handleOnSendMoney = () => {
        onClickClose();
        onSendMoney(moneyValue);
    };
    if (!visible) {
        return null;
    }

    const getSendButtonText = () => {
        const buttonText: string = "Перевести";
        let postfix: string = "";
        if (toUser?.id === currentUserId) {
            postfix = "ceбе";
        } else if (toUser?.id === BANK_ID) {
            postfix = "в банк";
        }
        return `${buttonText} ${postfix}`;
    };

    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modalContainer}>
                <div className={styles.closeContainer} onClick={onClickClose}>
                    <Close />
                </div>
                <h2>
                    {toUser?.id &&
                    currentUserId !== toUser?.id &&
                    toUser.id !== BANK_ID
                        ? `Перевести игроку ${toUser.name}?`
                        : ""}
                </h2>
                <div className={styles.controls}>
                    <TextField
                        className={styles.inputField}
                        onChange={(event) =>
                            setMoneyValue(parseInt(event.target.value))
                        }
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => handleOnSendMoney()}>
                        {getSendButtonText()}
                    </Button>
                </div>
            </div>
        </div>
    );
};
