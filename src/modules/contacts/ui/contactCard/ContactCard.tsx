import { View, Text, Image } from "react-native"
import { styles } from "./contactCard.styles"
import { Contact } from "./types"

export function ContactCard(props: Contact){
    const {localName, avatar} = props
    return(
        <View style = {styles.contactCard}>
            <Image
                source={{
                    uri: `http://192.168.0.104:3000/media/thumb/${avatar}`
                }}
                width={50}
                height={50}
                style = {styles.contactAvatar}
            ></Image>
           <Text style =  {styles.contactName}>{localName}</Text> 
        </View>
    )
}