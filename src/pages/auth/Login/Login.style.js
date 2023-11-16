import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
    container:{
        backgroundColor: colors.darkorange,
        flex:1,
        justifyContent:"space-between",
    },
    header:{
        color:"white",
        fontSize:30,
        margin:10,
        alignSelf:"center",
        marginTop:Dimensions.get("window").height/4

    },
    inner_container:{
        marginVertical:100
        
    }
})