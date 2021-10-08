import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";

const ChatHeader = ({setModalVisible}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Close</Text>
            </Pressable>
            <Text style={styles.heading}>Chat</Text>
            <Entypo name="bell" size={24} color="#efefef" />
        </View>
    );
};

export default ChatHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        color: 'white',
    },
    buttonText: {
        color: 'white',
    }
});
