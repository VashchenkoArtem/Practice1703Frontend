import { View, Text } from "react-native"
import { Headers } from "@shared/ui/header/Header"

export default function settingsTabs () {
    return(
        <View>
            <Headers text = "Settings" isIconLeft={true}/>
        </View>
    )
}