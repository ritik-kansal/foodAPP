import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { common, listing } from './styles';
import TopNav from './TopNav';

const ListingGro = () => {
    return (
        <>
            <TopNav />
            <ScrollView>
                <View style={[common.mt20]}>
                    <Image style={listing.wFullA} source={require('../assets/monGro.png')} />
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
                    <Image style={listing.wFullA} source={require('../assets/tueGro.png')} />
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
                    <Image style={listing.wFullA} source={require('../assets/monGro.png')} />
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
                    <Image style={listing.wFullA} source={require('../assets/tueGro.png')} />
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
        </>
    )
}

export default ListingGro;