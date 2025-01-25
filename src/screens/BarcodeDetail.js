import React from "react";
import { Text, View } from "react-native";

export default function BarcodeDetail({ route }) {

    const details = route?.params?.detail;

    return (
        <View style={{flex:1, width:'100%', alignItems:'center', justifyContent:'center'}}>
            <Text style={{width:'90%', textAlign:'center', fontWeight:'bold', color:'black'}}>Barcode details</Text>
            <Text style={{width:'90%', textAlign:'center', color:'black', fontSize:16}}>{details}</Text>
        </View>
    )
}