import { View, Image, Text } from "react-native";
import { IProps } from "./types";
import { SERVER } from "@shared/constants";
import { styles } from "./chatCard.styles";

export function ChatCard(props: IProps){
    const { chat } = props
    return (
        <View style = {styles.chat}>
            <Image
                source={{
                    uri: `http://${SERVER.host}:${SERVER.port}/media/thumb/${chat.otherUser?.avatar}`
                }}
                width={50}
                height={50}
                style = {styles.chatAvatar}
            />
            <View style = {styles.chatInfo}>
                <Text style = {styles.participantUsername}>{chat.otherUser?.username}</Text>
                <Text style = {styles.lastMessage}>{chat.lastMessage?.sender.username}: {chat.lastMessage?.text}</Text>
            </View>
            <View>
                <Text style = {styles.lastMessageCreationTime}>{chat.lastMessage?.createdAt
            ? new Date(chat.lastMessage.createdAt).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            })
            : ""}</Text>
            </View>
        </View>
    )
}