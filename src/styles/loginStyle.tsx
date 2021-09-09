import { StyleSheet } from "react-native"
import Colour from "../utils/colour";

const loginstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colour.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 30,
    width:"60%",
    height:"19%"
  },
 
  inputView: {
    backgroundColor: Colour.PALERED,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
 
  create_button: {
    height: 30,
    marginBottom: 10,
    marginTop:10
  },

 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: Colour.PINK,
  },
  });

  export default loginstyles;