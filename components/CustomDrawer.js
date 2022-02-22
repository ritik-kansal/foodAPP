import React, { useState } from 'react'
// import { } from 'react-native-gesture-handler'
import ModuleZeroDrawer from './ModuleZeroDrawer'
import { TouchableOpacity, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import ModuleOneDrawer from './ModuleOneDrawer'

const CustomDrawer = ({ navigation, props, module, setModule }) => {

    return (
        <>
            {
                module == 0 ?
                    <ModuleZeroDrawer {...props} navigation={navigation} />
                    :
                    <ModuleOneDrawer {...props} navigation={navigation} />
                // <>
                //     <DrawerContentScrollView {...props}>
                //         <DrawerItem
                //             label="Weeek"
                //             onPress={() => navigation.navigate('CalendarWeek')}
                //         />
                //         <DrawerItem
                //             label="Month"
                //             onPress={() => navigation.navigate('CalendarMonth')}
                //         />
                //     </DrawerContentScrollView>

                // </>
            }

        </>
    )
}


export default CustomDrawer