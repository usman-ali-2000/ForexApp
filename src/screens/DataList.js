import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../Theme/GlobalTheme";
import { homeData } from "../assets/Data";
import Icon from "react-native-vector-icons/FontAwesome";
import Collapsible1 from "../components/Collapsible";
import { Definition } from "../assets/BlogsData";
import { useInterstitialAd } from "../components/Intersitial";

export default function DataList({ navigation, route }) {

    const id = route?.params?.id;
    const mode = route?.params?.mode;

    const [heading, setHeading] = useState('');
    const [tip, setTip] = useState(false);
    const [listData, setListData] = useState([]);

    const fetchData = () => {
        const data = homeData.find((item) => item.id === id);
        setHeading(data.text);
        console.log(data);
        if (data.tip) {
            setTip(true);
        }
        if (data.list) {
            setListData(data.list);
            console.log('data:', data.list, data);
        }
    }

    // At the top of the component
    const { showAd, loaded } = useInterstitialAd();

    // Inside useEffect
    useEffect(() => {
        fetchData();

        // Optional: Show ad on screen load if loaded
        if (loaded) {
            showAd();
        }
    }, [loaded]);

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <View style={{ flex: 1, width: '100%', alignItems: 'center', }}>
            <View style={{ width: '100%', height: 80, backgroundColor: theme.colors.darkRed, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: "5%" }}>
                    <Icon name="chevron-left" color={theme.colors.white} size={20} />
                </TouchableOpacity>
                <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>{heading}</Text>
            </View>
            <View style={{ width: '100%', paddingTop: "2%", alignItems: 'center', flex: 1, paddingBottom: '2%', backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white }}>
                {tip ? (
                    <View style={{ width: '100%', alignItems: 'center', backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white, flex: 1 }}>
                        <Definition mode={mode} />
                    </View>
                ) : (<FlatList
                    style={{ width: '90%' }}
                    contentContainerStyle={{ paddingBottom: '10%' }}
                    data={listData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <Collapsible1
                            icon={item.icon}
                            text={item.title}
                            mode={mode}
                            // content={item?.content}
                            // indexId={index}
                            // passid={item.id}
                            // mainIndex={id}
                            onPress={() => navigation.navigate('Blog', { mainIndex: id, index: index, id: item.id, heading: item.title, mode: mode })}
                        />
                    )}
                />)}
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