import React,{ useState,useEffect } from 'react';
import { Text,View } from "react-native";
import homestyles from '../styles/homeStyle';


function HomePage(){
    const [curTime, setcurTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            var hours = new Date().getHours(); //Current Hours
            var min = new Date().getMinutes(); //Current Minutes
            var sec = new Date().getSeconds(); //Current Seconds
            setcurTime(hours.toString()+":"+min.toString()+":"+sec.toString());
          }, 1000);
      
          return () => clearInterval(intervalId);
      });
    

    return(
        <View style={homestyles.bodyContainer}>
        <View style={homestyles.viewContainer}>
         <Text style={homestyles.headline}>Login User:</Text>
         <Text style={homestyles.timer}>{curTime}</Text>
       </View>
       </View>
    );
}

export default HomePage;