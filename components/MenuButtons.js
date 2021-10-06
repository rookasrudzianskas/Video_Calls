import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const MenuButtons = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <FontAwesome name="video-camera" size={23} color="#efefef" />
                    <Text style={styles.menuText}>New Meeting</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MenuButtons;

const styles = StyleSheet.create({
    container: {

    },
    buttonContainer: {

    },
    menuText: {

    },
    button: {

    }
});
