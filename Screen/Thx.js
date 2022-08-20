import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';

export default function Thx({navigation}) {
return (
 <View style={styles.container}>
 <View style={{width:115,height:115,backgroundColor:"rgba(0, 0, 0, 0.12)",alignItems: "center",justifyContent:"center",borderRadius:55}}>

    <Image
        source={require("../assets/done.png")}
        style={{width: 90,height: 90}}
        resizeMode="contain"

    />
 </View>
    <Text style={{fontSize:28,marginTop:20,fontWeight:"bold"}}>Payment Successful!</Text>
    <TouchableOpacity
      style={{ height: 54,
        marginTop:20,
    justifyContent: 'center',
    alignItems: 'center'}}
    >

    <Button
        title="Back to home"
    
    onPress={()=>navigation.navigate("Home")}
    />
    </TouchableOpacity>
 </View>
  );
}
const styles= StyleSheet.create({
container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
}
});