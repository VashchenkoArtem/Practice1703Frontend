import { createContext, ReactNode, useContext, useState } from "react";

interface ContactsHeaderContextType {
    search: string | null;
    setSearch: (value: string | null) => void;

    isModalVisible: boolean;
    setIsModalVisible: (value: boolean) => void;
}

const ContactsHeaderContext = createContext<ContactsHeaderContextType | null>(null);

export function ContactsHeaderProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [search, setSearch] = useState<string | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <ContactsHeaderContext.Provider
            value={{
                search,
                setSearch,
                isModalVisible,
                setIsModalVisible,
            }}
        >
            {children}
        </ContactsHeaderContext.Provider>
    );
}

export function useContactsHeader() {
    const context = useContext(ContactsHeaderContext);

    if (!context) {
        throw new Error(
            "useContactsHeader must be used inside ContactsHeaderProvider"
        );
    }

    return context;
}