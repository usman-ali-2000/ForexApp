import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import theme from "../Theme/GlobalTheme";
import Icon from "react-native-vector-icons/FontAwesome";
import { homeData } from "../assets/Data";

export default function ForexHome({ navigation }) {

    const { height, width } = Dimensions.get('window');
    const [cols, setCols] = useState(2);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Svg
                    height="60" // Height of the curve
                    width={width} // Matches screen width
                    viewBox={`0 0 ${width} 60`} // Adjust width dynamically
                    style={styles.svgStyle}
                >
                    <Path
                        fill="white" // Match header color
                        d={`M0,0 Q${width / 2},60 ${width},0 V60 H0 Z`}
                    />
                </Svg>
                <View style={{ width: '80%', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="bars" color={theme.colors.white} size={40} />
                    <Text style={styles.text}>Home</Text>
                </View>
            </View>
            <View style={{ width: '100%', backgroundColor: theme.colors.white, position: 'absolute', top: height * (0.15), }}>
                <FlatList
                    style={{ width: '90%', marginTop: '10%', marginLeft: '5%' }}
                    data={homeData}
                    numColumns={cols}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('DataList', { id: item.id })} style={{ width: '48%', borderRadius: 20, backgroundColor: 'rgb(165, 42, 42)', height: 160, marginLeft: '2%', marginTop: '5%', elevation: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={item.image} style={{ height: 40, width: 40 }} />
                            <Text style={{ color: theme.colors.white, width: 100, textAlign: 'center', fontSize: 12, fontFamily: 'Gilroy-SemiBold', marginTop: 10, lineHeight: 15 }}>{item.text}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    header: {
        backgroundColor: 'rgb(165, 42, 42)',
        height: 150, // Height of the header
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    svgStyle: {
        position: 'absolute',
        bottom: 0, // Aligns the curve at the bottom of the header
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: '10%'
    },
});
