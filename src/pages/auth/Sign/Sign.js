import React from "react"
import { SafeAreaView, Text, View } from "react-native"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import styles from './Sign.style'
import { Formik } from "formik"
import auth from '@react-native-firebase/auth'
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser"


function Sign ({navigation}) {

const initialFormValues={
    usermail:"",
    password:"",
    repassword:""
}


async function handleFormSubmit(formvalues){
    if (!formvalues.usermail || !formvalues.password || !formvalues.repassword){
        showMessage({
            message: "Lütfen boş alanları doldurun",
            type:"danger"
        })
        
        return
    }
    
    if(formvalues.password!==formvalues.repassword){
        showMessage({
            message: "Şifreler Uyuşmuyor",
            type: "danger",
          })
          return
    }
    
    try {
        
        await auth().createUserWithEmailAndPassword(
            formvalues.usermail, formvalues.password
        )
        showMessage({
            message: "Kaydınız başarıyla oluşturuldu",
            type: "success",
          })
          
    } catch (error) {
        showMessage({
            message: authErrorMessageParser(error.code),
            type: "danger",
          })
    }
}


const handleLogin = () => {
    return(
        navigation.goBack()
    )

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
      <Input 
            placeholder="Şifrenizi tekrar giriniz..."
            value={values.repassword}
            onType={handleChange("repassword")}
            isSecure
            />
            <Button text="Kayıt Ol" onPress={handleSubmit}/>
            <Button text="Giriş Yap" theme="secondary" onPress={handleLogin} />
            </View>
    </>
  )}
</Formik>
            
            
        </SafeAreaView>
    )
}
export default Sign