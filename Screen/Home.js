import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default function Home({navigation,route}) {
return (
 <View style={styles.container}>
 <Text style={{marginTop:10,fontSize:20,fontWeight:"bold",textAlign:"center"}}>Select an option</Text>
         <TouchableOpacity style={{height:221,width:"85%",marginTop:15,backgroundColor:"rgba(0, 0, 0, 0.2))",alignItems: "center",justifyContent:"center",borderRadius:16,alignSelf:"center"}}  onPress={()=>navigation.navigate("Scan")}>
             <Image source={require("../assets/barcode.png")} style={{width:200,height:150}} />
             <Text style={{marginTop:10,fontSize:18}}>Scan Barcode</Text>
         </TouchableOpacity>
         <View style={{marginTop:15,flex:1,flexDirection: 'row',alignSelf:"center"}}>
            <TouchableOpacity style={{width:"40%",height:221,borderRadius:16,marginRight:"2%" ,backgroundColor:"rgba(0, 0, 0, 0.2))",alignItems: "center",justifyContent:"center"}}>
                 <Image source={require("../assets/image2.png")}/>
             <Text style={{marginTop:10,fontSize:18}}>Offer/Sale</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{width:"40%",height:221,borderRadius:16 ,backgroundColor:"rgba(0, 0, 0, 0.2))",alignItems: "center",justifyContent:"center"}}>
                 <Image source={require("../assets/image3.png")}/>
             <Text style={{marginTop:10,fontSize:18}}>Help!</Text>

            </TouchableOpacity>
         </View>
 </View>
  );
}
const styles= StyleSheet.create({
container: {
    flex:1,
    justifyContent: 'center',
    backgroundColor:"#fff"
}
});