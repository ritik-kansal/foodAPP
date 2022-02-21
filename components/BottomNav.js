import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SingleListing from './SingleListing';
import ListingGro from './ListingGro';
import { topMenu, common } from './styles'

const Tab = createBottomTabNavigator();

const BottomNav = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="ListingGro" component={ListingGro} />
      <Tab.Screen name="SingleListing2" component={SingleListing} />
    </Tab.Navigator>
  )
}

const bottomNav = StyleSheet.create({
  pBottom:{
    // position:"absolute",
    // bottom:0
  }
})

export default BottomNav