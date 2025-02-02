import React from "react";
import { ScrollView, StyleSheet, Text, ToastAndroid, View } from "react-native";
import theme from "../Theme/GlobalTheme";
import Clipboard from "@react-native-clipboard/clipboard";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Terms({navigation}) {

    const textToCopy = 'wingedxnetwork@gmail.com';

    const copyToClipboard = () => {
        Clipboard.setString(textToCopy);
        ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
    };


    return (
        <View style={{ width: "100%", alignItems: 'center', flex: 1, backgroundColor:theme.colors.white }}>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingBottom: '5%' }}>
            <View style={{ width: '100%', height: 80, backgroundColor: theme.colors.darkRed, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: "5%" }}>
                    <Icon name="chevron-left" color={theme.colors.white} size={20} />
                </TouchableOpacity>
                <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>Terms & Conditions</Text>
            </View>
                <Text style={{ width: '90%', fontFamily: 'Gilroy-Bold', color: theme.colors.black, fontSize: 18, marginTop: '5%' }}>TERMS AND CONDITIONS</Text>
                <Text style={{ width: '90%', fontFamily: 'Gilroy-Bold', color: theme.colors.black, fontSize: 18, marginTop: '5%' }}>1. Introduction</Text>
                <Text style={{ width: '90%', fontFamily: 'Gilroy-SemiBold', color: theme.colors.black, fontSize: 14, marginTop: '5%' }}>Welcome to the Candlestick Pattern Blogs App ("App"). By accessing or using this App, you agree to comply with these Terms & Conditions. If you do not agree, please do not use the App.</Text>
                <Text style={{ width: '90%', fontFamily: 'Gilroy-Bold', color: theme.colors.black, fontSize: 18, marginTop: '5%' }}>2. Use of the App</Text>
                <Text style={{ width: '90%', fontFamily: 'Gilroy-SemiBold', color: theme.colors.black, fontSize: 14, marginTop: '5%' }}>The App is designed for educational and informational purposes related to candlestick patterns and trading.</Text>
                <Text style={{ width: '90%', fontFamily: 'Gilroy-SemiBold', color: theme.colors.black, fontSize: 14, marginTop: '1%' }}>You must be at least 18 years old to use this App.</Text>
                <Text style={{ width: '90%', fontFamily: 'Gilroy-SemiBold', color: theme.colors.black, fontSize: 14, marginTop: '1%' }}>You agree not to use the App for any illegal or unauthorized purposes.</Text>
                <Text style={{ width: '90%', fontFamily: 'Gilroy-Bold', color: theme.colors.black, fontSize: 18, marginTop: '5%' }}>3. Content & Intellectual Property</Text>
                <Text style={{ width: '90%', fontFamily: 'Gilroy-SemiBold', color: theme.colors.black, fontSize: 14, marginTop: '1%' }}>All content, including articles, charts, and images, is owned by the App or its licensors.</Text>
                <Text style={{ width: '90%', fontFamily: 'Gilroy-SemiBold', color: theme.colors.black, fontSize: 14, marginTop: '1%' }}>You may not copy, modify, distribute, or reproduce content without permission.</Text>
                <Text style={{ width: '90%', fontFamily: 'Gilroy-Bold', color: theme.colors.black, fontSize: 18, marginTop: '5%' }}>4. User-Generated Content</Text>
                <Text style={{ width: '90%', fontFamily: 'Gilroy-SemiBold', color: theme.colors.black, fontSize: 14, marginTop: '5%' }}>Users may contribute comments or discussions related to candlestick patterns. {'\n\n'} The App reserves the right to remove any content deemed inappropriate or misleading.</Text>
                <Text style={{ width: '90%', fontFamily: 'Gilroy-Bold', color: theme.colors.black, fontSize: 18, marginTop: '5%' }}>5. Changes to Terms</Text>
                <Text style={{ width: '90%', fontFamily: 'Gilroy-SemiBold', color: theme.colors.black, fontSize: 14, marginTop: '1%' }}>We reserve the right to update these Terms at any time. Continued use of the App constitutes acceptance of the revised Terms.</Text>
               </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '5%',
        width: '80%'
    },
})