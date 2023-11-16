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
    dislike_container:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"white",
        borderRadius:12,
        marginLeft:290,
        margin:5,
        padding:3
        

    },
    dislike_count_container:{
        padding:2,
        backgroundColor:colors.darkorange,
        borderRadius:10,
        justifyContent:"center"

    },
    dislike_count_text:{
        fontSize:12,
        fontWeight:"bold",
        color:"white",
        
       
    },
    dislike_text:{
        fontSize:15,
        padding:2,
        fontWeight:"bold",
        color:colors.darkorange
        
    }
})