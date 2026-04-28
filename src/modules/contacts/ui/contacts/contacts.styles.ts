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
        gap: 30,// 
    },

    contactAvatarContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        flex: 1
    },

    contactAvatar: {
        borderRadius: 25
    },

    inputContainer: {
        // flexDirection: 'column',
        // justifyContent: 'flex-start',
        // gap: 30,
        marginVertical: 20,
        marginHorizontal: 10,
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
        width: '100%',
        height: 52,
        paddingHorizontal: 10,
        paddingVertical: 10,
        // margin: 10

    }
})