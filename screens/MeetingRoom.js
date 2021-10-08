import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import StartMeeting from "../components/StartMeeting";
import {io} from 'socket.io-client';
import {Camera} from "expo-camera";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const menuIcons = [
    {
        id: '1',
        name: 'microphone',
        title: 'Mute',
        customColor: '#efefef',
    },
    {
        id: '2',
        name: 'video-camera',
        title: 'Stop Video',
    },
    {
        id: '3',
        name: 'upload',
        title: 'Share Content',
    },
    {
        id: '4',
        name: 'group',
        title: 'Participants',
    },
]

const MeetingRoom = () => {
    const [name, setName] = useState('');
    const [roomId, setRoomId] = useState('');
    const [activeUsers, setActiveUsers] = useState([]);
    const [startCamera, setStartCamera] = useState(false);
    const [type, setType] = useState(Camera.Constants.Type.back);


    let socket;

    const joinRoom = () => {
        __startCamera();
            socket.emit('join-room', {
                roomId: roomId,
                userName: name,
            });
    }

    const __startCamera = () => {
        setStartCamera(true);
    }

    useEffect(() => {
        const API_URL = 'https://0b7d-88-135-26-66.ngrok.io';
        socket = io(`${API_URL}`);
        socket.on('connection', () => console.log("Connected 🚀"));
        socket.on('all-users', users => {
            users = users.filter(user => (user.userName !== name));
            setActiveUsers(users);
        });
        // console.log('hello?');
    },[]);

    return (
            <View style={styles.container}>
                {startCamera ? (
                    <SafeAreaView style={{flex: 1,}}>
                        <View style={{flex: 1, justifyContent: 'center', width: '100%'}}>
                            <View style={{ backgroundColor: 'black', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', }}>
                                <Camera style={{height: activeUsers?.length === 0 ? 600 : 200, width: activeUsers?.length === 0 ? "100%" : 200 }} type={type}>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => {
                                                setType(
                                                    type === Camera.Constants.Type.back
                                                        ? Camera.Constants.Type.front
                                                        : Camera.Constants.Type.back
                                                );
                                            }}>
                                            <View style={{width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}}>
                                                <Text style={styles.text}> Flip </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </Camera>

                                {activeUsers.filter(user => (user.userName !== name)).map((user, index) => (
                                    <View key={index} style={styles.activeUserContainer}>
                                        <Text style={{color: 'white'}}>{user?.userName}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                            <View style={styles.menu}>
                                {menuIcons.map((icon, index) => (
                                    <TouchableOpacity key={index} style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 50,
                                        marginTop: 15,
                                    }} activeOpacity={0.8}>
                                        <FontAwesome name={icon?.name} size={24} color="#efefef" />
                                        <Text style={{
                                            color: 'white',
                                            marginTop: 10,

                                        }}>{icon?.title}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                    </SafeAreaView>
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
        flex: 1,
        backgroundColor: '#1c1c1c',
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'black',
        backgroundColor: '#efefef',

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    activeUserContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
