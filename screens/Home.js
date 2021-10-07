import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import ContactsMenu from "../components/ContactsMenu";

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{height: '100%'}}>
                {/*    Header   */}
                <Header />
                {/*    Search Bar   */}
                <SearchBar />
                {/* menu buttons */}
                <MenuButtons />
                {/*    contacts menu */}
                <ContactsMenu />
            </SafeAreaView>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        padding: 15,
    }
});
