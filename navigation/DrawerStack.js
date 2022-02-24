import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import ListingFood from '../components/ListingFood';
import SingleListing from '../components/SingleListing';
import CustomDrawer from '../components/CustomDrawer';
import BottomNav from './BottomNav';
import CalendarWeek from '../components/CalendarWeek';
import NewTask from '../components/NewTask';

// const Stack = createNativeStackNavigator();

const DrawerStack = () => {
    const [module, setModule] = React.useState('0');
    // console.log("module: " + module);
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} module={module} setModule={setModule} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="BottomNav" component={BottomNav} initialParams={{ setModule: setModule }} />
        </Drawer.Navigator>
    )
}

export default DrawerStack