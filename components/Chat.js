import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import ChatHeader from "./ChatHeader";

const Chat = ({setModalVisible}) => {
    return (
            <View style={styles.container}>
                <SafeAreaView style={{height: '100%'}}>
                    <ChatHeader setModalVisible={setModalVisible} />
                    <View style={styles.chatMessages}>

                    </View>
                    <View style={styles.chatFormContainer}>
                        <Text style={{color: 'white'}}>Send to: Everyone</Text>
                    </View>
                </SafeAreaView>
            </View>
    );
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c'
    },
    chatMessages: {

    },
    chatFormContainer: {

    }
});
