import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import ChatHeader from "./ChatHeader";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Chat = ({setModalVisible}) => {
    const [messageText, setMessageText] = useState();


    return (
            <View style={styles.container}>
                <SafeAreaView style={{height: '100%'}}>
                    <ChatHeader setModalVisible={setModalVisible} />
                    <View style={styles.chatMessages}>

                    </View>
                    <View style={styles.chatFormContainer}>
                        <Text style={{color: 'white'}}>Send to: Everyone</Text>
                        <View style={styles.chatForm}>
                            <TextInput placeholderTextColor={'#595859'} value={messageText} onChangeText={(text) => setMessageText(text)} placeholder="Tap here to chat" style={styles.textInput} />
                            <TouchableOpacity>
                                <FontAwesome name="send" size={24} color="#efefef" />
                            </TouchableOpacity>
                        </View>
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
        borderColor: '#2f2f2f',
        borderTopWidth: 1,
        padding: 20,
    },
    chatForm: {

    },
    textInput: {
        height: 40,
        color: '#efefef',
        borderColor: '#585859',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 12,
    }
});
