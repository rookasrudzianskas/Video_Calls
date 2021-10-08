import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import ChatHeader from "./ChatHeader";

const Chat = ({setModalVisible}) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ChatHeader setModalVisible={setModalVisible} />
            </View>
        </SafeAreaView>
    );
};

export default Chat;

const styles = StyleSheet.create({

});
