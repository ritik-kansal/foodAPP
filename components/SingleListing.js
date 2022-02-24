import { StatusBar, StyleSheet, Dimensions, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { app, singleListing, common } from './styles';
import { useIsFocused } from '@react-navigation/native';

const NavigateToListingGro = (navigation) => {
    navigation.navigate("ListingFood")
}

const SingleListing = ({ navigation, route }) => {
    // route.params.setModule(0)
    const isFocused = useIsFocused();
    if (isFocused) {
        route.params.setModule(0)
    }
    // console.log("etsts", route.params)
    // else {
    //     route.params.setModule(0)

    // }

    return (
        <SafeAreaView style={app.container}>
            <View style={app.paddingDef}>
                <TouchableOpacity onPress={() => navigation.navigate(route.params.parent)}>
                    <Image style={{ width: 15, height: 30.25 }} source={require('../assets/back.png')} />
                </TouchableOpacity>
                <Image style={[common.mt20, common.wfull, common.vh60, common.br10]} source={route.params.image} />
                <View style={[singleListing.row, common.mt10, common.px5, { alignItems: "center" }]}>
                    <View style={[singleListing.col4]}>
                        <Image style={[{ width: 24, height: 22.69 }]} source={require('../assets/dislike.png')} />
                    </View>

                    <View style={[singleListing.col4]}>
                        {/* <Image style={[{ width: 24, height: 20.8 }]} source={require('../assets/like.png')} /> */}

                        <Text style={common.textCenter}>Chicken burger</Text>
                        {/* <Text>{"\n"}</Text> */}
                        <View style={common.mt10}>
                            <View style={[common.flex, { flexDirection: "row", justifyContent: "center" }]}>
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                            </View>
                        </View>

                    </View>
                    <View style={[singleListing.col4, { justifyContent: "flex-end" }]}>
                        <Image style={[{ width: 24, height: 20.8, marginLeft: 'auto' }]} source={require('../assets/like.png')} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SingleListing;