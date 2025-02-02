import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Styles from "./Style";
import Icon from "react-native-vector-icons/FontAwesome";
import theme from "../../Theme/GlobalTheme";

const PriavcyPolicy = ({ navigation }) => {

    return (
        <View style={Styles.container}>
            <View style={{ width: '100%', height: 80, backgroundColor: theme.colors.darkRed, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: "5%" }}>
                    <Icon name="chevron-left" color={theme.colors.white} size={20} />
                </TouchableOpacity>
                <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>Privacy Policy</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={Styles.text}>
                    1. Introduction

                    This Privacy Policy explains how we collect, use, and protect your personal information when you use the Candlestick Pattern Blogs App.

                    {'\n\n'} 2. Information We Collect

                    Personal Information: When you sign up or interact with the App, we may collect your name, email address, and contact details.

                    Usage Data: We may collect information about your interactions with the App, such as pages viewed and time spent.

                    {'\n\n'}3. How We Use Your Information

                    To provide and improve our App services.

                    To communicate with users regarding updates or support.

                    To analyze usage trends and enhance the App experience.

                    {'\n\n'}4. Data Sharing & Security

                    We do not sell or rent your personal information.

                    Your data is securely stored and protected against unauthorized access.

                    {'\n\n'}5. Third-Party Services

                    The App may use third-party services for analytics or advertisements.

                    These services have their own privacy policies, and we are not responsible for their practices.

                    {'\n\n'}6. Cookies & Tracking Technologies

                    We may use cookies to enhance user experience and track App usage.

                    You can manage cookie preferences through your device settings.

                    {'\n\n'}7. Changes to Privacy Policy

                    We may update this policy from time to time. Any changes will be posted in the App.
                </Text>
            </ScrollView>
        </View>
    )
}
export default PriavcyPolicy;




const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '5%',
        width: '80%'
    },
})