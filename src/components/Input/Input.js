import { TextInput } from "react-native";
import styles from './Input.style'

export default function Input({placeholder, value, isSecure, onType}){
    return(
        <TextInput 
        placeholder={placeholder} 
        placeholderTextColor="white"
        value={value}
        onChangeText={onType}
        style={styles.container}
        secureTextEntry={isSecure}>
    
        </TextInput>
    )
}