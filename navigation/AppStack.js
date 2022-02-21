import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListingGro from '../components/ListingGro';
import SingleListing from '../components/SingleListing';
import BottomNav from '../components/BottomNav';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={ListingGro} />
            {/* <Stack.Screen name="BottomNav" component={BottomNav} /> */}
            <Stack.Screen name="SingleListing" component={SingleListing} />
        </Stack.Navigator>
    )
}

export default AppStack