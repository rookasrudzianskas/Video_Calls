import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const ChatHeader = ({setModalVisible}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Close</Text>
            </Pressable>
            <Text style={styles.heading}>Chat</Text>
        </View>
    );
};

export default ChatHeader;

const styles = StyleSheet.create({
    container: {

    }
});
