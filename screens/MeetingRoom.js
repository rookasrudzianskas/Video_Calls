import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput} from 'react-native';

const MeetingRoom = () => {
    const [name, setName] = useState();

    return (
            <View style={styles.container}>
                <View style={styles.startMeetingContainer}>
                    <View style={styles.info}>
                        <TextInput placeholder="Enter name" style={styles.textInput} value={name} onChangeText={text => setName(text)}/>
                    </View>
                    <View style={styles.info}>
                        <TextInput placeholder="Enter room id" style={styles.textInput} value={name} onChangeText={text => setName(text)} />
                    </View>
                </View>
            </View>
    );
};

export default MeetingRoom;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        flex: 1,
    },
    startMeetingContainer: {

    },
    info: {

    },
    textInput: {

    }
});
