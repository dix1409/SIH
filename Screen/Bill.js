import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity, FlatList ,Dimensions, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const {width,height}=Dimensions.get("window")
export default function Bill({navigation,route}) {

const Data=route.params.product
const Quantity=route.params.Quantity
const Price=route.params.Price
console.log(Data);
function renderItem({ item, index }) {
   //  count(item)
   return (

     <View style={{ flexDirection: "row" ,borderColor:"rgba(0,0,0,0.12)",borderTopWidth: 1,borderBottomWidth: 1,paddingVertical:10,marginVertical:5}} key={index}>
     <Image source={{uri:item.image}} style={{width:width*0.25,height:width*0.25,marginRight:15}}/>
       <View style={{ marginRight: "auto",justifyContent: "center"}}>
         <Text style={{fontSize:16,fontWeight: "bold",maxWidth:"90%"}}>{item.Name}</Text>
         <Text style={{color:"rgba(0, 0, 0, 0.6)"}}>{item.Category}</Text>
         <Text style={{color:"rgba(0, 0, 0, 0.6)"}}>{item.Size} gm</Text>
       </View>
       <View style={{justifyContent: "center"}}>
         <Text>{item.Price}.00 Rs.</Text>
         <Text style={{marginLeft:"auto",marginTop:7,borderColor:"rgba(0, 0, 0, 0.12)",borderWidth:1,padding:10,borderRadius:5}}>{item.quantity}</Text>
       </View>
     </View>
   );
 }
return (

 <SafeAreaView style={styles.container}>
   <View style={{height:"25%",backgroundColor:"rgba(0,0,0,0.7)",padding:15}} >
   <Text style={{fontSize:22,color:"white",fontWeight:"bold"}}>Invoice Overview</Text>
   <Text style={{fontSize:48,color:"white",fontWeight:"bold",marginTop:"10%"}}>{Price}.00 Rs.</Text>
   </View>
   <View style={{padding:15}}>

      <Text>Invoice</Text>
      <FlatList
              data={Data}
              style={{marginBottom:30}}
              keyExtractor={(data, index) => {
                return index;
              }}
              renderItem={renderItem}
            />
            
            <Button title={"You are all hang up !!"} onPress={()=>navigation.navigate("Payment")}  />
      </View>
</SafeAreaView>
  );
}
const styles= StyleSheet.create({
container: {
   flex:1,
   width:"100%",height:"100%",
   // paddingHo:15
}
});