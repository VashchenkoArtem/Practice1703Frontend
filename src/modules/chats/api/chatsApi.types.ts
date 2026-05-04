export interface IChat {
    otherUser: {
        id: number;
        name: string;
        username: string;
        surname: string;
        avatar: string;
        lastSeenAt: Date;
        password: string;
        email: string;
    } | undefined;
    lastMessage: ({
        sender: {
            id: number;
            name: string;
            username: string;
            surname: string;
            avatar: string;
            lastSeenAt: Date;
            password: string;
            email: string;
        };
    } & {
        id: number;
        chatId: number;
        type: string;
        text: string | null;
        mediaUrl: string | null;
        senderId: number;
        chatAsLastMessageId: number;
        createdAt: Date;
        updatedAt: Date;
    }) | null;
    participants: ({
        user: {
            id: number;
            name: string;
            username: string;
            surname: string;
            avatar: string;
            lastSeenAt: Date;
            password: string;
            email: string;
        };
    } & {
        })[];
        id: number;
        lastMessageId: number | null;
}[]