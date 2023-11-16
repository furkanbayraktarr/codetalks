import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage from "react-native-flash-message";
import Login from "./pages/auth/Login";
import Sign from "./pages/auth/Sign";
import Rooms from "./pages/Rooms/Rooms";
import Chat from "./pages/Chat";
import colors from "./styles/colors";
import auth from "@react-native-firebase/auth"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

function Router() {

  const [userSession, setUserSession] = React.useState()
    

    React.useEffect(() => {
        auth().onAuthStateChanged((user) => {
          setUserSession(!!user);
        }) 
      }, []);


  function AuthStack() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignPage" component={Sign} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }
  function ChatStack() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="RoomsPage" component={Rooms}
        options={{headerTitleAlign:"center", headerTitle:"Odalar", 
        headerTintColor:colors.orange, 
        headerRight: () => (
          <Icon
            name="logout"
            size={30}
            color={colors.orange}
            onPress={() => auth().signOut()}
          />
        ),} } />
        <Stack.Screen name="ChatPage" component={Chat} 
        options={{ headerTitleAlign:"center", headerTintColor:colors.orange,
          headerRight: () => (
            <Icon
              name="logout"
              size={30}
              color={colors.orange}
              onPress={() => auth().signOut()}
            />
          ),
        }}
        />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {!userSession ? 
      (<Stack.Screen name="AuthStack" component={AuthStack} 
        options={{ headerShown: false }} />) :
      (<Stack.Screen name="ChatStack" component={ChatStack} 
        options={{ headerShown: false }} />)}
        
        
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
/*auth().onAuthStateChanged((user) => setUserSession(!!user) ile user olup olmama 
bilgisini alıp sonra bu bilgiye göre Stackleri göster yapmazsak
auth().signOut() çalışmıyor ve çıkış yapamıyoruz.  */
export default Router
  
  
  
  
  