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
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}  screenOptions={screenOptions}/>
                <Stack.Screen name="Room" component={MeetingRoom} options={{
                    title: 'Start a Meeting',
                    headerStyle: {
                        backgroundColor: '#1c1c1c',
                    },
                    headerTintColor: 'white',
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
