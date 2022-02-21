import { StatusBar, StyleSheet, Dimensions, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { app, common, topMenu } from './styles';
import React from 'react'

const CalendarWeek = () => {
    return (
        // create safe area view to avoid the notch on the iPhone X
        <SafeAreaView style={app.container}>
            <View style={app.paddingDef}>
                <View style={topMenu.topMenu}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image style={common.w24} source={require('../assets/burgerMenuBlue.png')} />
                    </TouchableOpacity>
                </View>

                <Text style={[{ color: "#004646" }, common.mt10, common.fw600]}>February - Week 3</Text>
            </View>
        </SafeAreaView>
    )
}

const calendarWeek = StyleSheet.create({

})



export default CalendarWeek