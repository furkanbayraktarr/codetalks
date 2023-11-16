import React, { useState } from "react"
import { SafeAreaView, Text, View } from "react-native"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import styles from './Login.style'
import {Formik} from 'formik'
import auth from '@react-native-firebase/auth'
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser"


function Login ({navigation}) {

    const [loading, setLoading] = useState(false)

const initialFormValues={
    usermail:"",
    password:""
}
const onSelect=()=>{
    return(
        navigation.navigate("SignPage")
    )
}

async function handleFormSubmit(formvalues){
    try {
        setLoading(true)
        if (!formvalues.usermail || !formvalues.password ){
            showMessage({
                message: "Lütfen boş alanları doldurun",
                type:"danger"
            })
            setLoading(false)
            return
        }
        await auth().signInWithEmailAndPassword(
         formvalues.usermail, formvalues.password   
        )
        setLoading(false)
        navigation.navigate("ChatStack",{ screen: 'RoomsPage' })
        
        
    } catch (error) {
        
        showMessage({
            message: authErrorMessageParser(error.code),
            type: "danger",
          })
        setLoading(false)
    }
    
    
}
    return(
        <SafeAreaView style={styles.container} >
            <Text style={styles.header} >codetalks</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
  {({ values, handleChange, handleSubmit }) => (
    <>
    <View style={styles.inner_container} >
      <Input 
        placeholder="Email adresi giriniz..."
        value={values.usermail}
        onType={handleChange("usermail")}
      />
      <Input 
        placeholder="Şifre giriniz..."
        value={values.password}
        onType={handleChange("password")}
        isSecure
      />
      <Button text="Giriş Yap" onPress={handleSubmit} loading={loading}/>
      <Button text="Kayıt Ol" theme="secondary" onPress={onSelect} />
      </View>
    </>
  )}
</Formik>
            
        </SafeAreaView>
    )
}
export default Login