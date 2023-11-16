import React from "react"
import {SafeAreaView,FlatList} from "react-native"
import ContentInputModal from "../../../components/modal/ContentInputModal"
import FloatingButton from "../../../components/FloatingButton"
import styles from './Rooms.style'
import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database"
import parseContentData from "../../../utils/parseContentData"
import RoomsCard from "../../../components/card/RoomsCard"

function Rooms ({navigation}) {

    const [inputModalVisible, setInputModalVisible] = React.useState(false)
    const [contentList, setContenList] =React.useState([])

    React.useEffect(()=>{
        database().ref('rooms/').
        on('value', snapshot=>{
            const contentData= snapshot.val()
            const parseData= parseContentData(contentData || {})
            setContenList(parseData)
        })
    },[])

    function handleInputToggle(){
        return(
            setInputModalVisible(!inputModalVisible)
        )
    }

    function handleSend(content){
        return(
            handleInputToggle(),
            sendContent(content)
        )

    }

    function sendContent(content){
        
        const userMail = auth().currentUser.email
        const contentList={
        roomName : content,
        userName: userMail.split(('@'),[0]),
        date : new Date().toISOString()
    }
        return(
            database().ref('rooms/').push(contentList)
        )
    }

    function handleRoomSelect(roomName){
        navigation.navigate("ChatPage", {roomName})
        
    }

    const renderData = ({item}) => <RoomsCard room={item} onSelect={()=> handleRoomSelect(item.roomName)} />


    return(
        <SafeAreaView style={styles.container} >
            <FlatList
            numColumns={2}
            data={contentList}
            renderItem={renderData}
            />
            <FloatingButton icon="plus" onPress={handleInputToggle} />
            <ContentInputModal
            placeholder="Oda ismi gir..."
            visible={inputModalVisible}
            onClose={handleInputToggle}
            onSend={handleSend}
            autofocus
            title="Ekle"
            />
        </SafeAreaView>

    )
}

export default Rooms