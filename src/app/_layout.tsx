import { UserContextProvider } from '@modules/auth/context/user';
import { ChatsHeaderProvider } from '@modules/chats/context/chat';
import { ContactsHeaderProvider } from '@modules/contacts/context/contact';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { BaseApi } from '@shared/api/baseApi';
import { Headers } from '@shared/ui/header/Header';
import { Stack } from 'expo-router'

import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <ApiProvider api = {BaseApi}>
                <UserContextProvider>
                    <ContactsHeaderProvider>
                        <ChatsHeaderProvider>
                            <Stack screenOptions={{
                                headerShown: false
                            }}>
                                <Stack.Screen name='index' />
                                <Stack.Screen name='(auth)' />
                                <Stack.Screen name = "(tabs)"/>
                            </Stack>
                        </ChatsHeaderProvider>
                    </ContactsHeaderProvider>
                </UserContextProvider>
            </ApiProvider>
        </SafeAreaProvider>
    )
}


