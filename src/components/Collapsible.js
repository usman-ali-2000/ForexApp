import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import Collapsible from "react-native-collapsible";
import theme, { colors } from "../Theme/GlobalTheme";
import { useNavigation } from "@react-navigation/native";
// import { wp } from "../assets/Data";

const { width, height } = Dimensions.get('window');

export default function Collapsible1(props) {
    const navigation = useNavigation();

    const { text, content, onSelect, icon, indexId, passid, mainIndex } = props;
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState('');

    const toggleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleSelect = (item) => {
        setSelected(item);
        setIsCollapsed(true);
        if (onSelect) {
            onSelect(item);
        }
    };

    useEffect(()=>{
        console.log('text:', indexId, passid );
    },[])

    return (
        <View style={{ width: '100%', alignItems: 'center' }}>
            <View style={{ width: '100%', borderRadius: 10, backgroundColor: theme.colors.white, marginTop: '5%', elevation: 5, alignItems: 'center', flexDirection: 'row', padding: '5%' }}>
                <Image source={icon} style={{ height: 40, width: 40 }} />
                <TouchableOpacity onPress={toggleCollapsed} style={styles.ButtonContainer}>
                    <Text style={styles.dropDownText}>{text}</Text>
                </TouchableOpacity>
            </View>
            {content && (<Collapsible collapsed={isCollapsed}>
                <View style={styles.content}>
                    {content?.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('Blog', { mainIndex:mainIndex, index: indexId, id: passid, select: item.id })}>
                            <Text key={index} style={styles.itemText}>{item.text}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Collapsible>)}
        </View>
    );
}

const styles = StyleSheet.create({
    textHeading: {
        width: '90%',
        fontSize: 12,
        fontFamily: 'Gilroy-SemiBold',
        padding: '1%',
        paddingLeft: 0,
        color: theme.colors.darkGrey,
        marginBottom: 5,
        marginTop: '5%'
    },
    arrow: {
        height: 20,
        width: 20
    },
    ButtonContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderWidth: 1,
        borderRadius: 3,
        height: 48,
        padding: 10,
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.grey,
    },
    content: {
        padding: 10,
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: theme.colors.white,
        elevation: 5,
        width: width / 1.1,
    },
    dropDownText: {
        color: theme.colors.darkRed,
        width: '100%',
        fontSize: 16,
        fontFamily: 'Gilroy-Bold',
        marginTop: 5,
        lineHeight: 15,
        paddingLeft: '5%'
    },
    itemText: {
        fontSize: 16,
        fontFamily: 'Gilroy-Medium',
        color: theme.colors.black,
        marginBottom: 5,
        padding: 5,
        paddingTop: 15,
        paddingBottom: 15,
        width: '100%',
        // borderBottomWidth:1,
        // borderColor:theme.colors.grey
    }
});
