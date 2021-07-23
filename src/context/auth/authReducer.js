
import { LOGIN_USUARIO, SIGNIN_USUARIO } from '../../types';

export default (state, action) => {

 
    switch(action.type){

        case LOGIN_USUARIO:
            return{
                user: action.payload
            }
       
        case SIGNIN_USUARIO:
                return{
                     ...state,
                     ...action.payload
                }
           

         default:
              return state
    }

}