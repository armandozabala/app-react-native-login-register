import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import FirebaseState from './src/context/firebase/firebaseState';
import AuthState from './src/context/auth/authState';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';





const Stack = createStackNavigator();


const App = () => {
 

  return (
    <>
    <FirebaseState>
      <AuthState> 
      <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle:{
                   backgroundColor: '#5856D6'
                },
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerTintColor: '#000'
             }}
            >
          
              <Stack.Screen 
                name="LoginScreen" 
                component={LoginScreen}
                options={{
                    title: 'Login',
                    headerShown:false,
                    headerLeft: ()=> null
                }}/>

              <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen}
                options={{
                    title: 'Home',
                    //headerLeft: null,
                }}/>

              <Stack.Screen 
                name="RegisterScreen" 
                component={RegisterScreen}
                options={{
                    title: 'Registro',
                    headerShown:false
                }}/>

        </Stack.Navigator>
       </NavigationContainer>
       </AuthState>
       </FirebaseState>
       </>
  );
};



export default App;
