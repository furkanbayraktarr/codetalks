import {TouchableOpacity, Text} from "react-native"
import styles from './RoomsCard.style'

function RoomsCard ({room, onSelect}){
    return(
    <TouchableOpacity style={styles.container} onPress={onSelect} >
        
        <Text style={styles.roomName} >{room.roomName}</Text>
    </TouchableOpacity>
        )
}
export default RoomsCard