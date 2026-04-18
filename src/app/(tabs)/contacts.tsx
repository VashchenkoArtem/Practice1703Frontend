import { View, Text } from "react-native"
import { Headers } from "@shared/ui/header/Header"

export default function contactsTabs () {
    return(
        <View>
            <Headers text = "Contacts" isIconLeft={true} isIconRight={true}/>
        </View>
    )
}