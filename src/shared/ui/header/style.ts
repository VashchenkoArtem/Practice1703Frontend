import { COLORS } from "@shared/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headersContainer: {
        backgroundColor: COLORS.bisquePrimary,
        paddingBottom: 10
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
    },
    headerTextWithoutIconRight: {
        width: "100%"
    },
    headerText: {
        fontSize: 28,
        textAlign: "center"
    }
})
