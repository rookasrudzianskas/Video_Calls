import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from "./screens/Home";

export default function App() {
  return (
      <View>
        <Home />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({

});
