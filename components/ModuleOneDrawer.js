import React, { useState } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { common, customDrawer } from './styles'

import Ionicons from 'react-native-vector-icons/Ionicons'

const ModuleOneDrawer = ({ navigation }) => {
    const [selected, setSelected] = useState('Month')

    const [showPreferences, setShowPreferences] = useState(false)
    const [showReminders, setShowReminders] = useState(false)
    const [showCusineOptions, setShowCusineOptions] = useState(true)
    const [showDietOptions, setShowDietOptions] = useState(false)
    const [showCookTimeOptions, setShowCookTimeOptions] = useState(false)
    const [getCusineSelection, setGetCusineSelection] = useState(2)
    const [getDietSelection, setGetDietSelection] = useState(2)
    const [getCookTimeSelection, setGetCookTimeSelection] = useState(2)
    const [getFoodType, setGetFoodType] = useState(2)

    return (
        <>
            <View style={[common.row, common.mt10, common.pl10, { marginLeft: "auto" }]}>
                <Image style={{ width: 24, height: 24 }} source={require('../assets/profileBlue.png')} />
                <Image style={[common.ml20, { width: 21.59, height: 24 }]} source={require('../assets/settingsBlue.png')} />
            </View>
            <View style={{ marginTop: 40, marginBottom: 0, marginLeft: 'auto', marginRight: 'auto' }}>
                <Image style={{ width: 82, height: 82 }} source={require('../assets/user.png')} />
                <Text style={[common.mt10, { textAlign: "center" }]}>Hello Anna</Text>
            </View>


            <DrawerContentScrollView style={common.mt20}>
                {/* <DrawerItemList {...props} /> */}
                <TouchableOpacity onPress={() => { setSelected("Week"); navigation.navigate("CalendarWeek") }}>
                    <View style={[common.ml20, common.row, { alignItems: "center" }]}>
                        <Image style={{ width: 14, height: 11.89 }} source={require("../assets/week.png")} />
                        <Text style={[{ marginLeft: 10 }, selected == "Week" ? common.blue : common.darkGray, common.fw600]}>Day</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setSelected("Week"); navigation.navigate("CalendarWeek") }}>
                    <View style={[common.ml20, common.row, { alignItems: "center" }]}>
                        <Image style={{ width: 14, height: 11.89 }} source={require("../assets/week.png")} />
                        <Text style={[{ marginLeft: 10 }, selected == "Week" ? common.blue : common.darkGray, common.fw600]}>Week</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setSelected("Month"); navigation.navigate("CalendarMonth") }}>
                    <View style={[common.ml20, common.row, { alignItems: "center" }]}>
                        <Image style={{ width: 14, height: 11.89 }} source={require("../assets/month.png")} />
                        <Text style={[{ marginLeft: 10 }, selected == "Month" ? common.blue : common.darkGray, common.fw600]}>Month</Text>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => { setSelected("Month"); navigation.navigate("NewTask") }}>
                    <View style={[common.ml20, common.row, { alignItems: "center" }]}>
                        <Image style={{ width: 14, height: 11.89 }} source={require("../assets/month.png")} />
                        <Text style={[{ marginLeft: 10 }, selected == "Month" ? common.blue : common.darkGray, common.fw600]}>New Task</Text>
                    </View>
                </TouchableOpacity> */}
                <View style={[common.mt10, { borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', marginLeft: 'auto', marginRight: 'auto' }]} />

                <View>

                    <Text style={[common.mt10, common.ml20, common.fw500, common.blue, common.f20]}>Projects</Text>
                    <View style={{ paddingLeft: 20 }}>
                        <View style={[common.row, { alignItems: "center", marginTop: 10 }]}>
                            <Ionicons name="notifications-outline" color={"#1656FA"} size={20} />
                            <Text style={[common.blue, { marginLeft: 10, fontSize: 16 }]}>Project 1</Text>
                        </View>
                        <View style={{ paddingLeft: 20 }}>
                            <View style={[common.row, { alignItems: "center", marginTop: 10 }]}>
                                <Ionicons name="alarm-outline" size={16} color={'#94A3B8'} />
                                <Text style={[common.ml10, common.darkGray]}>5 Mins</Text></View>
                            <View style={[common.row, { alignItems: "center", marginTop: 10 }]}>
                                <Ionicons name="alarm-outline" size={16} color={'#94A3B8'} />
                                <Text style={[common.ml10, common.darkGray]}>15 Mins</Text></View>
                        </View>
                        <View style={[common.row, { alignItems: "center", marginTop: 10 }]}>
                            <Ionicons name="notifications-outline" color={"#94A3B8"} size={20} />
                            <Text style={[common.darkGray, { marginLeft: 10, fontSize: 16 }]}>Project 1</Text>
                        </View>

                    </View>
                    <Text style={[common.mt10, common.ml20, common.fw500, common.blue, common.f20]}>Categories</Text>
                    <View style={{ paddingLeft: 20 }}>
                        <View style={[common.row, { alignItems: "center", marginTop: 10 }]}>
                            <Ionicons name="notifications-outline" color={"#94A3B8"} size={20} />
                            <Text style={[common.darkGray, { marginLeft: 10, fontSize: 16 }]}>Category 1</Text>
                        </View>
                        {/* <View style={{ paddingLeft: 20 }}>
                            <Text style={[common.mt10, common.ml20, common.blue]}>5 Mins</Text>
                            <Text style={[common.mt10, common.ml20, common.blue]}>15 Mins</Text>
                        </View> */}
                        <View style={[common.row, { alignItems: "center", marginTop: 10 }]}>
                            <Ionicons name="notifications-outline" color={"#1656FA"} size={20} />
                            <Text style={[common.blue, { marginLeft: 10, fontSize: 16 }]}>Category 2</Text>
                        </View>

                    </View>
                    <Text style={[common.mt10, common.ml20, common.fw500, common.blue, common.f20]}>Categories</Text>
                    <View style={{ paddingLeft: 20 }}>
                        <View style={[common.row, { alignItems: "center", marginTop: 10 }]}>
                            <Ionicons name="notifications-outline" color={"#94A3B8"} size={20} />
                            <Text style={[common.darkGray, { marginLeft: 10, fontSize: 16 }]}>Low </Text>
                        </View>
                        <View style={[common.row, { alignItems: "center", marginTop: 10 }]}>
                            <Ionicons name="notifications-outline" color={"#94A3B8"} size={20} />
                            <Text style={[common.darkGray, { marginLeft: 10, fontSize: 16 }]}>Medium</Text>
                        </View>
                        <View style={[common.row, { alignItems: "center", marginTop: 10 }]}>
                            <Ionicons name="notifications-outline" color={"#1656FA"} size={20} />
                            <Text style={[common.blue, { marginLeft: 10, fontSize: 16 }]}>High</Text>
                        </View>
                    </View>
                    <View style={[common.mt20, { borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', marginLeft: 'auto', marginRight: 'auto' }]} />
                </View>
                <View style={[common.mt20, { paddingHorizontal: 20, paddingBottom: 50 }]}>
                    <Text style={{ backgroundColor: "#1656FA", textAlign: "center", borderRadius: 20, color: "#fff", paddingTop: 10, paddingBottom: 10, fontSize: 20 }}>Log out</Text>
                </View>


            </DrawerContentScrollView>
        </>
    )
}

export default ModuleOneDrawer