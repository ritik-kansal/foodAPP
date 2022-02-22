import React, { useState } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { common, customDrawer } from '../components/styles'

const ModuleZeroDrawer = ({ props }) => {
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
                <Image style={{ width: 24, height: 24 }} source={require('../assets/profile.png')} />
                <Image style={[common.ml20, { width: 21.59, height: 24 }]} source={require('../assets/settings.png')} />
            </View>
            <View style={{ marginTop: 40, marginBottom: 0, marginLeft: 'auto', marginRight: 'auto' }}>
                <Image style={{ width: 82, height: 82 }} source={require('../assets/user.png')} />
                <Text style={[common.mt10, { textAlign: "center" }]}>Hello Anna</Text>
            </View>
            <DrawerContentScrollView style={common.mt20}>
                {/* <DrawerItemList {...props} /> */}
                <Text style={[common.ml20, common.fw500, common.green, common.f20]}>Food Shuffle</Text>
                <View style={[common.mt10, { borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', marginLeft: 'auto', marginRight: 'auto' }]} />

                <Text style={[common.mt10, common.ml20, common.fw500, common.green, common.f20]}>Recommendations</Text>
                <View style={[common.mt10, { borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', marginLeft: 'auto', marginRight: 'auto' }]} />

                <TouchableWithoutFeedback onPress={() => setShowPreferences(!showPreferences)}>
                    <View style={[common.mt10, common.ml20, common.flex, { flexDirection: "row", alignItems: "center" }]}>
                        {
                            showPreferences ?
                                <Image style={customDrawer.smallArrowDown} source={require("../assets/downArrow.png")} />
                                :
                                <Image style={customDrawer.smallArrowRight} source={require("../assets/rightArrow.png")} />
                        }
                        <Text style={[common.fw500, common.green, common.f20]}  >Preferances</Text>
                    </View>
                </TouchableWithoutFeedback>
                {
                    showPreferences ?
                        <View style={common.ml10}>
                            {/* option 1 */}
                            <TouchableWithoutFeedback onPress={() => setShowCusineOptions(!showCusineOptions)}>
                                <View style={[common.mt10, common.ml20, common.flex, { flexDirection: "row", alignItems: "center" }]}>
                                    {showCusineOptions ? <Image style={customDrawer.smallArrowDown} source={require("../assets/downArrow.png")} /> : <Image style={customDrawer.smallArrowRight} source={require("../assets/rightArrow.png")} />}<Text style={[common.green]}>Cusine</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            {
                                showCusineOptions ?
                                    <View style={customDrawer.dropDownBox}>
                                        <View style={common.row}>
                                            <TouchableOpacity activeOpacity={1} onPress={() => setGetCusineSelection(1)} style={[customDrawer.buttonSelect, getCusineSelection == 1 ? common.bgGreen : common.bgWhite]} >
                                                <Text style={[common.textCenter, getCusineSelection == 1 ? common.white : common.darkGray]}>Italian</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1} onPress={() => setGetCusineSelection(2)} style={[customDrawer.buttonSelect, getCusineSelection == 2 ? common.bgGreen : common.bgWhite]} >
                                                <Text style={[common.textCenter, getCusineSelection == 2 ? common.white : common.darkGray]}>French</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[common.row, common.mt10]}>
                                            <TouchableOpacity activeOpacity={1} onPress={() => setGetCusineSelection(3)} style={[customDrawer.buttonSelect, getCusineSelection == 3 ? common.bgGreen : common.bgWhite]} >
                                                <Text style={[common.textCenter, getCusineSelection == 3 ? common.white : common.darkGray]}>Indian</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1} onPress={() => setGetCusineSelection(4)} style={[customDrawer.buttonSelect, getCusineSelection == 4 ? common.bgGreen : common.bgWhite]} >
                                                <Text style={[common.textCenter, getCusineSelection == 4 ? common.white : common.darkGray]}>American</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[common.row, common.mt10]}>
                                            <TouchableOpacity activeOpacity={1} onPress={() => setGetCusineSelection(5)} style={[customDrawer.buttonSelect, getCusineSelection == 5 ? common.bgGreen : common.bgWhite]} >
                                                <Text style={[common.textCenter, getCusineSelection == 5 ? common.white : common.darkGray]}>Mexican</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1} onPress={() => setGetCusineSelection(6)} style={[customDrawer.buttonSelect, getCusineSelection == 6 ? common.bgGreen : common.bgWhite]} >
                                                <Text style={[common.textCenter, getCusineSelection == 6 ? common.white : common.darkGray]}>Asian</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    : <></>
                            }

                            {/* option 2 */}
                            <TouchableWithoutFeedback onPress={() => setShowDietOptions(!showDietOptions)}>
                                <View style={[common.mt10, common.ml20, common.flex, { flexDirection: "row", alignItems: "center" }]}>
                                    {showDietOptions ? <Image style={customDrawer.smallArrowDown} source={require("../assets/downArrow.png")} /> : <Image style={customDrawer.smallArrowRight} source={require("../assets/rightArrow.png")} />}<Text style={[common.green]}>Diet</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            {
                                showDietOptions ?
                                    <View style={customDrawer.dropDownBox}>
                                        <View style={common.row}>
                                            <TouchableOpacity activeOpacity={1} onPress={() => setGetDietSelection(1)} style={[customDrawer.buttonSelect, getDietSelection == 1 ? common.bgGreen : common.bgWhite]} >
                                                <Text style={[common.textCenter, getDietSelection == 1 ? common.white : common.darkGray]}>Veg</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1} onPress={() => setGetDietSelection(2)} style={[customDrawer.buttonSelect, getDietSelection == 2 ? common.bgGreen : common.bgWhite]} >
                                                <Text style={[common.textCenter, getDietSelection == 2 ? common.white : common.darkGray]}>Meat</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[common.row, common.mt10]}>
                                            <TouchableOpacity activeOpacity={1} onPress={() => setGetDietSelection(3)} style={[customDrawer.buttonSelect, getDietSelection == 3 ? common.bgGreen : common.bgWhite]} >
                                                <Text style={[common.textCenter, getDietSelection == 3 ? common.white : common.darkGray]}>Keto</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1} onPress={() => setGetDietSelection(4)} style={[customDrawer.buttonSelect, getDietSelection == 4 ? common.bgGreen : common.bgWhite]} >
                                                <Text style={[common.textCenter, getDietSelection == 4 ? common.white : common.darkGray]}>Gluten Free</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    : <></>
                            }

                            {/* option 3 */}
                            <TouchableWithoutFeedback onPress={() => setShowCookTimeOptions(!showCookTimeOptions)}>
                                <View style={[common.mt10, common.ml20, common.flex, { flexDirection: "row", alignItems: "center" }]}>
                                    {showCookTimeOptions ? <Image style={customDrawer.smallArrowDown} source={require("../assets/downArrow.png")} /> : <Image style={customDrawer.smallArrowRight} source={require("../assets/rightArrow.png")} />}<Text style={[common.green]}>Cook Time</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            {
                                showCookTimeOptions ?
                                    <View style={customDrawer.dropDownBox}>
                                        <View style={common.row}>
                                            <TouchableOpacity activeOpacity={1} onPress={() => setGetCookTimeSelection(1)} style={[customDrawer.buttonSelect, getCookTimeSelection == 1 ? common.bgGreen : common.bgWhite]} >
                                                <Text style={[common.textCenter, getCookTimeSelection == 1 ? common.white : common.darkGray]}>30 min</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1} onPress={() => setGetCookTimeSelection(2)} style={[customDrawer.buttonSelect, getCookTimeSelection == 2 ? common.bgGreen : common.bgWhite]} >
                                                <Text style={[common.textCenter, getCookTimeSelection == 2 ? common.white : common.darkGray]}>1 hour</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[common.row, common.mt10]}>
                                            <TouchableOpacity activeOpacity={1} onPress={() => setGetCookTimeSelection(3)} style={[customDrawer.buttonSelect, getCookTimeSelection == 3 ? common.bgGreen : common.bgWhite]} >
                                                <Text style={[common.textCenter, getCookTimeSelection == 3 ? common.white : common.darkGray]}>One Pot</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1} onPress={() => setGetCookTimeSelection(4)} style={[customDrawer.buttonSelect, getCookTimeSelection == 4 ? common.bgGreen : common.bgWhite]} >
                                                <Text style={[common.textCenter, getCookTimeSelection == 4 ? common.white : common.darkGray]}>Full Course</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    : <></>
                            }
                        </View>
                        :
                        <></>
                }

                <View style={[common.mt10, { borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', marginLeft: 'auto', marginRight: 'auto' }]} />

                <TouchableWithoutFeedback onPress={() => setShowReminders(!showReminders)}>
                    <View style={[common.mt10, common.ml20, common.flex, { flexDirection: "row", alignItems: "center" }]}>
                        {
                            showReminders ?
                                <Image style={customDrawer.smallArrowDown} source={require("../assets/downArrow.png")} />
                                :
                                <Image style={customDrawer.smallArrowRight} source={require("../assets/rightArrow.png")} />
                        }
                        <Text style={[common.fw500, common.green, common.f20]}  >Reminders</Text>
                    </View>
                </TouchableWithoutFeedback>
                {
                    showReminders ?
                        <View style={customDrawer.dropDownBox}>
                            <View style={common.row}>
                                <TouchableOpacity activeOpacity={1} onPress={() => setGetFoodType(1)} style={[customDrawer.buttonSelect, getFoodType == 1 ? common.bgGreen : common.bgWhite, { marginRight: 0 }]} >
                                    <Text style={[common.textCenter, getFoodType == 1 ? common.white : common.darkGray]}>Food</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} onPress={() => setGetFoodType(2)} style={[customDrawer.buttonSelect, getFoodType == 2 ? common.bgGreen : common.bgWhite, { marginLeft: 0 }]} >
                                    <Text style={[common.textCenter, getFoodType == 2 ? common.white : common.darkGray]}>Grocery</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity activeOpacity={1} style={[common.mt10, customDrawer.picker, common.bgWhite]} >
                                <View style={[common.row, { justifyContent: "space-between" }]}>
                                    <Text style={[common.gray]}>Date</Text>
                                    <Text style={[common.green]}>12/01/2022</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} style={[common.mt10, customDrawer.picker, common.bgWhite]} >
                                <View style={[common.row, { justifyContent: "space-between" }]}>
                                    <Text style={[common.gray]}>Time</Text>
                                    <Text style={[common.green]}>10:15 AM</Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                        : <></>
                }
            </DrawerContentScrollView>
        </>
    )
}


export default ModuleZeroDrawer