import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Styles from "./Style";
import Header from "../../components/Header/Index";
import SquareRadio from "../../components/SquareRadio/Index";

const Terms = ({ navigation }) => {

    return (
        <View style={Styles.container}>
            <Header text="Terms of Use" onpress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={Styles.text}>
                    Terms & Conditions

                    1. Introduction

                    Welcome to the Candlestick Pattern Blogs App ("App"). By accessing or using this App, you agree to comply with these Terms & Conditions. If you do not agree, please do not use the App.

                    2. Use of the App

                    The App is designed for educational and informational purposes related to candlestick patterns and trading.

                    You must be at least 18 years old to use this App.

                    You agree not to use the App for any illegal or unauthorized purposes.

                    3. Content & Intellectual Property

                    All content, including articles, charts, and images, is owned by the App or its licensors.

                    You may not copy, modify, distribute, or reproduce content without permission.

                    4. User-Generated Content

                    Users may contribute comments or discussions related to candlestick patterns.

                    The App reserves the right to remove any content deemed inappropriate or misleading.

                    5. Disclaimer

                    The information provided is for educational purposes only and does not constitute financial advice.

                    We do not guarantee the accuracy, completeness, or reliability of any content.

                    6. Limitation of Liability

                    The App is not responsible for any trading losses or financial decisions made based on the content.

                    We are not liable for any damages resulting from the use or inability to use the App.

                    7. Changes to Terms

                    We reserve the right to update these Terms at any time. Continued use of the App constitutes acceptance of the revised Terms.
                </Text>
            </ScrollView>
        </View>
    )
}
export default Terms;


const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '5%',
        width: '80%'
    },
})