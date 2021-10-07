import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput} from 'react-native';

const MeetingRoom = () => {
    const [name, setName] = useState();
    const [roomId, setRoomId] = useState();

    return (
            <View style={styles.container}>
                {/* start meeting */}
                <View style={styles.startMeetingContainer}>
                    <View style={styles.info}>
                        <TextInput placeholder="Enter name" placeholderTextColor={'#767476'} style={styles.textInput} value={name} onChangeText={text => setName(text)}/>
                    </View>
                    <View style={styles.info}>
                        <TextInput placeholder="Enter room id"  placeholderTextColor={'#767476'} style={styles.textInput} value={roomId} onChangeText={text => setRoomId(text)} />
                    </View>
                </View>
            {/*    button   */}

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
        width: '100%',
        backgroundColor: '#373538',
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#484648',
        padding: 20,
        justifyContent: 'center',
    },
    textInput: {
        color: 'white',
        fontSize: 18,
        height: 15,
    }
});
