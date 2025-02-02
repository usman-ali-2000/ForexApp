import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import theme from '../Theme/GlobalTheme';

const CustomToggleButton = (props) => {

    const translateX = new Animated.Value(0); // This will control the sliding effect

    const toggleButton = () => {

        Animated.spring(translateX, {
            toValue: props.isToggled ? 0 : 100,
            friction: 3,
            tension: 500,
            useNativeDriver: true,
        }).start();
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.toggleWrapper} onPress={props.onToggle}>
                <View style={[styles.button]}>
                    <Animated.View
                        style={[
                            styles.toggle, { alignSelf: props.isToggled ? 'flex-end' : 'flex-start', backgroundColor: props.isToggled ? theme.colors.darkRed : theme.colors.white }
                        ]}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toggleWrapper: {
        width: 50,
        height: 25,
        borderRadius: 25,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        position: 'relative',
    },
    button: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start', // Align the button to the left
        paddingLeft: 5,
    },
    toggle: {
        width: 16,
        height: 16,
        borderRadius: 15,
        // position: 'absolute',
        // top: 5,
        marginRight: 5,
    },
    statusText: {
        marginTop: 20,
        fontSize: 16,
    },
});

export default CustomToggleButton;
