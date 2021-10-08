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
                            <TouchableOpacity style={{
                                ...styles.button,
                                backgroundColor: messageText ? '#0B71EB' : '#373838'
                            }}>
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
        flex: 1,
    },
    chatFormContainer: {
        borderColor: '#2f2f2f',
        borderTopWidth: 1,
        padding: 20,
    },
    chatForm: {
        flexDirection: "row",
    },
    textInput: {
        height: 40,
        color: '#efefef',
        borderColor: '#585859',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 12,
        flex: 1,
    },
    button: {
        height: 40,
        width: 40,
        marginTop: 12,
        marginLeft: 12,
        backgroundColor: '#373838',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
});

// Done 🔥
