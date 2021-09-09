import { StyleSheet,Dimensions } from "react-native"
import Colour from "../utils/colour";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const homestyles = StyleSheet.create({
   bodyContainer:{
    width:windowWidth,
    height:windowHeight,
   },
    headline: {
        textAlign: 'left', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
      },
      timer:{
        textAlign: 'right', // <-- the magic
        fontSize: 18,
        width:"60%",
        marginTop: 15,
        marginLeft: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
      },

      viewContainer:{
          flex:1,
          flexDirection: "row"
      }
  });

  export default homestyles;