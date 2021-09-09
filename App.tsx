import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  LoginPage from './src/components/login'
import  HomePage from './src/components/home'
import  SignupPage from './src/components/signup';
import {Store} from "./src/store/index"
import {Provider} from "react-redux"


type RootStackParamList = {
  LoginPage : undefined;
  HomePage:undefined;
  SignupPage:undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
    <RootStack.Navigator  initialRouteName="LoginPage">
      <RootStack.Screen options={{headerShown: false}}  name="LoginPage" component={LoginPage}  />
      <RootStack.Screen  options={{ title: 'HomePage' }}   name="HomePage" component={HomePage}  />
      <RootStack.Screen  options={{ title: 'SignUp Page' ,headerLeft:() => null }}   name="SignupPage" component={SignupPage}  />
    </RootStack.Navigator>
   </NavigationContainer>
   </Provider>
  );
};

export default App;