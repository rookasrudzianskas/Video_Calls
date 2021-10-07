import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import StartMeeting from "../components/StartMeeting";

const MeetingRoom = () => {
    const [name, setName] = useState();
    const [roomId, setRoomId] = useState();

    useEffect(() => {
        // console.log('Yooo');
    },[]);

    return (
            <View style={styles.container}>
                <StartMeeting name={name} roomId={roomId} setName={setName} setRoomId={setRoomId} />
            </View>
    );
};

export default MeetingRoom;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        flex: 1,
    },
});

