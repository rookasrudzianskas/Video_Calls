import React from 'react';
import {Text, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";

const Home = () => {
    return (
        <View>
            {/*    Header   */}
            <Header />
            {/*    Search Bar   */}
            <SearchBar />
            {/*    contacts menu */}
            <MenuButtons />
        </View>
    );
};

export default Home;
