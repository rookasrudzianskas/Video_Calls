import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import StartMeeting from "../components/StartMeeting";
import {io} from 'socket.io-client';

const MeetingRoom = () => {
    const [name, setName] = useState('');
    const [roomId, setRoomId] = useState('');
    const [activeUsers, setActiveUsers] = useState();
    const [startCamera, setStartCamera] = useState(false);


    let socket;

    const joinRoom = () => {
        startCameras();
            socket.emit('join-room', {
                roomId: roomId,
                userName: name,
            });
    }

    const startCameras = () => {

    }

    useEffect(() => {
        const API_URL = 'https://0b7d-88-135-26-66.ngrok.io';
        socket = io(`${API_URL}`);
        socket.on('connection', () => console.log("Connected 🚀"));
        socket.on('all-users', users => {
            console.log("Active users");
            setActiveUsers(users);
        });
        // console.log('hello?');
    },[]);

    return (
            <View style={styles.container}>
                {startCamera ? (
                    <Text>Start a camera</Text>
                ) : (
                    // start meeting section
                    <StartMeeting joinRoom={joinRoom} name={name} roomId={roomId} setName={setName} setRoomId={setRoomId} />
                )}
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

