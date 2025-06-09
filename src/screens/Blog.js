import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { homeData } from "../assets/Data";
import Icon from "react-native-vector-icons/FontAwesome";
import theme from "../Theme/GlobalTheme";
import { BearishHarami, BearishMarubozu, BullishEngulfing, BullishHarami, BullishMarubozu, Doji, DoubleBullish, DoubleDoji, DoubleTopChart, DownsideTasuki, EveningStar, FallingThree, GravestoneDoji, Hammer, HanginMan, HeadnShoulder, Highwave, InNeck, InvertedHammer, LongLeggedDoji, MatHold, MorningStar, OnNeck, PiercingLine, RisingThree, SeparatingLine, ShootingStar, SideBySideBlack, SideBySideWhite, SingleBearish, SingleBullish, SpinningTop, ThreeWhiteSoldier, ThrustingPattern, TripleDoji, TweezerBottom, TweezerTop, UpsideTasuki } from "../assets/BlogsData";

const { height, width } = Dimensions.get('window');

export default function Blog({ navigation, route }) {

    const id = route?.params?.id;
    const index = route?.params?.index;
    const select = route?.params?.select;
    const mainIndex = route?.params?.mainIndex;
    const headerText = route?.params?.heading;
    const mode = route?.params?.mode;

    const [heading, setHeading] = useState(headerText);
    const [manageId, setManageId] = useState(id);

    const fetchData = () => {
        const data = homeData[mainIndex].list;
        const filter = data.find(item => item.id === manageId);
        console.log('data:', data, filter, 'main', mainIndex, manageId);
        if (filter) {
            setHeading(filter.title);
        }
    };


    const handleNext = () => {
        const listLength = homeData[mainIndex].list;
        const listLen = listLength.length;
        const lastId = listLength[listLen - 1].id;
        console.log('listLength:', listLength[listLen - 1].id, manageId);
        if (manageId < lastId) {
            setManageId(prevId => prevId + 1);
        }
    };

    const handlePrev = () => {
        const listLength = homeData[mainIndex].list[0].id;
        console.log('listLength:', listLength, manageId);
        if (manageId > listLength) {
            setManageId(prevId => prevId - 1);
        }
    };

    useEffect(() => {
        fetchData();
    }, [manageId]);


    return (

        <View style={{ flex: 1, width: '100%', alignItems: 'center', backgroundColor: theme.colors.white }}>
            <View style={{ width: '100%', height: 80, backgroundColor: theme.colors.darkRed, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: "5%" }}>
                    <Icon name="chevron-left" color={theme.colors.white} size={20} />
                </TouchableOpacity>
                <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>{heading}</Text>
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingBottom: '15%', paddingTop: '5%', backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white }}>
                <View style={{ flex: 1, width: '100%', alignItems: 'center', backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white }}>
                    {manageId === 0 && (<Hammer mode={mode} />)}
                    {manageId === 1 && (<InvertedHammer mode={mode} />)}
                    {manageId === 2 && (<BullishEngulfing mode={mode} />)}
                    {manageId === 3 && (<PiercingLine mode={mode} />)}
                    {manageId === 4 && (<MorningStar mode={mode} />)}
                    {manageId === 5 && (<ThreeWhiteSoldier mode={mode} />)}
                    {manageId === 6 && (<BullishHarami mode={mode} />)}
                    {manageId === 7 && (<TweezerBottom mode={mode} />)}
                    {manageId === 8 && (<BullishMarubozu mode={mode} />)}
                    {manageId === 9 && (<HanginMan mode={mode} />)}
                    {manageId === 10 && (<ShootingStar mode={mode} />)}
                    {manageId === 11 && (<DoubleDoji mode={mode} />)}
                    {manageId === 12 && (<EveningStar mode={mode} />)}
                    {manageId === 13 && (<TripleDoji mode={mode} />)}
                    {manageId === 14 && (<BearishHarami mode={mode} />)}
                    {manageId === 15 && (<TweezerTop mode={mode} />)}
                    {manageId === 16 && (<GravestoneDoji mode={mode} />)}
                    {manageId === 17 && (<BearishMarubozu mode={mode} />)}
                    {manageId === 18 && (<Doji mode={mode} />)}
                    {manageId === 19 && (<SpinningTop mode={mode} />)}
                    {manageId === 20 && (<LongLeggedDoji mode={mode} />)}
                    {manageId === 21 && (<Highwave mode={mode} />)}
                    {manageId === 22 && (<FallingThree mode={mode} />)}
                    {manageId === 23 && (<RisingThree mode={mode} />)}
                    {manageId === 24 && (<UpsideTasuki mode={mode} />)}
                    {manageId === 25 && (<DownsideTasuki mode={mode} />)}
                    {manageId === 26 && (<MatHold mode={mode} />)}
                    {manageId === 27 && (<OnNeck mode={mode} />)}
                    {manageId === 28 && (<InNeck mode={mode} />)}
                    {manageId === 29 && (<ThrustingPattern mode={mode} />)}
                    {manageId === 30 && (<SeparatingLine mode={mode} />)}
                    {manageId === 31 && (<SideBySideWhite mode={mode} />)}
                    {manageId === 32 && (<SideBySideBlack mode={mode} />)}
                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', zIndex: 2, position: 'absolute', top: height * 0.9 }}>
                <TouchableOpacity onPress={handlePrev} style={{ alignItems: 'center', alignItems: 'center', justifyContent: 'center', }}>
                    <Image style={{ color: theme.colors.white, height: 30, width: 30 }} source={require('../assets/images/left-arrow.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNext} style={{ alignItems: 'center', alignItems: 'center', justifyContent: 'center', }}>
                    <Image style={{ color: theme.colors.white, height: 30, width: 30, transform: [{ scaleX: -1 }] }} source={require('../assets/images/left-arrow.png')} />
                </TouchableOpacity>
            </View>
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