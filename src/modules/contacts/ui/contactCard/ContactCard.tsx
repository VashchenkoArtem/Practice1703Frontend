import { View, Text, Image } from "react-native"
import { styles } from "./contactCard.styles"
import { Contact } from "./types"
import { SERVER } from "@shared/constants"

export function ContactCard(props: Contact){
    const {localName, avatar} = props
    return(
        <View style = {styles.contactCard}>
            <Image
                source={{
                    uri: `http://${SERVER.host}:${SERVER.port}/media/thumb/${avatar}`
                }}
                width={50}
                height={50}
                style = {styles.contactAvatar}
            ></Image>
           <Text style =  {styles.contactName}>{localName}</Text> 
        </View>
    )
}