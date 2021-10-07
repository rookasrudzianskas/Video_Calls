import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from "./screens/Home";
import Navigation from "./navigation";
import { Camera } from 'expo-camera';


export default function App() {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [startCamera, setStartCamera] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

  return (
      <>
        <Navigation />
        <StatusBar style="auto" />
      </>
  );
}

const styles = StyleSheet.create({

});
