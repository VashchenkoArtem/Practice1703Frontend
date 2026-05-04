import { COLORS } from "@shared/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    chat: {
        flexDirection: "row",
        marginVertical: 5,
        marginHorizontal: 11,
        padding: 5,
        gap: 5
    },
    chatAvatar: {
        borderRadius: 123
    },
    chatInfo: {
        gap: 5,
        flex: 1  
    },
    participantUsername: {
        fontSize: 22,
        fontWeight: 400
    },
    lastMessage: {
        fontSize: 14,
        color: COLORS.grey,
        fontWeight: 500
    },
    lastMessageCreationTime: {
        fontSize: 14,
        fontWeight: 500
    }
})