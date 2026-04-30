export interface IContact {
    id: number
    contactName: string
    contactSurname: string
    addedAt: Date;
    avatar: string;
}

export interface ICreateContact {
    contactName: string
    contactSurname: string
    avatar: string;
    contactId: string
}