import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { app, common, listing } from './styles';
import TopNav from './TopNav';
import { useIsFocused } from '@react-navigation/native';


const NavigateToSingle = (navigation) => {
    navigation.navigate('SingleListing', { image: require('../assets/monFood.png'), parent: "ListingFood" })
}

const ListingFood = ({ navigation, route }) => {

    const isFocused = useIsFocused();
    if (isFocused) {
        route.params.setModule(0)
    }

    return (
        <SafeAreaView style={app.container}>
            <View style={app.paddingDef}>
                <TopNav navigation={navigation} screen={"food"} />
                <ScrollView>
                    <View style={[common.mt20]}>
                        <TouchableOpacity onPress={() => NavigateToSingle(navigation)}>
                            <Image style={listing.wFullA} source={require('../assets/monFood.png')} />
                        </TouchableOpacity>
                        <View style={[common.mt10, common.flex, common.px5, { flexDirection: "row", alignItems: "center" }]}>
                            <Text>Fresh Riped Apple</Text>
                            <View style={[common.flex, { flexDirection: "row", marginLeft: "auto" }]}>
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                            </View>
                        </View>
                    </View>

                    {/* Next Item */}
                    <View style={[common.mt20]}>
                        <TouchableOpacity onPress={() => NavigateToSingle(navigation)}>
                            <Image style={listing.wFullA} source={require('../assets/tueFood.png')} />
                        </TouchableOpacity>
                        <View style={[common.mt10, common.flex, common.px5, { flexDirection: "row", alignItems: "center" }]}>
                            <Text>Fresh Riped Apple</Text>
                            <View style={[common.flex, { flexDirection: "row", marginLeft: "auto" }]}>
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                            </View>
                        </View>
                    </View>

                    {/* Next Item */}
                    <View style={[common.mt20]}>
                        <TouchableOpacity onPress={() => NavigateToSingle(navigation)}>
                            <Image style={listing.wFullA} source={require('../assets/monFood.png')} />
                        </TouchableOpacity>
                        <View style={[common.mt10, common.flex, common.px5, { flexDirection: "row", alignItems: "center" }]}>
                            <Text>Fresh Riped Apple</Text>
                            <View style={[common.flex, { flexDirection: "row", marginLeft: "auto" }]}>
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                            </View>
                        </View>
                    </View>

                    {/* Next Item */}
                    <View style={[common.mt20]}>
                        <TouchableOpacity onPress={() => NavigateToSingle(navigation)}>
                            <Image style={listing.wFullA} source={require('../assets/tueFood.png')} />
                        </TouchableOpacity>
                        <View style={[common.mt10, common.flex, common.px5, { flexDirection: "row", alignItems: "center" }]}>
                            <Text>Fresh Riped Apple</Text>
                            <View style={[common.flex, { flexDirection: "row", marginLeft: "auto" }]}>
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default ListingFood;