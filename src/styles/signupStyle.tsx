import { StyleSheet,Dimensions } from "react-native"
import Colour from "../utils/colour";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const signupStyles = StyleSheet.create({
  SectionStyle: {
    backgroundColor: Colour.PALERED,
    borderRadius: 30,
    width: "80%",
    height: "10%",
    marginBottom: 20,
    alignItems: 'center',
    marginLeft: 35,
    marginRight: 35,
    },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    width: "80%",
    height: "8%",
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
    textAlign:"center"
  },
  inputStyle: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 35,
    marginRight: 35,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  });

  export default signupStyles;