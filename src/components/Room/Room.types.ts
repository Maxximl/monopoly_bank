import { IUser } from "../UserCard/UserCard.types";

export interface IRoom {

}

export interface IRoomData {
    room: string;
    users: IUser[];
}