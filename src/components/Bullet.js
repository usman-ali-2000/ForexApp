import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../Theme/GlobalTheme";

export default function Bullet(props) {

    const { heading, text, dot } = props;

    return (
        <View style={{ width: '100%', alignItems: 'flex-start', flexDirection: 'row', marginTop: '1%' }}>
            {dot && <View style={{ height: 10, width: 10, backgroundColor: theme.colors.black, borderRadius: 30, marginTop: '3%' }} />}
            <Text style={{ fontSize: 16, color: theme.colors.black, paddingLeft: '2%', width:'100%' }}><Text style={styles.subHeading}>{heading}</Text> {text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    subHeading: {
        color: theme.colors.black,
        fontSize: 18,
        fontFamily: 'Gilroy-SemiBold',
        textAlign: 'left',
        paddingLeft: '2%'
    }
})