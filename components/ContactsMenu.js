import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";


const contactsMenu = [
    {
      type: 'starred',

    },
    {
        type: 'contact',
        name: 'Rokas R',
        photo: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
    },
    {
        type: 'contact',
        name: 'Tim Cook',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/%D0%A2%D0%B8%D0%BC_%D0%9A%D1%83%D0%BA_%2802-09-2021%29.jpg',
    },
    {
        type: 'contact',
        name: 'Craig Federighi',
        photo: 'https://www.apple.com/leadership/images/bio/craig_federighi_image.png.og.png?1628840083864',
    },
]

const ContactsMenu = () => {
    return (
        <View style={styles.container}>
            {contactsMenu.map((contact, index) => (
                <TouchableOpacity key={index} activeOpacity={0.8}>
                    <View style={styles.row}>
                        {contact.type === 'starred' ? (
                            <View style={styles.starredIcon}>
                                <AntDesign name="star" size={24} color="#efefef" />
                            </View>
                        ) : (
                            <View style={styles.image1}>
                                <Image style={styles.image} source={{uri: contact?.photo}} />
                            </View>
                        )}

                        <Text style={styles.text}>
                            {contact?.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
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
    },
    image1: {

    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20,
    }
});
