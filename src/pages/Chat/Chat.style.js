import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.orange
    },
    text_container:{
        borderRadius:10,
        borderColor:"white",
        borderWidth:2,
        borderStyle:"dotted",
        borderRadius:10,
        margin:10,
    },
    text:{
        fontSize:20,
        textAlign:"center",
        color: "white",
        padding:10,
    }

})