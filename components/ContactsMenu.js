import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

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

    }
});
