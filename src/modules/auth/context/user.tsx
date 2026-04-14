
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { IUser } from "@shared/types/user.types";
import { useMeQuery } from "../api/userApi";
import React, { createContext, type ReactNode, useContext, useEffect, useState } from "react";


interface UserContextData {
    user: IUser | null;
    setToken: (value: string | null) => void;
    token: string | null;
}

const UserContext = createContext<UserContextData | null>(null);

export function useUserContext() {
    const ctx = useContext(UserContext);
    if (!ctx)
        throw new Error(
            "UseUserContext must be used within UserContextProvider"
        );
    return ctx;
}

export function UserContextProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(null);
    const hasToken = token ? true : false
    const { data } = useMeQuery(undefined, { skip: !hasToken })


    useEffect(() => {
        const getToken = async () => {
            const token = await AsyncStorage.getItem("token");
            if (!token) return;
            setToken(token);
        };
        getToken();
    }, []);
    return (
        <UserContext
            value={{
                user: data || null,
                setToken,
                token,
            }}
        >
            {children}
        </UserContext>
    );
}
