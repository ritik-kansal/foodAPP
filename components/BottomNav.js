import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { topMenu, common } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SingleListing from './SingleListing';
import CalendarWeek from './CalendarWeek';
import ListingGro from './ListingGro';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen name="CalendarWeek" component={CalendarWeek} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="alarm-outline" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Home" component={ListingGro} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="fast-food-outline" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="SingleListing" component={SingleListing} options={{
        tabBarButton: () => (
          <View style={{ width: 0, height: 0 }}></View>
        )
      }} />
    </Tab.Navigator>
  )
}

const bottomNav = StyleSheet.create({
  pBottom: {
    // position:"absolute",
    // bottom:0
  }
})

export default BottomNav