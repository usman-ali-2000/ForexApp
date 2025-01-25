import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Image, Pressable, ScrollView, Text, ToastAndroid, View } from "react-native";
import Styles from "./Style";
import FlatItem from "../../components/FlatItem/Index";
import { addAttempt, BaseUrl, getCurrentDate, openLink } from "../../assets/Data";
import SnakeGame from "../SnakeGame";
import { TouchableOpacity } from "react-native";
import theme from "../../Theme/GlobalTheme";
import FastImage from "react-native-fast-image";
import HomeHeader from "../../components/HomeHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCurrentPosition } from "react-native-geolocation-service";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import NetInfo from '@react-native-community/netinfo';
import ImageSlider from "react-native-image-slider";
import LinearGradient from "react-native-linear-gradient";

const Home = ({ navigation }) => {

    const [column, setColumn] = useState(2);
    const [data1, setData1] = useState([]);
    const [attempts, setAttempts] = useState(0);
    const [isConnected, setIsConnected] = useState(null);
    const [loading, setLoading] = useState(false);
    const [coins, setCoins] = useState(null);
    const [position, setPosition] = useState(0);
    const [name, setName] = useState('');
    const [links, setLinks] = useState({});
    const [bannerData, setBannerData] = useState([]);



    const fetchLink = async () => {
        try {
            const response = await fetch(`${BaseUrl}/asset`);
            const response2 = await fetch(`${BaseUrl}/banner`);
            const jsondata = await response.json();
            const json = await response2.json();
            setBannerData(json.banners);
            setLinks(jsondata.assets[0]);
            console.log('data:', jsondata.assets[0]);
        } catch (e) {
            console.log('error fetching links...', e);
        }
    }

    const fetchData = async () => {
        const id = await AsyncStorage.getItem("id");
        try {
            setLoading(true);
            const response = await fetch(`${BaseUrl}/register/${id}`);
            const json = await response.json();
            const date = getCurrentDate();
            console.log('json:', json.name, json.attempts, json.date, json.referCoin, `${date.day}/${date.month}/${date.year}`);
            setCoins(json.coin + json.referCoin);
            setAttempts(json.attempts);
            setName(json.name);
            const formattedDate = `${date.day}/${date.month}/${date.year}`;
            if (json.date !== formattedDate) {
                console.log('json.date:', json.date, formattedDate, json.date === formattedDate);
                addAttempt(0, `${date.day}/${date.month}/${date.year}`);
            }
            const userId = await AsyncStorage.getItem("userId");
            console.log('id:', id);
            setData1(json);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log('error fetching...', e);
        }
    }


    useEffect(() => {
        fetchLink();
        fetchData();
    }, []);


    const move = (index) => {
        const newPosition = index >= bannerData?.length ? 0 : index;
        setPosition(newPosition);
    };

    const renderItem = ({ item }) => (
        <View style={Styles.flatcontainer}>
            <FlatItem
                image={item.imageUrl}
                heading={item.category}
                onPress={() => navigation.navigate('ProductView', { category: item.category })}
            // text={item.text}
            // lastupdate={item.lastupdate}
            // onpress={() => handleLearnMore()}
            />
        </View>
    );

    const handleLearnMore = () => {
        navigation.navigate('Detail');
    }

    useEffect(() => {
        // Subscribe to network state updates
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
            console.log("Connection type:", state.type);
            console.log("Is connected?", state.isConnected);
        });

        return () => {
            unsubscribe();
        };
    }, []);


    const handlePlay = async () => {
        if (isConnected) {
            await fetchData();
            await navigation.navigate('Game', { attempt: attempts });
        } else {
            ToastAndroid.show('internet not connected!', ToastAndroid.SHORT);
        }
    }

    useEffect(() => {
        // console.log('data:', Data);
    }, [])

    return (
        <LinearGradient colors={[theme.colors.lightPink, theme.colors.lightPink, theme.colors.lightPink,]} style={{ width: '100%' }}>
            <View style={Styles.container}>
                <HomeHeader onpress={() => navigation.openDrawer()} rightPress={() => navigation.navigate('Wallet')} name={name} coin={coins} />
                <ScrollView style={{ width: '100%', backgroundColor: 'transparent' }} contentContainerStyle={{ alignItems: 'center' }}>
                    {bannerData.length > 0 && <View style={{ width: '90%', paddingRight: '2%', height: 130, marginTop: '10%', backgroundColor:theme.colors.lightPink,}}>
                        <ImageSlider
                            loopBothSides={false}
                            images={bannerData.length > 0 ? bannerData : []}
                            position={position}
                            onPositionChanged={setPosition}
                            customSlide={({ index, item }) => (
                                <View key={index} style={Styles.slide}>
                                    <Image source={{ uri: item?.banner }} style={Styles.image} resizeMode="cover" />
                                </View>
                            )}
                            customButtons={(position) => (
                                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'space-between' }}>
                                    {bannerData?.map((image, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => move(index)}
                                            style={[{
                                                backgroundColor: position === index ? theme.colors.purple : theme.colors.white,
                                                marginTop: '2%',
                                                height: position === index ? 8 : 6,
                                                width: position === index ? 15 : 6,
                                                borderRadius: 5,
                                                margin: 5,
                                            }]}
                                        />
                                    ))}
                                </View>
                            )}
                        />
                    </View>}
                    <Text style={{ color: theme.colors.purple, padding: 5, alignSelf: 'center', fontSize: 18, fontFamily: 'Gilroy-Bold', backgroundColor: 'rgba(0, 0, 0, 0)', width: '90%', marginTop: '10%' }}>Community</Text>
                    <View style={{width:'90%', alignItems:'center', backgroundColor: 'rgba(255, 255, 255, 0.3)', padding:'5%', borderRadius:5 , marginTop:'5%'}}>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: '5%' }}>
                            <TouchableOpacity onPress={() => { isConnected && openLink(links.facebook) }} style={{ alignItems: 'center', width: '25%' }}>
                                <View style={{ backgroundColor: theme.colors.white, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10, elevation: 5 }}>
                                    <Icon name="facebook" size={28} color={'blue'} />
                                </View>
                                <Text style={{ color: theme.colors.white, paddingTop: 5, fontSize: 12, fontFamily: 'Gilroy-SemiBold' }}>Facebook</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { isConnected && openLink(links.whatsapp) }} style={{ alignItems: 'center', width: '25%' }}>
                                <View style={{ backgroundColor: theme.colors.white, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10, elevation: 5 }}>
                                    <Icon name="whatsapp" size={28} color={theme.colors.green} />
                                </View>
                                <Text style={{ color: theme.colors.white, paddingTop: 5, fontSize: 12, fontFamily: 'Gilroy-SemiBold' }}>Whatsapp</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { isConnected && openLink(links.instagram) }} style={{ alignItems: 'center', width: '25%' }}>
                                <View style={{ backgroundColor: theme.colors.white, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10, elevation: 5 }}>
                                    <Icon name="instagram" size={28} color={'rgb(222, 49, 99)'} />
                                </View>
                                <Text style={{ color: theme.colors.white, paddingTop: 5, fontSize: 12, fontFamily: 'Gilroy-SemiBold' }}>Instagram</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { isConnected && openLink(links.twitter) }} style={{ alignItems: 'center', width: '25%' }}>
                                <View style={{ backgroundColor: theme.colors.white, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10, elevation: 5 }}>
                                    <Icon name="twitter" size={28} color={theme.colors.blue} />
                                </View>
                                <Text style={{ color: theme.colors.white, paddingTop: 5, fontSize: 12, fontFamily: 'Gilroy-SemiBold' }}>Twitter</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: '5%' }}>
                            <TouchableOpacity onPress={() => { isConnected && openLink(links.tiktok) }} style={{ alignItems: 'center', width: '25%' }}>
                                <View style={{ backgroundColor: theme.colors.white, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10, elevation: 5 }}>
                                    <MaterialIcon name="tiktok" size={28} color={theme.colors.black} />
                                </View>
                                <Text style={{ color: theme.colors.white, paddingTop: 5, fontSize: 12, fontFamily: 'Gilroy-SemiBold' }}>TikTok</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { isConnected && openLink(links.youtube) }} style={{ alignItems: 'center', width: '25%' }}>
                                <View style={{ backgroundColor: theme.colors.white, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10, elevation: 5 }}>
                                    <Icon name="youtube" size={22} color={theme.colors.red} />
                                </View>
                                <Text style={{ color: theme.colors.white, paddingTop: 5, fontSize: 12, fontFamily: 'Gilroy-SemiBold' }}>Youtube</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { isConnected && openLink(links.telegram) }} style={{ alignItems: 'center', width: '25%' }}>
                                <View style={{ backgroundColor: theme.colors.white, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10, elevation: 5 }}>
                                    <Icon name="telegram" size={22} color={theme.colors.blue} />
                                </View>
                                <Text style={{ color: theme.colors.white, paddingTop: 5, fontSize: 12, fontFamily: 'Gilroy-SemiBold' }}>Telegram</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { isConnected && openLink(links.discord) }} style={{ alignItems: 'center', width: '25%' }}>
                                <View style={{ backgroundColor: theme.colors.white, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10, elevation: 5 }}>
                                    <MaterialIcon name="discord" size={28} color={'purple'} />
                                </View>
                                <Text style={{ color: theme.colors.white, paddingTop: 5, fontSize: 12, fontFamily: 'Gilroy-SemiBold' }}>Discord</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', marginTop: '8%', }}>
                        {loading || !isConnected ? <ActivityIndicator size={"large"} color={theme.colors.blue} /> :
                            <LinearGradient colors={[theme.colors.purple, theme.colors.purple, theme.colors.purple,]} style={{ width: 80, height: 80, borderRadius: 100, alignItems: 'center', elevation: 5, marginBottom: '5%' }}>
                                <TouchableOpacity onPress={handlePlay} style={{ alignSelf: 'center', backgroundColor: 'transparent', height: 80, width: 80, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Icon name="gamepad" size={38} color={theme.colors.white} />
                                        <Text style={{ fontSize: 12, color: theme.colors.white, fontFamily: 'Gilroy-SemiBold' }}>Play</Text>
                                        {/* <Text style={{ fontSize: 10, color: theme.colors.white, fontFamily: 'Gilroy-SemiBold' }}>Game</Text> */}
                                    </View>
                                </TouchableOpacity>
                            </LinearGradient>}
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    )
}

export default Home;