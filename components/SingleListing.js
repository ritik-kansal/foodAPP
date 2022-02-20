import { StatusBar, StyleSheet, Dimensions, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { singleListing, common } from './styles';


const SingleListing = () => {
    return (
        <View>
            <Image style={{ width: 15, height: 30.25 }} source={require('../assets/back.png')} />
            <Image style={[common.mt20, common.wfull, common.vh60, common.br10]} source={require('../assets/monGro.png')} />
            <View style={[singleListing.row, common.mt10, common.px5, { alignItems: "center" }]}>
                <View style={[singleListing.col4]}>
                    <Image style={[{ width: 24, height: 22.69 }]} source={require('../assets/dislike.png')} />
                </View>

                <View style={[singleListing.col4]}>
                    {/* <Image style={[{ width: 24, height: 20.8 }]} source={require('../assets/like.png')} /> */}
                    <Text style={common.textCenter}>
                        <Text>Chicken burger</Text>
                        {"\n"}
                        <View>
                            <View style={[common.flex, { flexDirection: "row", justifyContent: "center" }]}>
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                                <Image style={[common.w14, common.h14]} source={require('../assets/star.png')} />
                            </View>
                        </View>
                    </Text>

                </View>
                <View style={[singleListing.col4, { justifyContent: "flex-end" }]}>
                    <Image style={[{ width: 24, height: 20.8, marginLeft: 'auto' }]} source={require('../assets/like.png')} />
                </View>
            </View>
        </View>
    )
}

export default SingleListing;