import loginActiontype from "../action_type/loginActiontype";
import loginAction from "../action/loginAction";
import { loginService } from "../services/loginService";

const initialState = {
        userName:'',
        password: '',   
}
const loginReducer = (state = initialState,action : loginAction) =>{
    switch(action.type){
       case loginActiontype.LOGINACTION:
        return loginService(action.userName,action.password);
       default:
           return state; 
    }  

}

export default loginReducer;


