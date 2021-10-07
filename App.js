import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from "./screens/Home";
import Navigation from "./navigation";

export default function App() {
  return (
      <View>
        <Navigation />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({

});
