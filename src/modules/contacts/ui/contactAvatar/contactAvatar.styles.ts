import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contactAvatar: {
        borderRadius: 25
    },
     ContainerAvatar: {
        alignItems: "center",
        gap: 10,
    },
    AvatarView: {
        width: 150,
        height: 150,
        borderRadius: 25,
        backgroundColor: "#EAEAEA",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    SelectedAvatar: {
        width: 150,
        height: 150,
    },
    DefaultAvatar: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    DefaultText: {
        fontSize: 32,
        fontWeight: "500",
        color: "#000",
    }
})