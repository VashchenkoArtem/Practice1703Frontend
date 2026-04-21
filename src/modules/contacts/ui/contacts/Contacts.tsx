import { View, Text } from "react-native"
import { ContactCard } from "../contactCard/ContactCard"
import { useGetUsersQuery } from "@modules/contacts/api/contactsApi"

export function ContactsPage(){
    const { data } = useGetUsersQuery(undefined, {
        pollingInterval: 3000
    })
    if (!data) return null
    return (
        <View style = {{paddingHorizontal: 10, paddingVertical: 5, gap: 5}}>
            {data.map((contact)=>{
                return (
                    <View key={contact.id}>
                        <ContactCard localName={contact.localName} avatar={contact.avatar} addedAt={contact.addedAt}/>
                    </View>
                )
            })}
        </View>
    )
}