import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";


const contactsMenu = [
    {
      type: 'starred',

    },
    {
        type: 'contact',
        name: 'Rokas R',
        photo: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
    }
]

const ContactsMenu = () => {
    return (
        <View style={styles.container}>
             <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.row}>
                    <View style={styles.starredIcon}>
                        <AntDesign name="star" size={24} color="#efefef" />
                    </View>
                    <Text style={styles.text}>
                        Start
                    </Text>
                </View>
             </TouchableOpacity>
        </View>
    );
};

export default ContactsMenu;

const styles = StyleSheet.create({
    container: {

    },
    row: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },
    starredIcon: {
        backgroundColor: '#333333',
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    text: {
        color: 'white',
        paddingLeft: 15,
        fontSize: 18,
    }
});
