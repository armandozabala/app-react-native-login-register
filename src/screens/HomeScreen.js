import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import AuthContext from '../context/auth/authContext';

const HomeScreen = () => {
  const {state} = useContext(AuthContext);

  console.log('State ', state);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
