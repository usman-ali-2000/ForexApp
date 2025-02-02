import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions, FlatList, Image, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import theme from "../Theme/GlobalTheme";
import Icon from "react-native-vector-icons/FontAwesome";
import { homeData } from "../assets/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import CustomToggleButton from "../components/customeToggleButton";

const { height, width } = Dimensions.get('window');

let myMode = null;

export default function ForexHome({ navigation }) {

    const [mode, setMode] = useState(null);
    const [isToggle, setIsToggle] = useState(false);

    const fetchMode = async () => {
        try {
            const getMode = await AsyncStorage.getItem('mode');
            setMode(getMode);
            myMode = getMode;
            if (getMode === 'dark') {
                setIsToggle(true);
            } else {
                setIsToggle(false);
            }
            console.log(getMode, myMode);
        } catch (error) {
            console.error('Error fetching mode:', error);
        }
    }

    useFocusEffect(
        useCallback(() => {
            fetchMode();
        }, [fetchMode])
    );
    const handleMode = async () => {
        try {
            setIsToggle(!isToggle);
            const currentMode = await AsyncStorage.getItem('mode');
            if (currentMode === 'dark') {
                await AsyncStorage.setItem('mode', 'light');
                setMode('light'); // Update the state to reflect the new mode
            } else {
                await AsyncStorage.setItem('mode', 'dark');
                setMode('dark'); // Update the state to reflect the new mode
            }
        } catch (error) {
            console.error('Error handling mode change:', error);
        }
    };


    return (
        <View style={[styles.container, { backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white }]}>
            <View style={styles.header}>
                <Svg
                    height="60" // Height of the curve
                    width={width} // Matches screen width
                    viewBox={`0 0 ${width} 60`} // Adjust width dynamically
                    style={styles.svgStyle}
                >
                    <Path
                        fill={mode === 'dark' ? theme.colors.black : theme.colors.white} // Match header color
                        d={`M0,0 Q${width / 2},60 ${width},0 V60 H0 Z`}
                    />
                </Svg>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" color={mode === 'dark' ? theme.colors.black : theme.colors.white} size={40} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Home</Text>
                    {/* <View style={{ width: '30%', alignSelf: 'flex-end', marginBottom:'2%' }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
                            <CustomToggleButton onToggle={handleMode} isToggled={isToggle} />
                        </View>
                    </View> */}
                </View>
            </View>
            <View style={[styles.content, { backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white }]}>

                <FlatList
                    data={homeData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DataList', { id: item.id, mode: mode })}
                            style={[styles.card, { backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white }]}>
                            <Image source={item.image} style={styles.image} />
                            <View style={{ width: '70%', marginLeft: '5%' }}>
                                <Text style={styles.cardText} numberOfLines={2}>{item.text}</Text>
                                {item.description && (<Text style={{ fontSize: 12, color: theme.colors.black }} numberOfLines={1}>{item.description}</Text>)}
                            </View>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={styles.flatListContent}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
    },
    header: {
        backgroundColor: 'rgb(165, 42, 42)',
        height: 150, // Height of the header
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
    },
    svgStyle: {
        position: 'absolute',
        bottom: 0, // Aligns the curve at the bottom of the header
    },
    headerContent: {
        width: width - (width * 0.20),
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: '10%',
        width: '60%'
    },
    content: {
        height: height * 0.85,
        alignItems: 'center',
        width: width,
        position: 'absolute',
        zIndex: 2,
        top: height * 0.15
    },
    flatListContent: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: '5%',
    },
    card: {
        width: width - (width * 0.10),
        borderRadius: 20,
        borderColor: 'rgb(165, 42, 42)',
        height: 120,
        // paddingVertical:'5%',
        marginTop: '5%',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
    },
    image: {
        height: 50,
        width: 50,
    },
    cardText: {
        color: theme.colors.darkRed,
        width: '100%',
        fontSize: 20,
        fontFamily: 'Gilroy-Bold',
        marginTop: 10,
    },
});
