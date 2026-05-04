import { View, Text } from "react-native";
import { IProps } from "./types";
import { ICONS } from "../icons";
import { Input } from "../input";
import { styles } from "./style";

export function Headers(props:IProps){
    const {isIconLeft, isIconRight, isInput, text, search, setSearch, setIsModalVisible, isChatFiltration, chatSearch, setChatSearch } = props
    return (
        <View style = {styles.headersContainer}>
            <View style = {[styles.header]}>
                {isIconLeft && 
                    <ICONS.logoIcon width = {40} height = {40}/>
                }
                <Text style = {[styles.headerText, !isIconRight  && styles.headerTextWithoutIconRight]}>
                    { text}
                </Text>
                {isIconRight && 
                    <ICONS.plusIcon onPress={() => {setIsModalVisible && setIsModalVisible(true)}}/>   
                }
            </View>
            {isInput && 
                <Input.ChatInput
                    value={isChatFiltration ? (chatSearch || "") : (search || "")}
                    onChangeText={isChatFiltration ? setChatSearch : setSearch}
                />
                }       
        </View>)
}