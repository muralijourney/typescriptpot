// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import signupStyles from '../styles/signupStyle';
import Colour from '../utils/colour';


const RegisterScreen = (props:any) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      Alert.alert('Please fill Name');
      return;
    }
    if (!userPassword) {
      Alert.alert('Please fill Password');
      return;
    }
    if (!userEmail) {
      Alert.alert('Please fill Email Id');
      return;
    }
    if (!userAge) {
      Alert.alert('Please fill Age');
      return;
    }
    if (!userAddress) {
      Alert.alert('Please fill Address');
      return;
    }
    
    //Show Loader
    props.navigation.navigate("LoginPage");
   }
   
    

  return (
    <View style={{
    width:"100%",
    height:"100%",
    flexDirection:"column"
    }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex:1,
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: Colour.WHITE,
        }}>
      
        <KeyboardAvoidingView enabled>
          <View style={signupStyles.SectionStyle}>
            <TextInput
              style={signupStyles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              placeholder="Enter UserName"
              returnKeyType="next"
              placeholderTextColor={Colors.DARKBLUE}
              // onSubmitEditing={() =>
              //    emailInputRef.current 
              // }
              // blurOnSubmit={false}
            />
          </View>
          <View style={signupStyles.SectionStyle}>
            <TextInput
              style={signupStyles.inputStyle}
              onChangeText={(userPassword) => setUserPassword(userPassword)}
              placeholder="Enter Password"
              returnKeyType="next"
              secureTextEntry={true}
              // onSubmitEditing={() =>
              //   passwordInputRef.current 
              // }
              // blurOnSubmit={false}
            />
          </View>
          <View style={signupStyles.SectionStyle}>
            <TextInput
              style={signupStyles.inputStyle}
              onChangeText={(userEmail) =>
                setUserEmail(userEmail)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Email Id"
              returnKeyType="next"
              // onSubmitEditing={() =>
              //   ageInputRef.current 
              // }
              // blurOnSubmit={false}
            />
          </View>
          <View style={signupStyles.SectionStyle}>
            <TextInput
              style={signupStyles.inputStyle}
              onChangeText={(UserAge) => setUserAge(UserAge)}
              underlineColorAndroid="#f000"
              placeholder="Enter Age"
              keyboardType="numeric"
              returnKeyType="next"
              // onSubmitEditing={() =>
              //   addressInputRef.current 
              // }
              // blurOnSubmit={false}
            />
          </View>
          <View style={signupStyles.SectionStyle}>
            <TextInput
              style={signupStyles.inputStyle}
              onChangeText={(UserAddress) =>
                setUserAddress(UserAddress)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Address"
              autoCapitalize="sentences"
              returnKeyType="next"
              // onSubmitEditing={Keyboard.dismiss}
              // blurOnSubmit={false}
            />
          </View>
          {errortext != '' ? (
            <Text style={signupStyles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity
            style={signupStyles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={signupStyles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};


export default RegisterScreen;
