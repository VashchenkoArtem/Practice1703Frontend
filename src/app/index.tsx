import React from "react";
import { Redirect } from "expo-router";
import { View } from "react-native";

export default function Index() {
    return(
        // <View></View>
        <Redirect href={"/login"}/>
    )
}