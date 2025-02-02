import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../Theme/GlobalTheme";

export default function Bullet(props) {

    const { heading, text, dot, mode } = props;

    return (
        <View style={{ width: '100%', alignItems: 'flex-start', flexDirection: 'row', marginTop: '1%' }}>
            {dot && <View style={{ height: 10, width: 10, backgroundColor: mode === 'dark' ? theme.colors.white : theme.colors.black, borderRadius: 30, marginTop: '3%' }} />}
            <Text style={{ fontSize: 16, color: mode === 'dark' ? theme.colors.white : theme.colors.black, paddingLeft: '2%', width: '100%' }}><Text style={[styles.subHeading,{ color: mode === 'dark' ? theme.colors.white : theme.colors.black }]}>{heading}</Text> {text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    subHeading: {
        fontSize: 18,
        fontFamily: 'Gilroy-SemiBold',
        textAlign: 'left',
        paddingLeft: '2%'
    }
})