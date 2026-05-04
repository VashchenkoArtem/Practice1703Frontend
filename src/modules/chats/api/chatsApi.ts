import { BaseApi } from "@shared/api/baseApi";
import { IChat } from "./chatsApi.types";

export const chatsApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        getChats: builder.query<IChat[], void>({
            query: () => "chats"
        })
    })
})
export const {
    useGetChatsQuery
 } = chatsApi