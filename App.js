import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar, StyleSheet, Dimensions, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import AppStack from './navigation/AppStack';
import DrawerStack from './navigation/DrawerStack';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer >
      {/* <AppStack /> */}
      <DrawerStack />
      {/* <BottomNav /> */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}



