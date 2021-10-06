import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";

const Header = () => {
    return (
        <View style={styles.container}>
            <Entypo name="notification" size={30} color="#efefef" />
            <Text>Meet & Chat</Text>
            <Entypo name="new-message" size={30} color="#efefef" />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {

    },
    heading: {
        color: '#efefef',
        fontSize: 20,
        fontWeight: '700',
    }
});
