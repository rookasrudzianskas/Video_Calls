import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const MenuButtons = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <FontAwesome name="video-camera" size={23} color="#efefef" />
                </TouchableOpacity>
                    <Text style={styles.menuText}>New Meeting</Text>
            </View>
        </View>
    );
};

export default MenuButtons;

const styles = StyleSheet.create({
    container: {

    },
    buttonContainer: {
        alignItems: 'center',
    },
    menuText: {
        color: '#858585',
        fontSize: 20,
        paddingTop: 10,
        fontWeight: '600',
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
