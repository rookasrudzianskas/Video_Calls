import React from 'react';
import {Text, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import ContactsMenu from "../components/ContactsMenu";

const Home = () => {
    return (
        <View>
            {/*    Header   */}
            <Header />
            {/*    Search Bar   */}
            <SearchBar />
            {/* menu buttons */}
            <MenuButtons />
            {/*    contacts menu */}
            <ContactsMenu />
        </View>
    );
};

export default Home;
