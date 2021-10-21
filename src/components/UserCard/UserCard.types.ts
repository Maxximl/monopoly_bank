export interface IUserCardProps {
    user: IUser;
    onClick?: () => void;
}

export interface IUser {
    id: string;
    name: string;
    room: string;
    money: number;
}