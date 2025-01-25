import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import theme from '../Theme/GlobalTheme';

const QRScan = ({ navigation }) => {


    const handleBarCodeRead = ({ data, type }) => {
        console.log(`Barcode type: ${type}, Data: ${data}`);
        navigation.navigate('BarcodeDetail', { detail: data });
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', height: '10%', backgroundColor: theme.colors.white }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', paddingLeft: '5%', color: theme.colors.blue }}>Barcode Scan</Text>
            </View>
            <RNCamera
                style={styles.preview}
                onBarCodeRead={handleBarCodeRead}
                captureAudio={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        height: '100%',
        width: '100%',
    },
    overlay: {
        position: 'absolute',
        top: '10%',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',

    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});

export default QRScan;
