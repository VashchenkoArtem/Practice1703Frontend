import { BaseApi } from "@shared/api/baseApi";
import { IContact } from "./contacts.types";

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
        // findContactsByName: builder.query<IContact, void>({
        //     query: (name) => ({
        //         url: `contacts/${name}`
        //     })
        // }),
        createContact: builder.mutation<IContact, void>({
            query: (body) => ({
                url: "contacts",
                method: "POST",
                body
            })
        })
    })
})

export const {
    useGetUsersQuery,
    useFindContactsByIdQuery,
    // useFindContactsByNameQuery,
    useCreateContactMutation
} = contactsApi

    