import { IBank } from "../components/BankCard/BankCard.types";

export const ENDPOINT = "https://glacial-ravine-76976.herokuapp.com/";

export const BANK_ID = "bankId";

export const BANK_CARD: IBank = {
    id: BANK_ID,
    name: "Банк",
    room: "",
    money: Infinity
}