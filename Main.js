import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screen/Home';
import Barcode from './Screen/Barcode';
import Bill from './Screen/Bill';
import Payment from './Screen/Payment';
import Tos from './Screen/Tos';
import Card from './Screen/Card';
import Thx from './Screen/Thx';
import Upi from './Screen/Upi';

export default function Main(props) {
    const Stack=createNativeStackNavigator()
return (
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="Scan" component={Barcode} options={{headerShown:false}} />
            <Stack.Screen name="Checkout" component={Bill} options={{headerShown:false}}  />
        <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}}  />

            <Stack.Screen name="Tos" component={Tos} options={{headerShown:false}}  />
            <Stack.Screen name="Card" component={Card} options={{headerShown:false}}  />
            <Stack.Screen name="Thx" component={Thx} options={{headerShown:false}}  />
            <Stack.Screen name="Upi" component={Upi} options={{headerShown:false}} />


            {/* <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}}  /> */}

         </Stack.Navigator>
    </NavigationContainer>
  );
}
