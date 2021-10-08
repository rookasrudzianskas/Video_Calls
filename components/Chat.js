import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ChatHeader from "./ChatHeader";

const Chat = ({setModalVisible}) => {
    return (
        <View style={styles.container}>
            <ChatHeader setModalVisible={setModalVisible} />
        </View>
    );
};

export default Chat;

const styles = StyleSheet.create({

});
