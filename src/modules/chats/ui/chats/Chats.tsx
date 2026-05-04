import { useGetChatsQuery } from "@modules/chats/api/chatsApi"
import { ChatCard } from "../chatCard/ChatCard"
import { IChat } from "@modules/chats/api/chatsApi.types"
import { useChatsHeader } from "@modules/chats/context/chat"
import { FlatList } from "react-native"

export function ChatsPage(){
    const { data: chats } = useGetChatsQuery(undefined, {
        pollingInterval: 3000
    })
    const { chatSearch } = useChatsHeader()
    let filteredChats = [] as IChat[]
    if (!chats) return null
    if ( chatSearch ) {
        filteredChats = chats.filter((chat) => {
            return chat.otherUser?.username.toLowerCase().includes(chatSearch.toLowerCase())
        })
        
    }
    return (
        <FlatList
            data={chatSearch ? filteredChats : chats}
            renderItem={(chat) => (
                <ChatCard key = {chat.item.id} chat={chat.item}/>
            )}
        />
    )
}