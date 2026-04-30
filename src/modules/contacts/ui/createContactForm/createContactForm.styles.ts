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
    modalPage: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 30,
    },
    inputsContainer: {
        gap: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: "100%",
    },
    inputLabel: {
        fontSize: 22, 
    },
    content: {
        gap: 20,
        alignItems: "center"
    }

})