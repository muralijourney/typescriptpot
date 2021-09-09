import {combineReducers} from "redux"
import loginReducer from "./loginReducer";

const reducers = combineReducers({
    login:loginReducer
});

export default reducers; 


export type State = ReturnType<typeof reducers>
