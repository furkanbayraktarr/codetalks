import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:10,
        margin:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height: deviceSize.height/3,
        
    },
    modal_container:{
        justifyContent:"flex-end",
        margin:0,
    },
    input_container:{
        flex:1
    }
})