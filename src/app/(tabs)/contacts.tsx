import { View, Text } from "react-native"
import { Headers } from "@shared/ui/header/Header"
import { ContactsPage } from "@modules/contacts/ui/contacts/Contacts"

export default function contactsTabs () {
    return(
        <View>
            <Headers text = "Contacts" isIconLeft={true} isIconRight={true} isInput={true}/>
            <ContactsPage></ContactsPage>
        </View>
    )
}