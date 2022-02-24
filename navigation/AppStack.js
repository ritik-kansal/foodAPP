import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListingFood from '../components/ListingFood';
import SingleListing from '../components/SingleListing';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ListingFood" component={ListingFood} />
            <Stack.Screen name="SingleListing" component={SingleListing} />
        </Stack.Navigator>
    )
}

export default AppStack