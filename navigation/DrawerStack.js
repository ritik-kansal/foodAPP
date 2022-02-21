import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import ListingGro from '../components/ListingGro';
import SingleListing from '../components/SingleListing';
import CustomDrawer from '../components/CustomDrawer';
import BottomNav from '../components/BottomNav';

// const Stack = createNativeStackNavigator();

const DrawerStack = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="BottomNav" component={BottomNav} />
            <Drawer.Screen name="Home" component={ListingGro} />
            <Drawer.Screen name="SingleListing" component={SingleListing} />
        </Drawer.Navigator>
    )
}

export default DrawerStack