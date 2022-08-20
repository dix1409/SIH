import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { store } from "../Firebase/firebase";
const { height, width } = Dimensions.get("window");
export default function Barcode({navigation,route}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [Data, setData] = useState([]);
  const [CheckOut, setCheckOut] = useState(false);
  const [Id, setId] = useState("");
  const [Load, setLoad] = useState(false);
  const [num, setnum] = useState("1");
  const [Duplicate, setDuplicate] = useState();
  const[Price,setPrice]=useState(0)
  const [Quantity,setQuantity] = useState(0)
  // const Quantity = [];
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);
  const addData=(data)=>{
     if(!Duplicate){
alert("Yes my code...")
      setData([...Data, { ...data.data(), id: data.id, quantity: 1 }]);
    }

  }


  // console.log(Quantity);

  // console.log(Data);
  const handleBarCodeScanned = ({ type, data }) => {
    setLoad(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setId(data);
    try {
    
      getDoc(doc(store, `products`, data.trim()))
        .then((docs) => {
          console.log(docs.data());
          if (docs.exists()) {
            setLoad(false);
         
            setScanned(true);

            setCheckOut(true);
            
            if(Data.filter(item=>item.id === docs.id).length > 0) {

              let index=Data.findIndex(item=>item.id === docs.id)
              let cloneItem=Data
              // let item=cloneItem[index]
              cloneItem[index].quantity=cloneItem[index].quantity+1
              setPrice(Price+docs.data().Price*1)
              setData([...cloneItem])
              setQuantity(Quantity+1)

            }else{
              setData([...Data, { ...docs.data(), id: docs.id, quantity: 1 }])
              setPrice(Price+docs.data().Price*1)
              setQuantity(Quantity+1)

            }
        //     alert(Data.length)
        //     if(Data.length > 0){
        //       if(flag==0)
        //   //  var promise= Data.map((item, index) => {
            

        //   //     if (item.id === docs.id) {
         
        //   //       setDuplicate(true);
        //   //       console.log("index : "+ index);
           
        //   //       let record = {
        //   //         Category: item.Category,
        //   //         Name: item.Name,
        //   //         Price: item.Price,
        //   //         Size: item.Size,
        //   //         id: item.id,
        //   //         quantity: item.quantity + 1,
        //   //       };
        //   //       console.log(record);
          

        //   //       setData([...Data.filter(item=>item.id!==record.id),record]);
      
        //   //       flag=1
        //   //     }
        //   //   })
        //     if(flag==1) {
        //       setData([...Data, { ...docs.data(), id: docs.id, quantity: 1 }]);

        //     }
          
            
        //   }else{
        //     if (Data.length === 0 ) {
        //       // alert("No My Guess Wrong!!")
        //       setData([...Data, { ...docs.data(), id: docs.id, quantity: 1 }]);
        //     }
           
          
        // }


      
        
          } else {
          
            setLoad(false);

            alert("Please Again scan QR Code");
          }
        })
        .catch((e) => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

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
    <>
      <View style={styles.container}>
        {!scanned && !Load && (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        )}
        {/* {Load && <ActivityIndicator color="red" size="large" />} */}
      </View>
      {scanned && !Load && (
        <View style={{ width: width, height: height, padding: 15 }}>
       
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Shopping Cart
          </Text>
          <Text style={{fontSize:20,fontWeight: "bold",marginVertical:15}}>{Quantity} {Quantity>1?"items":"item"}</Text>
         
          <View style={{ height: height *0.6}}>
            <FlatList
              data={Data}
              keyExtractor={(data, index) => {
                return index;
              }}
              renderItem={renderItem}
            />
          </View>
          <View style={{ borderTopWidth:1,borderColor:"rgba(0, 0, 0, 0.12)",flex:1}}>
          <View style={{ flexDirection:"row",marginVertical:20}}>

        
          <View style={{marginRight:"auto"}}>

              <Text style={{fontSize:16,fontWeight: "800"}}>SubTotal </Text>
              <Text>Include GST.</Text>
          </View>
          <Text style={{fontSize:20,fontWeight:"bold"}}>{Price}.00 Rs.</Text>
          </View>
  <Button
            title={"Checkout"}
              onPress={()=>navigation.navigate("Checkout",{product:Data,Quantity:Quantity,Price:Price})}
            // style={{marginTop:25}}
          />
          <View style={{flexDirection:"row",marginRight:"auto",marginLeft:"auto",marginTop:"auto",marginBottom:"auto"}}>

          <Text style={{marginRight:3}}>
            or{"\n"}
            </Text>
            <TouchableOpacity    onPress={() => setScanned(false)}><Text style={{color:"rgba(21, 84, 246, 1)"}}>
            Continue Shopping
            </Text></TouchableOpacity>
          </View>
         
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
