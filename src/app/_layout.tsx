import { UserContextProvider } from '@modules/auth/context/user';
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
                        <Stack screenOptions={{
                            headerShown: false
                        }}>
                            <Stack.Screen name='index' />
                            <Stack.Screen name='(auth)' />
                            <Stack.Screen name = "(tabs)"/>
                        </Stack>
                    </ContactsHeaderProvider>
                </UserContextProvider>
            </ApiProvider>
        </SafeAreaProvider>
    )
}


