import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tos(props) {
return (
 <SafeAreaView style={styles.container}>
 <ImageBackground source={require("../assets/outline.png")} style={{ alignItems: "center",justifyContent: "center",width:"100%",height:"100%"}} resizeMode="contain">
 <Text style={{fontSize:35}}>Thank You For Choosing Cash Payment Option !!</Text>
 <Image source={require("../assets/image4.png")} style={{width:129,height:130,marginVertical:15}} />
 <Text style={{fontSize:35}}>Please Proceed Towards POS For Payment</Text>
 <TouchableOpacity style={{height:50,width:"80%",backgroundColor:"rgba(21, 84, 246, 1)",justifyContent:"center",alignItems:"center",marginTop:30,borderRadius:10}}
    onPress={()=>props.navigation.navigate("Thx")}
    >
        <Text style={{fontSize:18,color:"white"}}>Proceed</Text>
    </TouchableOpacity>
 </ImageBackground>
 
 </SafeAreaView>
  );
}
const styles= StyleSheet.create({
container: {
    padding:30,
   
}
});