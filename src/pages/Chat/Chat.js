import React from "react"
import {SafeAreaView,Text,FlatList, View} from "react-native"
import ContentInputModal from "../../components/modal/ContentInputModal"
import FloatingButton from "../../components/FloatingButton"
import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database"
import parseContentData from "../../utils/parseContentData"
import ChatCard from "../../components/card/ChatCard"
import styles from './Chat.style'

function Chat({navigation,route}) {
    const [inputModalVisible, setInputModalVisible] = React.useState(false)
    const [contentList, setContenList] =React.useState([])
    const roomName = route.params.roomName

    React.useEffect(()=>{

        navigation.setOptions({ title: roomName }); 

        database().ref(`/${roomName}`).
        on('value', snapshot=>{
            const contentData= snapshot.val()
            const parseData= parseContentData(contentData || {})
            setContenList(parseData)
        })
    },[])

    function handleSend(content){
        return(
            handleInputToggle(),
            sendContent(content)
        )

    }
    function handleInputToggle(){
        return(
            setInputModalVisible(!inputModalVisible)
        )
    }

    function sendContent(content){
        
        const userMail = auth().currentUser.email
        const contentList={
        text : content,
        userName: userMail.split('@')[0],
        date : new Date().toISOString(),
        
        
    }
        return(
            database().ref(`/${roomName}`).push(contentList)
        )
    }


const renderData = ({item})=> <ChatCard chat={item} />

    return(
        <SafeAreaView style={styles.container} >
            <View style={styles.text_container} >
            <Text style={styles.text}  >{roomName} odası kuruldu!</Text>
            </View>
            <FlatList 
            data={contentList}
            renderItem={renderData}/>
            <FloatingButton icon="plus" onPress={handleInputToggle} />
            <ContentInputModal
            placeholder=""
            visible={inputModalVisible}
            onClose={handleInputToggle}
            onSend={handleSend}
            autofocus
            title="Gönder"
            />
                
            
        </SafeAreaView>
    )
}
export default Chat