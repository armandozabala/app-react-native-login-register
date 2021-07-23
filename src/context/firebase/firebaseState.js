import React, { useReducer } from 'react';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';


const FirebaseState = (props) => {

     //Creare state inicial
     const initialState = {
            menu:[]
     }

     //useReducer 
     const [state, dispatch] = useReducer(FirebaseReducer, initialState);

     return(
          <FirebaseContext.Provider 
              value={{
                   menu: state.menu
              }}
          >
                {props.children}
          </FirebaseContext.Provider>
     )

}

export default FirebaseState;