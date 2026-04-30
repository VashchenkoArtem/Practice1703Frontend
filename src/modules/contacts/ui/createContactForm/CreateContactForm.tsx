import { Button, ICONS, Input } from "@shared/ui";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native"
import Modal from "react-native-modal";
import { styles } from './createContactForm.styles'
import { ICreateContactForm, IProps } from "./createContactFrom.types";
import { Controller, useForm } from "react-hook-form";
import * as ImagePicker from 'expo-image-picker'
import { useCreateContactMutation } from "@modules/contacts/api/contactsApi";
import { SERVER } from "@shared/constants";
import { ICreateContact } from "@modules/contacts/api/contacts.types";
import { ContactAvatarField } from "../contactAvatar/ContactAvatar";

export function CreateContactForm(props: IProps) {
    
    const { user, isModalCreateVisible, setIsModalCreateVisible, setIsModalVisible } = props
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm<ICreateContactForm>({
        defaultValues: {
            contactName: "",
            contactSurname: "",
            avatar: ""
        }
    })
    useEffect(() => {
        if (user) {
            reset({
                contactName: user.name,
                contactSurname: user.surname,
                avatar: user.avatar
            })
        }
    }, [user])
    const [createContact] = useCreateContactMutation()


    const pickContactAvatar = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            quality: 0.8
        })

        if (result.canceled) return
        const imageUri = result.assets[0].uri
        
    }
    if (!user) return null
    const handleCreateContact = async (data: ICreateContactForm) => {
        const avatar = data.avatar || user.avatar

        // Новый файл выбран
        if (avatar?.startsWith("file://")) {
            const formData = new FormData()

            formData.append("contactName", data.contactName || user.name)
            formData.append("contactSurname", data.contactSurname || user.surname)
            formData.append("contactId", String(user.id))

            formData.append("avatar", {
                uri: avatar,
                name: "avatar.jpg",
                type: "image/jpeg"
            } as any)

            await createContact(formData).unwrap()
        } 
        
        // Старый аватар
        else {
            await createContact({
                contactName: data.contactName || user.name,
                contactSurname: data.contactSurname || user.surname,
                avatar,
                contactId: String(user.id)
            }).unwrap()
        }

        setIsModalCreateVisible(false)
        setIsModalVisible(false)
    }


    return (
        <Modal
            isVisible={isModalCreateVisible}
            onBackdropPress={() => setIsModalCreateVisible(false)}
            style={styles.modal}
            swipeDirection={'up'}
            onSwipeComplete={() => setIsModalCreateVisible(false)}
        >
            <View style={styles.modalPage}>
                <View style={styles.modalHeader}>
                    <Text style={styles.goBack} onPress={() => setIsModalCreateVisible(false)}>
                        <ICONS.BackIcon/> Back</Text>
                    <Text style={styles.headerTitle}>Find User</Text>
                    <View />
                </View>
                
                <View style = {styles.content}>
                    <View style = {styles.inputsContainer}>
                        <Controller
                            name="contactName"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Contact name"
                                    placeholder="Name"
                                    autoCapitalize="none"
                                    autoComplete="off"
                                    autoCorrect={false}
                                    value={field.value}
                                    labelStyle={styles.inputLabel}
                                    onChangeText={field.onChange}
                                    error={errors.contactName?.message}
                                />
                            )}
                            
                        />

                        <Controller
                            name="contactSurname"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Contact surname"
                                    placeholder="Surname"
                                    autoCapitalize="none"
                                    autoComplete="off"
                                    labelStyle={styles.inputLabel}
                                    autoCorrect={false}
                                    value={field.value}
                                    onChangeText={field.onChange}
                                    error={errors.contactSurname?.message}
                                />
                            )}
                        />
                    </View>
                    <Controller
                        name="avatar"
                        control={control}
                        render={({ field }) => (
                            <ContactAvatarField value={field.value} onChange={field.onChange}/>
                        )}>
                        </Controller>
                    
                    <Button
                        title="Add contact"
                        onPress={handleSubmit(handleCreateContact)}
                    />
                </View>
            </View>
        </Modal>
    )
}