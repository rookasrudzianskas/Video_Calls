import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput} from 'react-native';

const MeetingRoom = () => {
    return (
            <View>
                <View style={styles.startMeetingContainer}>
                    <View style={styles.info}>
                        <TextInput placeholder="Enter name"/>
                    </View>
                    <View style={styles.info}>
                        <TextInput placeholder="Enter room id" />
                    </View>
                </View>
            </View>
    );
};

export default MeetingRoom;

const styles = StyleSheet.create({
    container: {

    },
    startMeetingContainer: {

    },
    info: {

    }
});
