import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import StartMeeting from "../components/StartMeeting";
import {io} from 'socket.io-client';

const MeetingRoom = () => {
    const [name, setName] = useState();
    const [roomId, setRoomId] = useState();

    useEffect(() => {
        // console.log('Yooo');
        const API_URL = 'http://192.168.0.168:3000';
        var socket = io(`${API_URL}`);
        socket.on('connection', (socket) => console.log("Connected"));
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

