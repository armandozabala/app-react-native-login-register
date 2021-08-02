import React, {useReducer, useEffect} from 'react';
import firebase from '../../firebase';
import AuthReducer from './authReducer';
import AuthContext from './authContext';
import {LOGIN_USUARIO, SIGNING_USUARIO, LOGIN_ON} from '../../types';

const AuthState = props => {
  //Creare state inicial
  const initialState = {
    user: {},
  };

  const login = user => {
    dispatch({
      type: LOGIN_USUARIO,
      payload: user,
    });
  };

  const signin = async user => {
    dispatch({
      type: SIGNING_USUARIO,
      payload: user,
    });
  };

  const logout = async () => {
    const log = await firebase
      .auth()
      .signOut()
      .catch(err => {
        console.log(err);
        return err;
      });
    return log;
  };

  //useReducer
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        signin,
        state,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
