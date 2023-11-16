import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const deviceSize= Dimensions.get("window")

export default StyleSheet.create({
    
    container:{
        margin:10,
        marginBottom:10,
        width:deviceSize.width/2-20,
        borderRadius:10,
        height:deviceSize.height/4,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor: "#d3d3d3"
        
    },
    roomName:{
        color:colors.orange,
        fontSize:30
    }
})