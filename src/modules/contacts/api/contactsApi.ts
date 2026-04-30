import { BaseApi } from "@shared/api/baseApi";
import { IContact, ICreateContact } from "./contacts.types";

export const contactsApi = BaseApi.injectEndpoints({
    endpoints:(builder) => ({
        getUsers: builder.query<IContact[], void>({
            query: () => "contacts"
        }),
        findContactsById: builder.query<IContact, void>({
            query: (id) => ({
                url: `contacts/${id}`
            })
        }),
        createContact: builder.mutation<void,  ICreateContact | FormData>({
            query: (body) => {
                return {
                url: "contacts",
                method: "POST",
                body
            }}
        })
    })
})

export const {
    useGetUsersQuery,
    useFindContactsByIdQuery,
    useCreateContactMutation
} = contactsApi

    