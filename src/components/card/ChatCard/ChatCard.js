import React from "react";
import { Text, View } from "react-native";
import {formatDistance,parseISO} from 'date-fns'
import { tr } from 'date-fns/locale'
import styles from './ChatCard.style'


function ChatCard({chat}){
    const formattedDate= 
    formatDistance(parseISO(chat.date), new Date(),{ locale: tr } )

    return(
        <View style={styles.container} >
            <View style={styles.inner_container}>
                <Text style={styles.user}>{chat.userName}</Text>
                <Text style={styles.date} >{formattedDate}</Text>
            </View>
            <Text style={styles.content} >{chat.text}</Text>
            
        </View>
    )
}
export default ChatCard
