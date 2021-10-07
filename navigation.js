import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import MeetingRoom from "./screens/MeetingRoom";

const Stack = createNativeStackNavigator();


const screenOptions = {
    headerShown: false,
};

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Room" component={MeetingRoom} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
