import { View, Text, TouchableOpacity, Image } from "react-native"
import { ContactCard } from "../contactCard/ContactCard"
import { useGetUsersQuery } from "@modules/contacts/api/contactsApi"
import { FlatList } from "react-native"
import { Headers } from "@shared/ui/header/Header"
import { useEffect, useState } from "react"
import { IContact } from "@modules/contacts/api/contacts.types"
import Modal from 'react-native-modal'
import { Button } from "@shared/ui/button"
import { styles } from "./contacts.styles"
import { Input } from "@shared/ui/input"
import { ICONS } from "@shared/ui/icons"
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "expo-router"
import { useLazyFindUserByNameQuery } from "@modules/auth/api/userApi"
import { useContactsHeader } from "@modules/contacts/context/contact"
import { COLORS, SERVER } from "@shared/constants"
import { useUserContext } from "@modules/auth/context/user"
import { CreateContactForm } from "../createContactForm/CreateContactForm"


export function ContactsPage(){
    const {
        search,
        isModalVisible, 
        setIsModalVisible
    } = useContactsHeader();
    const { user } = useUserContext()
    const [ getUser, { data: userData, reset, error, isError}] = useLazyFindUserByNameQuery()
    const [username, setUsername] = useState<string>("")
    const [ isModalCreateVisible, setIsModalCreateVisible ] = useState<boolean>(false)
    const { data } = useGetUsersQuery(undefined, {
        pollingInterval: 3000
    })
    useEffect(() => {
        if (!username || username === user?.username) {
            reset()
            return
        }
        getUser(username)
    }, [username])
    if (!data) return null
    let filteredContacts = [] as IContact[]
    if ( search) {
        filteredContacts = data.filter((contact) => {
            return contact.contactName.toLowerCase().includes(search.toLowerCase())
        })
        
    }
    return (
        <View>
            <FlatList style = {{paddingHorizontal: 10, paddingVertical: 5, gap: 5}} 
                data={ search ? filteredContacts : data}
                renderItem={(contact) => (
                    <View key={contact.item.id}>
                        <TouchableOpacity onPress={() => console.log("touched")}>
                            <ContactCard localName={contact.item.contactName} avatar={contact.item.avatar} addedAt={contact.item.addedAt}/>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={contact => String(contact.id)}
                
            >
                {/* {data.map((contact)=>{
                    return (

                    )
                })} */}
            </FlatList>
            <Modal
                isVisible={isModalVisible}
                swipeDirection='up'
                onSwipeComplete={() => setIsModalVisible(false)}
                style= {styles.modal}
            >
                <View style={styles.modalPage}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.goBack} onPress={() => setIsModalVisible(false)}>
                            <ICONS.BackIcon/> Back</Text>
                        <Text style={styles.headerTitle}>Find User</Text>
                        <View />
                    </View>
                    <Input
                        autoCapitalize="none"
                        autoComplete="off"                
                        placeholder="Username"
                        iconLeft={<ICONS.SearchingGlassIcon />}
                        label="Username"
                        onChangeText={(text) => {
                            setUsername(text)
                            if (isError){
                                reset()
                                return
                            }
                        }}
                        inputContainerStyle={styles.inputContainerContact}
                        style={styles.inputContactName}
                        labelStyle={styles.labelInputName}
                    />
                    <View style={styles.inputContainer}>
                        { isError && 
                            <Text style = {{color: COLORS.inputError, fontSize: 22}}>{(error as any).data}</Text>
                        }
                        { username === user?.username && 
                            <Text style = {{color: COLORS.inputError, fontSize: 22}}>You can't add yourself in conctacts</Text>
                        }
                        <View style={styles.contactAvatarContainer}>
                            { userData && 
                                <View style = {styles.avatarAndName}>
                                    <Image
                                        source={{
                                            uri: `http://${SERVER.host}:${SERVER.port}/media/thumb/${userData?.avatar}`
                                        }}
                                        width={150}
                                        height={150}
                                        style={styles.contactAvatar}
                                    />
                                    <Text style={styles.username}>{userData?.username}</Text>
                                </View>
                            }
                            </View>
                            <Button 
                                title={"Select"} 
                                disabled = {userData ? false : true}
                                onPress={() => {
                                    setIsModalCreateVisible(true)
                                }}
                            />

                    </View>
                </View> 
            </Modal>
            <CreateContactForm user={userData} isModalCreateVisible={isModalCreateVisible} setIsModalVisible={setIsModalVisible} setIsModalCreateVisible={setIsModalCreateVisible}/>
        </View>
    )
}