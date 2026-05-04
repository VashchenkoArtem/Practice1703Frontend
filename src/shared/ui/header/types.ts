export interface IProps{
    isIconLeft?: boolean,
    text: string,
    isIconRight?: boolean,
    isInput?: boolean,
    search?: string | null,
    setSearch?: (text: string) => void,
    setIsModalVisible?: (type: boolean) => void
    isChatFiltration?: boolean,
    setChatSearch?: (username: string) => void
    chatSearch?: string | null
}







