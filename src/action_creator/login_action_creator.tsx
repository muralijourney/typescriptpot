import { Dispatch } from "redux";
import loginAction from "../action/loginAction";
import loginActiontype from "../action_type/loginActiontype";


export  const loginActionCreator = (userName:string,password:string) =>{
    return(dispatch:Dispatch<loginAction>) =>{
        dispatch({
            type:loginActiontype.LOGINACTION,
            userName:userName,
            password:password
        })
    }
}


