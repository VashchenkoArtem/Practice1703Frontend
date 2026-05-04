import { useGetChatsQuery } from "@modules/chats/api/chatsApi"
import { View } from "react-native"
import { ChatCard } from "../chatCard/ChatCard"

export function ChatsPage(){
    const { data: chats } = useGetChatsQuery()
    if (!chats) return null
    return (
        <View>
            {chats.map((chat) => {
                return <ChatCard chat={chat}/>
            })}
        </View>
    )
}