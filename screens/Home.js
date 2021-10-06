import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import ContactsMenu from "../components/ContactsMenu";

const Home = () => {
    return (
        <View>
            <SafeAreaView style={styles.container}>
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

    }
});
