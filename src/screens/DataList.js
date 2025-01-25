import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../Theme/GlobalTheme";
import { homeData } from "../assets/Data";
import Icon from "react-native-vector-icons/FontAwesome";
import Collapsible1 from "../components/Collapsible";

export default function DataList({ navigation, route }) {

    const id = route?.params?.id;

    const [heading, setHeading] = useState('');
    const [listData, setListData] = useState([]);

    const fetchData = () => {
        const data = homeData.find((item) => item.id === id);
        setHeading(data.text);
        console.log(data);
        if (data.list) {
            setListData(data.list);
            console.log('data:', data.list);
        }
    }

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
            <View style={{ width: '100%', marginTop: "2%", alignItems: 'center', paddingBottom: '5%' }}>
                <FlatList
                    style={{ width: '90%' }}
                    data={listData}
                    renderItem={({ item, index }) => (
                        <Collapsible1
                            icon={item.icon}
                            text={item.title}
                            content={item?.content}
                            indexId={index}
                            passid={item.id}
                            mainIndex={id}
                        />
                        // <TouchableOpacity onPress={() => navigation.navigate('Blog', { index: id, id: item.id })} style={{ width: '100%', borderRadius: 10, backgroundColor: theme.colors.white, marginTop: '5%', elevation: 5, alignItems: 'center', flexDirection: 'row', padding: '5%' }}>
                        //     <Image source={item.icon} style={{ height: 40, width: 40 }} />
                        //     <View style={{ width: '80%' }}>
                        //         {/* <Text style={{ color: theme.colors.darkRed, width: '100%', fontSize: 16, fontFamily: 'Gilroy-Bold', marginTop: 5, lineHeight: 15, paddingLeft: '5%' }}>{item.title}</Text> */}
                        //         <Collapsible1/>
                        //         {/* <Text style={{ color: theme.colors.black, width: '100%', fontSize: 12, fontFamily: 'Gilroy-SemiBold', marginTop: 2, lineHeight: 15, paddingLeft: '5%' }} numberOfLines={2}>{item.description}</Text> */}
                        //     </View>
                        // </TouchableOpacity>
                    )}
                />
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