import { View, Text } from "react-native"
import { Headers } from "@shared/ui/header/Header"
export default function profileTabs () {
    return(
        <View>
            <Headers text = "Profile" isIconLeft={true}></Headers>
        </View>
    )
}