import { IUser } from "../UserCard/UserCard.types";

export interface IUsers {
    users?: IUser[];
    currentUserName?: string;
    onClick: (id: string) => void;
}
