import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import ChatHeader from "./ChatHeader";

const Chat = ({setModalVisible}) => {
    return (
            <View style={styles.container}>
                <SafeAreaView style={{height: '100%'}}>
                    <ChatHeader setModalVisible={setModalVisible} />
                </SafeAreaView>
            </View>
    );
};

export default Chat;

const styles = StyleSheet.create({

});
