import React from 'react';
import {Text, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";

const Home = () => {
    return (
        <View>
            {/*    Header   */}
            <Header />
            {/*    Search Bar   */}
            <SearchBar />
            {/*    contacts menu */}
        </View>
    );
};

export default Home;
