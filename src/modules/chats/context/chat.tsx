import { createContext, ReactNode, useContext, useState } from "react";

interface ChatsHeaderContextType {
    chatSearch: string | null;
    setChatSearch: (value: string | null) => void;
}

const ChatsHeaderContext = createContext<ChatsHeaderContextType | null>(null);

export function ChatsHeaderProvider({ children }: { children: ReactNode }) {
    const [chatSearch, setChatSearch] = useState<string | null>(null);

    return (
        <ChatsHeaderContext.Provider value={{ chatSearch, setChatSearch }}>
            {children}
        </ChatsHeaderContext.Provider>
    );
}

export function useChatsHeader() {
    const context = useContext(ChatsHeaderContext);

    if (!context) {
        throw new Error("useChatsHeader must be used inside ChatsHeaderProvider");
    }

    return context;
}