import { COLORS } from "@shared/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "flex-start",
        padding: 0,
        margin: 0
    },

    modalPage: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 30,
    },

    contactAvatarContainer: {
        alignItems: "center",
        padding: 20,
        width: 200
    },

    contactAvatar: {
        borderRadius: 25
    },
    username: {
        fontSize: 22,
        fontWeight: 400,
    },

    inputContainer: {
        marginVertical: 20,
        alignItems: "center",
    },

    modalHeader: {
        height: 50,
        backgroundColor: COLORS.bisquePrimary,
        flexDirection: "row",
        padding: 5,
        justifyContent: "space-between",
        alignItems: "center"
    },
    goBack: {
        color: COLORS.brownPrimary,
        fontSize: 22
    },
    headerTitle:{
        fontSize: 28
    },

    inputContainerContact: {
        borderBottomColor: COLORS.black,
        borderBottomWidth: 2,
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16,
        borderRadius: 16,
        margin: 10
    },

    inputContactName: {
        backgroundColor: COLORS.bisquePrimary,
        height: 52,
        paddingHorizontal: 10,
        paddingVertical: 10,
        // margin: 10
    },
    labelInputName: {
        marginLeft: 10,
        fontSize: 22,
        fontWeight: 400
    },
    avatarAndName: {
        alignItems: "center",
        paddingBottom: 20,
        borderBottomColor: COLORS.grey,
        borderBottomWidth: 1
    }
})