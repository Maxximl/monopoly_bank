import { IUser } from "../UserCard/UserCard.types";
import { IUsers } from "../Users/Users.types";

export interface ICurrentUserProps extends IUsers {
    user: IUser;
}