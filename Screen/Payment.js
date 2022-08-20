import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity,Dimensions, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const {width, height}=Dimensions.get("window")
export default function Payment({navigation}) {
const image=[
    {source:require("../assets/image4.png"),
    data:"Cash",
    Screen:"Tos"
},{
    source:require("../assets/image5.png")   ,
    data:"Card Debit/Credit",
    Screen:"Card"
},
{
    source:require("../assets/image6.png")  ,
    data:"Net Banking",
    Screen:"Thx"
}
]

const upiImage=[
    
        require("../assets/image8.png")
    ,
    
       require("../assets/image9.png")
,
    
        require("../assets/image10.png")
    
]
const renderItem=({item,index})=>{
    return(
        <TouchableOpacity style={{width:width*0.25,height:221,backgroundColor:"rgba(0, 0, 0, 0.2)",marginLeft:15,alignItems:"center",justifyContent:"center",borderRadius:10}} key={index} onPress={()=>navigation.navigate(item.Screen)} >
        <Image source={item.source} style={{width:74,height:72}} />
        <Text style={{marginTop:10}}>{item.data}</Text>
      </TouchableOpacity>
    )
}
const upiRenderer =({item,index})=>{
    return(
        <Image source={item} style={{width:74,height:72}} resizeMode="contain" key={index} />

    )
}
return (
 <SafeAreaView style={styles.container}>
 <View style={{padding:15}}>
 <Text style={{textAlign: 'center',fontSize:20,fontWeight: 'bold'}}>Please select the Payment option</Text>
 <View style={{marginTop:"20%"}} >
    <View style={{alignItems: 'center'}}>
    <FlatList
        data={image}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={{alignItems: 'center'}}
    />
      <TouchableOpacity style={{height:221,backgroundColor:"rgba(0, 0, 0, 0.2)",width:"95%",marginTop:"20%",borderRadius:20,alignItems:"center",justifyContent:"center"}}
      onPress={()=>navigation.navigate("Upi")}
      >
        <Image
        source={require('../assets/image7.png')}
        style={{height:100,width:100}}
        resizeMode="contain"
        />
         <FlatList
        data={upiImage}
        renderItem={upiRenderer}
        horizontal
        // contentContainerStyle={{alignItems: 'center'}}
    />
        
      </TouchableOpacity>
      
    
    </View>
 </View>
 </View>
 </SafeAreaView>
  );
}
const styles= StyleSheet.create({
container: {
    flex:1,
 
}
});