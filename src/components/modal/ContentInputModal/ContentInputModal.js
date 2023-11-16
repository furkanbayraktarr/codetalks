import React, { useState } from "react";
import { View, TextInput} from "react-native";
import styles from './ContentInputModal.style'
import Button from "../../Button";
import Modal from "react-native-modal"


function ContentInputModal({visible,onClose,onSend,placeholder,autofocus, title}){

function handleSend(){
    
        if(!text){
           return
        }
        onSend(text)
        setText(null)
    
}

const [text,setText] = useState(null)

    return(

    <Modal
    style={styles.modal_container}
    swipeDirection="down"
    isVisible={visible}
    onSwipeComplete={onClose}
    onBackdropPress={onClose}
    onBackButtonPress={onClose}
    >
        <View style={styles.container}>
        <View style={styles.input_container} >
            <TextInput
            placeholder={placeholder}
            onChangeText={setText}
            multiline
            autoFocus={autofocus}
            />
        </View>
        <Button text={title} onPress={handleSend} />
        </View>
    </Modal>
)}
export default ContentInputModal