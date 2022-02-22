import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React, { useState } from 'react'
import { app, common } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler'

const NewTask = ({ navigation, route }) => {
    const [dropDown1, setDropDown1] = useState('Category')
    const [showdropDown1, setShowDropDown1] = useState(true)
    const [dropDown2, setDropDown2] = useState('Project')
    const [showdropDown2, setShowDropDown2] = useState(false)
    const [dropDown3, setDropDown3] = useState('Status')
    const [showdropDown3, setShowDropDown3] = useState(false)
    const [dropDown4, setDropDown4] = useState('Priority')
    const [showdropDown4, setShowDropDown4] = useState(false)

    // console.log(route.params)

    return (
        <SafeAreaView style={app.container}>
            <View style={app.paddingDef}>
                <View style={[common.row, { justifyContent: "space-between", alignItems: "center" }]}>
                    <TouchableOpacity onPress={() => navigation.navigate(route.params.parent ? route.params.parent : "CalendarMonth")} >
                        <Ionicons name="chevron-back-outline" color={"#1656FA"} size={40} />
                    </TouchableOpacity>
                    <Text style={[common.f20, common.fw600, common.textCenter]}>New Task</Text>
                    <View style={{ height: 0, width: 40 }}></View>
                </View>
                <ScrollView>

                    <View style={common.mt20}>

                        <View style={common.mt20}>
                            <Text>Task Name</Text>
                            <TextInput
                                style={newTask.input}
                                onChangeText={""}
                                value={""}
                                placeholder="Enter Task Name"
                            // keyboardType="numeric"
                            />
                        </View>
                        <View style={common.mt20}>
                            <Text>Owner Name</Text>
                            <TextInput
                                style={newTask.input}
                                onChangeText={""}
                                value={""}
                                placeholder="Owner"
                            // keyboardType="numeric"
                            />
                        </View>

                        <View style={newTask.dropDown}>
                            <Text style={common.darkGray}>Category</Text>
                            <View style={common.flex}>
                                <TouchableOpacity onPress={() => setShowDropDown1(!showdropDown1)} style={[common.dropDownIcon, common.row]}>
                                    <Text style={common.blue}>{dropDown1}</Text>
                                    <Ionicons name="chevron-down-outline" color={"#1656FA"} size={20} style={{ marginLeft: 5 }} />
                                </TouchableOpacity>
                                <View style={[!showdropDown1 && { display: "none" }, newTask.dropDownSelection]}>
                                    <TouchableOpacity onPress={() => { setShowDropDown1(false); setDropDown1("Category 1") }}><Text style={[common.blue, common.mt10]}>Category 1</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setShowDropDown1(false); setDropDown1("Category 2") }}><Text style={[common.blue, common.mt10]}>Category 2</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setShowDropDown1(false); setDropDown1("Category 3") }}><Text style={[common.blue, common.mt10]}>Category 3</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/* second */}
                        <View style={newTask.dropDown}>
                            <Text style={common.darkGray}>Project</Text>
                            <View style={common.flex}>
                                <TouchableOpacity onPress={() => setShowDropDown2(!showdropDown2)} style={[common.dropDownIcon, common.row]}>
                                    <Text style={common.blue}>{dropDown2}</Text>
                                    <Ionicons name="chevron-down-outline" color={"#1656FA"} size={20} style={{ marginLeft: 5 }} />
                                </TouchableOpacity>
                                <View style={[!showdropDown2 && { display: "none" }, newTask.dropDownSelection]}>
                                    <TouchableOpacity onPress={() => { setShowDropDown2(false); setDropDown2("Project 1") }}><Text style={[common.blue, common.mt10]}>Project 1</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setShowDropDown2(false); setDropDown2("Project 2") }}><Text style={[common.blue, common.mt10]}>Project 2</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setShowDropDown2(false); setDropDown2("Project 3") }}><Text style={[common.blue, common.mt10]}>Project 3</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/* option 3 */}
                        <View style={newTask.dropDown}>
                            <Text style={common.darkGray}>Status</Text>
                            <View style={common.flex}>
                                <TouchableOpacity onPress={() => setShowDropDown3(!showdropDown3)} style={[common.dropDownIcon, common.row]}>
                                    <Text style={common.blue}>{dropDown3}</Text>
                                    <Ionicons name="chevron-down-outline" color={"#1656FA"} size={20} style={{ marginLeft: 5 }} />
                                </TouchableOpacity>
                                <View style={[!showdropDown3 && { display: "none" }, newTask.dropDownSelection]}>
                                    <TouchableOpacity onPress={() => { setShowDropDown3(false); setDropDown3("Status 1") }}><Text style={[common.blue, common.mt10]}>Status 1</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setShowDropDown3(false); setDropDown3("Status 2") }}><Text style={[common.blue, common.mt10]}>Status 2</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setShowDropDown3(false); setDropDown3("Status 3") }}><Text style={[common.blue, common.mt10]}>Status 3</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/* option 4 */}
                        <View style={newTask.dropDown}>
                            <Text style={common.darkGray}>Priority</Text>
                            <View style={common.flex}>
                                <TouchableOpacity onPress={() => setShowDropDown4(!showdropDown4)} style={[common.dropDownIcon, common.row]}>
                                    <Text style={common.blue}>{dropDown4}</Text>
                                    <Ionicons name="chevron-down-outline" color={"#1656FA"} size={20} style={{ marginLeft: 5 }} />
                                </TouchableOpacity>
                                <View style={[!showdropDown4 && { display: "none" }, newTask.dropDownSelection]}>
                                    <TouchableOpacity onPress={() => { setShowDropDown4(false); setDropDown4("Priority 1") }}><Text style={[common.blue, common.mt10]}>Priority 1</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setShowDropDown4(false); setDropDown4("Priority 2") }}><Text style={[common.blue, common.mt10]}>Priority 2</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={() => { setShowDropDown4(false); setDropDown4("Priority 3") }}><Text style={[common.blue, common.mt10]}>Priority 3</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/* <View style={newTask.dropDown}>
                        <Text style={common.darkGray}>Category</Text>
                        <View style={common.flex}>
                            <TouchableOpacity onPress={() => setShowDropDown1(!showdropDown1)} style={common.dropDownIcon}>
                                <Text style={common.blue}>{dropDown1}</Text>
                            </TouchableOpacity>
                            <Ionicons name="chevron-down-outline" color={"#1656FA"} size={20} style={{ marginLeft: 5 }} />
                            <View style={[showdropDown1 && { position: "absolute" }, !showdropDown1 && { display: "none" }, newTask.dropDownSelection]}>
                                <TouchableOpacity onPress={() => { setShowDropDown1(false); setDropDown1("Category 1") }}><Text style={[common.blue, common.mt10]}>Category 1</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => { setShowDropDown1(false); setDropDown1("Category 2") }}><Text style={[common.blue, common.mt10]}>Category 2</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => { setShowDropDown1(false); setDropDown1("Category 3") }}><Text style={[common.blue, common.mt10]}>Category 3</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View> */}
                        <TextInput multiline={true} style={[newTask.input, common.mt20, { paddingLeft: 20, textAlign: "left", height: 100, paddingTop: 10, textAlignVertical: 'top' }]} placeholder="Notes" />
                        <TextInput multiline={true} style={[newTask.input, common.mt20, { paddingLeft: 20, textAlign: "left", height: 100, paddingTop: 10, textAlignVertical: 'top' }]} placeholder="Notes" />

                        <View style={[common.mt20]}>
                            <Text style={{ backgroundColor: "#1656FA", textAlign: "center", borderRadius: 20, color: "#fff", paddingTop: 10, paddingBottom: 10, fontSize: 20 }}>Save</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView >
    )
}

const newTask = StyleSheet.create({
    input: {
        height: 40,
        textAlign: "center",
        color: "#94A3B8",
        backgroundColor: "#F1F5F9",
        marginTop: 10,
        borderRadius: 10,
    },
    dropDown: {
        marginTop: 20,
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        zIndex: -1,
        // height: 50
        // position: "absolute"
    },
    dropDownSelection: {
        position: "relative",
        // height: 0,
        top: 5,
        zIndex: 99,
        borderRadius: 10,
        right: 0,
        padding: 10,
        paddingTop: 0,
        backgroundColor: "#fff",
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },

});

export default NewTask