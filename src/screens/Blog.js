import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { homeData } from "../assets/Data";
import Icon from "react-native-vector-icons/FontAwesome";
import theme from "../Theme/GlobalTheme";
import { DoubleBullish, DoubleDoji, GravestoneDoji, ShootingStar, SingleBearish, SingleBullish, TripleDoji } from "../assets/BlogsData";

export default function Blog({ navigation, route }) {

    const id = route?.params?.id;
    const index = route?.params?.index;
    const select = route?.params?.select;
    const mainIndex = route?.params?.mainIndex;

    const [heading, setHeading] = useState('');
    const [desc, setDesc] = useState([]);

    const fetchData = () => {
        const data = homeData[mainIndex]?.list?.find((item) => item.id === index);

        if (data) {
            setHeading(data.title || "Title not available");
            console.log('data:', homeData[index].list);
        } else {
            setHeading("Data not found");
            console.error('No matching data found for id:', id, 'and index:', index);
        }
    };
    useEffect(() => {
        fetchData();
        console.log('text:', select, index, id);
    }, [])



    return (

        <View style={{ flex: 1, width: '100%', alignItems: 'center', backgroundColor: theme.colors.white }}>
            <View style={{ width: '100%', height: 80, backgroundColor: theme.colors.darkRed, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: "5%" }}>
                    <Icon name="chevron-left" color={theme.colors.white} size={20} />
                </TouchableOpacity>
                <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>{heading}</Text>
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingBottom: '5%', paddingTop: '5%', backgroundColor: theme.colors.white }}>
                {select === 1 && < SingleBullish />}
                {select === 2 && < DoubleBullish />}
                {select === 3 && < SingleBearish />}
                {select === 4 && < ShootingStar />}
                {select === 5 && < GravestoneDoji />}
                {select === 6 && < DoubleDoji />}
                {select === 7 && < TripleDoji />}
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