import React, { useContext } from 'react'
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert } from 'react-native'
import Background from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { loginStyles } from '../theme/loginTheme';
import firebase from '../firebase';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../context/auth/authContext';

const RegisterScreen = () => {

    const navigation = useNavigation();

    const { login, signin } = useContext(AuthContext);

    const { nombre, apellido, email, password, onChange } = useForm({
        nombre: '',
        apellido: '',
        email: '',
        password: ''
    })


    const createUser = async () => {

        const response = await firebase.auth.createUserWithEmailAndPassword(email, password).catch(err => {
            console.log(err);
            return err;
       });

        if(response.hasOwnProperty("message")){
            console.log(response.message)
            Alert.alert(
                "Información",
                 response.message,
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }else{
            let resp = await firebase.db.collection('usuarios').doc(response.user.uid).set({
                nombre,
                apellido,
                email,
                id: response.user.uid
            });

            signin(resp);
            navigation.navigate('HomeScreen');
        }

        
   }



    return (
        <>
        { /* Background */}
        <Background/>

        <KeyboardAvoidingView
                    style={{ flex: 1}}
                    behavior={ (Platform.OS === 'ios') ? 'padding' : 'height'}
        > 

        {/* Logo */}
        <WhiteLogo/>

        <View style={loginStyles.container}>
        <Text style={ loginStyles.title}>Registro</Text>

        <Text style={ loginStyles.label}>Nombre</Text>

        <TextInput
            placeholder="Nombre"
            placeholderTextColor="rgba(255,255,255,0.4)"
            autoCapitalize="none"
            style={loginStyles.inputField}
            value={nombre}
            onPress={createUser}
            onChangeText={ (value) => onChange(value,'nombre')}
        />


        <Text style={ loginStyles.label}>Apellido</Text>

        <TextInput
            placeholder="Apellido"
            placeholderTextColor="rgba(255,255,255,0.4)"
            autoCapitalize="none"
            style={loginStyles.inputField}
            value={apellido}
            onPress={createUser}
            onChangeText={ (value) => onChange(value,'apellido')}
        />


        <Text style={ loginStyles.label}>Email</Text>

        <TextInput
             placeholder="Email"
             placeholderTextColor="rgba(255,255,255,0.4)"
             keyboardType="email-address"
             autoCapitalize="none"
             style={loginStyles.inputField}
             value={email}
             onPress={createUser}
             onChangeText={ (value) => onChange(value,'email')}
        />

        <Text style={ loginStyles.label}>Password</Text>

        <TextInput
            placeholder="********"
            placeholderTextColor="rgba(255,255,255,0.4)"
            autoCapitalize="none"
            secureTextEntry
            autoCorrect={false}
            style={loginStyles.inputField}
            value={password}
            onSubmitEditing={createUser}
            onChangeText={ (value) => onChange(value,'password')}
        />

        <View style={loginStyles.buttonContainer}>
              <TouchableOpacity
                  style={loginStyles.button}
                  onPress={createUser}
              >
                    <Text style={loginStyles.buttonTexto}>Registrar</Text>
              </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity
                      onPress={() => navigation.navigate('LoginScreen')}
                  >
                        <Text style={loginStyles.buttonTexto}>Regresar</Text>
                  </TouchableOpacity>
            </View>
        </View>

        </KeyboardAvoidingView>
    </>
    )
}

export default RegisterScreen
