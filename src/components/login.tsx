import React  ,{ useState }from 'react';
import { Text ,View,Image,TouchableOpacity,TextInput, Alert} from "react-native"
import loginStyle from "../styles/loginStyle";
import String from "../utils/string"
import Colors from "../utils/colour"
import {useDispatch,useSelector} from "react-redux"
import {bindActionCreators} from "redux"
import {loginActionCreator} from "../action_creator/login_action_creator"
import {State} from "../reducer"

function LoginPage (props:any){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const loginAction = bindActionCreators(loginActionCreator,dispatch);
    const login  = useSelector((state:State) => state.login);

    const onClickLoginHandle = () => {
        if(userName.length ==0){
           Alert.alert("UserName Is Empty");
        }else if(password.length == 0){ 
          Alert.alert("Password Is Empty");
        }else{
          loginAction(userName,password);
          console.log(login);
          if(login){
            props.navigation.navigate("HomePage");
          }else{
            Alert.alert("UserName Password Invaild !!!!!!!");
          }
        }
    }

    const onClickForgetHandle = () =>{
      props.navigation.navigate("SignupPage");
    }
    return(
        <View style={loginStyle.container}>
        <Image style={loginStyle.image} source={require("../utils/Images/journey_logo.png")} />
        <View style={loginStyle.inputView}>
          <TextInput
            style={loginStyle.TextInput}
            placeholder={String.USERNAME}
            placeholderTextColor={Colors.DARKBLUE}
            onChangeText={(userName) => setUserName(userName)}
          />
        </View>

        <View style={loginStyle.inputView}>
          <TextInput
            style={loginStyle.TextInput}
            placeholder={String.PASSWORD}
            placeholderTextColor={Colors.DARKBLUE}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={loginStyle.loginBtn} onPress={onClickLoginHandle} >
          <Text>{String.LOGIN}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onClickForgetHandle}>
            <Text style={loginStyle.create_button}>{String.SIGNUP}</Text>
         </TouchableOpacity>

      </View>
    );
};


export default LoginPage;