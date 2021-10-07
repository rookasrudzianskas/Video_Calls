import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import StartMeeting from "../components/StartMeeting";
import {io} from 'socket.io-client';

const MeetingRoom = () => {
    const [name, setName] = useState();
    const [roomId, setRoomId] = useState();

    let socket;

    useEffect(() => {
        console.log('Yooo');
        const API_URL = 'https://0b7d-88-135-26-66.ngrok.io';
        console.log('Rokas is going');
        socket = io(`${API_URL}`);
        console.log('Rokas is going forward');
        socket.on('connection', (socket) => console.log("Connected"));
        console.log('Rokas is going forward to space');
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

