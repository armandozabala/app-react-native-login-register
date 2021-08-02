/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import Background from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { loginStyles } from '../theme/loginTheme';
import firebase from '../firebase';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../context/auth/authContext';

const LoginScreen = () => {

    const navigation = useNavigation();

    const { login } = useContext(AuthContext);


    const { email, password, onChange } = useForm({
        email: 'jose@gmail.com',
        password: 'armando22',
    });

    const onLogin = async() => {


        const resp = await firebase.auth.signInWithEmailAndPassword(email, password).catch(err => {
            Alert.alert(
                'Información',
                err.message, [{
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
            );
            return err;
        });


        if (resp.hasOwnProperty('user')) {

            const us = await firebase.db.collection('users').doc(resp.user.uid).get();

            const usuario = us.data();

            console.log('SET', usuario);

            login(usuario);

            navigation.navigate('HomeScreen');
        }

    };

    return ( <
        >
        { /* Background */ } < Background / >
        <
        KeyboardAvoidingView style = {
            { flex: 1 }
        }
        behavior = { Platform.OS === 'ios' ? 'padding' : 'height' } > { /* Logo */ } < WhiteLogo / >
        <
        View style = { loginStyles.container } >
        <
        Text style = { loginStyles.title }
        />  <
        Text style = { loginStyles.label } > Email < /Text > <
        TextInput placeholder = "Email"
        placeholderTextColor = "rgba(255,255,255,0.4)"
        keyboardType = "email-address"
        autoCapitalize = "none"
        style = { loginStyles.inputField }
        value = { email }
        onPress = { onLogin }
        onChangeText = { value => onChange(value, 'email') }
        /> <
        Text style = { loginStyles.label } > Password < /Text> <
        TextInput placeholder = "********"
        placeholderTextColor = "rgba(255,255,255,0.4)"
        autoCapitalize = "none"
        secureTextEntry autoCorrect = { false }
        style = { loginStyles.inputField }
        value = { password }
        onSubmitEditing = { onLogin }
        onChangeText = { value => onChange(value, 'password') }
        /> <
        View style = { loginStyles.buttonContainer } >
        <
        TouchableOpacity style = { loginStyles.button }
        onPress = { onLogin } >
        <
        Text style = { loginStyles.buttonTexto } > Login < /Text>{' '} < /
        TouchableOpacity > { ' ' } <
        /View>{' '} <
        View style = {
            { alignItems: 'center', marginTop: 20 }
        } >
        <
        TouchableOpacity onPress = {
            () => navigation.navigate('RegisterScreen')
        } >
        <
        Text style = { loginStyles.buttonTexto } > Registrar < /Text>{' '} < /
        TouchableOpacity > { ' ' } <
        /View>{' '} < /
        View > <
        /KeyboardAvoidingView>{' '} < / > ;

    );
};

export default LoginScreen;