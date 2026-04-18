import { View, Text } from "react-native"
import { Headers } from "@shared/ui/header/Header"

export default function ChatTabs(){
    return(
        <View>
            <Headers text = "Chats" isIconLeft={true} isIconRight={true} isInput={true}/>
        </View>
    )
}