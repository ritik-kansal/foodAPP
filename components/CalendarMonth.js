import { StatusBar, StyleSheet, Dimensions, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { app, common, topMenu, calendarMonth, listing } from './styles';
import { Calendar, CalendarList, Agenda, AgendaList } from 'react-native-calendars';
import React, { useState } from 'react'

import { useIsFocused } from '@react-navigation/native';

const CalendarMonth = ({ navigation, route }) => {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [selectedDate, setSelectedDate] = useState(false)

    const isFocused = useIsFocused();
    if (isFocused) {
        route.params.setModule(1)
    }

    return (
        // create safe area view to avoid the notch on the iPhone X
        <SafeAreaView style={[app.container]}>
            <View style={[app.paddingDef, { flex: 1, paddingBottom: 0 }]}>
                <View style={{ flexDirection: "row", flexGrow: 1, justifyContent: "space-between", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image style={common.w24} source={require('../assets/burgerMenuBlue.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.openDrawer()} >
                        <Image style={{ width: 24, height: 24 }} source={require('../assets/search.png')} />
                    </TouchableOpacity>
                </View>

                <View>
                    <Calendar
                        // Initially visible month. Default = now
                        // current={'2022-02-21'}
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        // minDate={'2012-05-10'}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        // maxDate={'2012-05-30'}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={day => setSelectedDate(day)}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={day => {
                            console.log('selected day', day);
                        }}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'yyyy MM'}
                        // Handler which gets executed when visible month changes in calendar. Default = undefined
                        onMonthChange={month => {
                            console.log('month changed', month);
                        }}
                        // Hide month navigation arrows. Default = false
                        hideArrows={true}
                        // Replace default arrows with custom ones (direction can be 'left' or 'right')
                        renderArrow={direction => <Arrow />}
                        // Do not show days of other months in month page. Default = false
                        hideExtraDays={true}
                        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                        // day from another month that is visible in calendar page. Default = false
                        disableMonthChange={true}
                        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                        firstDay={1}
                        // Hide day names. Default = false
                        hideDayNames={false}
                        // Show week numbers to the left. Default = false
                        showWeekNumbers={true}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                        onPressArrowLeft={subtractMonth => subtractMonth()}
                        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                        onPressArrowRight={addMonth => addMonth()}
                        // Disable left arrow. Default = false
                        disableArrowLeft={true}
                        // Disable right arrow. Default = false
                        disableArrowRight={true}
                        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                        disableAllTouchEventsForDisabledDays={true}
                        // Replace default month and year title with custom one. the function receive a date as parameter
                        renderHeader={date => {
                            return (
                                <Text style={[{ color: "#004646", textAlign: "left", width: "100%" }, common.mt10, common.fw600]}>{month[date.getMonth()]}</Text>
                            )
                        }}
                        // Enable the option to swipe between months. Default = false
                        enableSwipeMonths={true}
                        theme={{
                            backgroundColor: '#FDFDFD',
                            calendarBackground: '#FDFDFD',
                        }}
                    />
                </View>

                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={[common.mt20]}>
                        <View style={[{ borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', marginLeft: 'auto', marginRight: 'auto' }]} />
                        <View style={[common.row]}>
                            <View style={[calendarMonth.monthItem]}>
                                <Text style={calendarMonth.gray}>8 AM</Text>
                            </View>
                            <View style={calendarMonth.monthItemValue}>
                                <Text style={[calendarMonth.task, calendarMonth.blue]}>Task1</Text>
                            </View>
                        </View>

                        <View style={[{ borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', marginLeft: 'auto', marginRight: 'auto' }]} />
                        <View style={[common.row]}>
                            <View style={[calendarMonth.monthItem]}>
                                <Text style={calendarMonth.gray}>9 AM</Text>
                            </View>
                            <View style={[calendarMonth.monthItemValue, calendarMonth.bgorange]}>
                                <Text style={[calendarMonth.task, calendarMonth.orange]}>Task2</Text>
                            </View>
                        </View>


                        <View style={[{ borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', marginLeft: 'auto', marginRight: 'auto' }]} />
                        <View style={[common.row]}>
                            <View style={[calendarMonth.monthItem]}>
                                <Text style={calendarMonth.gray}>10 AM</Text>
                            </View>
                            <View style={[calendarMonth.monthItemValue, calendarMonth.blue]}>
                                <Text style={[calendarMonth.task, calendarMonth.blue]}>Task3</Text>
                            </View>
                        </View>

                        <View style={[{ borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', marginLeft: 'auto', marginRight: 'auto' }]} />
                        <View style={[common.row]}>
                            <View style={[calendarMonth.monthItem]}>
                                <Text style={calendarMonth.gray}>11 AM</Text>
                            </View>
                            <View style={[calendarMonth.monthItemValue, calendarMonth.bgorange]}>
                                <Text style={[calendarMonth.task, calendarMonth.orange]}>Task3</Text>
                            </View>
                        </View>

                        <View style={[{ borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', marginLeft: 'auto', marginRight: 'auto' }]} />
                        <View style={[common.row]}>
                            <View style={[calendarMonth.monthItem]}>
                                <Text style={calendarMonth.gray}>12 AM</Text>
                            </View>
                            <View style={calendarMonth.monthItemValue}>
                                <Text style={[calendarMonth.task, calendarMonth.blue]}>Task1</Text>
                            </View>
                        </View>

                        <View style={[{ borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', marginLeft: 'auto', marginRight: 'auto' }]} />
                        <View style={[common.row]}>
                            <View style={[calendarMonth.monthItem]}>
                                <Text style={calendarMonth.gray}>1 PM</Text>
                            </View>
                            <View style={calendarMonth.monthItemValue}>
                                <Text style={[calendarMonth.task, calendarMonth.blue]}>Task1</Text>
                            </View>
                        </View>

                        <View style={[{ borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', marginLeft: 'auto', marginRight: 'auto' }]} />
                        <View style={[common.row]}>
                            <View style={[calendarMonth.monthItem]}>
                                <Text style={calendarMonth.gray}>2 PM</Text>
                            </View>
                            <View style={calendarMonth.monthItemValue}>
                                <Text style={[calendarMonth.task, calendarMonth.blue]}>Task1</Text>
                            </View>
                        </View>
                    </View>


                </ScrollView>

            </View>
        </SafeAreaView >
    )
}



export default CalendarMonth