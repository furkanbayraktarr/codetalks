import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
    container:{
        padding:5,
        margin:5,
        backgroundColor:"white",
        borderRadius:10,
        margin:10,
        

    },
    inner_container:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:3
    },
    user:{
        color:"black",
        fontSize:12
    },
    date:{
        color:"black",
        fontSize:12,
        fontStyle:"italic"

    },
    content:{
        color:"black",
        fontSize:18,
        fontWeight:"bold",
        marginTop:15,
        margin:3

    },
    
})
