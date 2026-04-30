import { IUser } from "@shared/types/user.types";

export interface IProps {   
    user?: IUser
    isModalCreateVisible: boolean,
    setIsModalCreateVisible: (type: boolean) => void
    setIsModalVisible: (type: boolean) => void
}
export interface ICreateContactForm {
    contactName: string,
    contactSurname: string,
    avatar: string
}