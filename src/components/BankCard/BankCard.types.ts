import { IUser } from "../UserCard/UserCard.types";

export interface IBankCardProps {
    onClick: () => void;
    user: IUser;
}

export interface IBank {
    id: string;
    name: string;
    room: string;
    money: number;
}