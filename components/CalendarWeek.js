import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import WeeklyCalendar from './CalendarWeekTemplate';
import { app, common } from './styles'
import { useIsFocused } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'


const CalendarWeek = ({ navigation, route }) => {
    const isFocused = useIsFocused();
    if (isFocused) {
        route.params.setModule(1)
    }

    const sampleEvents = [
        { 'start': '2022-02-23 09:00:00', 'duration': '00:20:00', 'note': 'Walk my dog' },
        { 'start': '2022-02-24 14:00:00', 'duration': '01:00:00', 'note': 'Doctor\'s appointment' },
        { 'start': '2022-02-25 08:00:00', 'duration': '00:30:00', 'note': 'Morning exercise' },
        { 'start': '2022-02-25 14:00:00', 'duration': '02:00:00', 'note': 'Meeting with client' },
        { 'start': '2022-02-25 19:00:00', 'duration': '01:00:00', 'note': 'Dinner with family' },
        { 'start': '2022-02-26 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
        { 'start': '2022-02-26 11:00:00', 'duration': '02:00:00', 'note': 'Schedule 2' },
        { 'start': '2022-02-26 15:00:00', 'duration': '01:30:00', 'note': 'Schedule 3' },
        { 'start': '2022-02-26 18:00:00', 'duration': '02:00:00', 'note': 'Schedule 4' },
        { 'start': '2022-02-26 22:00:00', 'duration': '01:00:00', 'note': 'Schedule 5' }
    ]

    return (
        <SafeAreaView style={[app.container]}>

            <View style={[app.paddingDef, { flex: 1, paddingBottom: 0 }]}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image style={common.w24} source={require('../assets/burgerMenuBlue.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.openDrawer()} >
                        <Image style={{ width: 24, height: 24 }} source={require('../assets/search.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <WeeklyCalendar events={sampleEvents} style={{ flex: 1 }} themeColor={'#1656FA'} />
                    <TouchableOpacity onPress={() => navigation.navigate("NewTask", { parent: "CalendarWeek" })} style={{ position: 'absolute', bottom: 20, right: 0 }} >
                        <Ionicons name="add-circle-outline" color={"#1656FA"} size={40} />
                    </TouchableOpacity>
                </View>
                {/* <View> */}
                {/* </View> */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default CalendarWeek