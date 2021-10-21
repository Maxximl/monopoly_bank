import { IUser } from "../UserCard/UserCard.types";

export interface IModalProps {
    toUser: IUser;
    visible: boolean;
    currentUserId: string;
    onClickClose: () => void;
    onSendMoney: (money: number) => void;
}