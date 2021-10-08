import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const ChatHeader = () => {
    return (
        <View style={styles.container}>
            <Pressable>
                <Text style={styles.buttonText}>Close</Text>
            </Pressable>
        </View>
    );
};

export default ChatHeader;

const styles = StyleSheet.create({
    container: {

    }
});
