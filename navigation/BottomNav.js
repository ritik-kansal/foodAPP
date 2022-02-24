import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { topMenu, common } from '../components/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SingleListing from '../components/SingleListing';
import CalendarMonth from '../components/CalendarMonth';
import CalendarWeek from '../components/CalendarWeek';
import ListingFood from '../components/ListingFood';
import NewTask from '../components/NewTask';
import ListingGro from '../components/ListingGro';


const Tab = createBottomTabNavigator();



const BottomNav = ({ route }) => {


  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>


      <Tab.Screen name="CalendarMonth" component={CalendarMonth} initialParams={route.params} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="alarm-outline" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="ListingFood" component={ListingFood} initialParams={route.params} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="fast-food-outline" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="SingleListing" component={SingleListing} initialParams={{ ...route.params, image: '../assets/monFood.png', parent: "gro" }} options={{
        tabBarButton: () => (
          <View style={{ width: 0, height: 0 }}></View>
        )
      }} />
      <Tab.Screen name="NewTask" component={NewTask} initialParams={route.params} options={{
        tabBarButton: () => (
          <View style={{ width: 0, height: 0 }}></View>
        )
      }} />
      <Tab.Screen name="CalendarWeek" component={CalendarWeek} initialParams={route.params} options={{
        tabBarButton: () => (
          <View style={{ width: 0, height: 0 }}></View>
        )
      }} />
      <Tab.Screen name="ListingGro" component={ListingGro} initialParams={route.params} options={{
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