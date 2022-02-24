import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { topMenu, common } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TopNav = ({ navigation, screen }) => {
    return (
        <View style={topMenu.topMenu}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image style={common.w24} source={require('../assets/burgerMenu.png')} />
            </TouchableOpacity>
            <Text style={
                [common.ml10]
            }>
                <Text style={
                    [common.textBold, common.f20]
                }>Food</Text>
                {"\n"}
                <Text style={
                    [common.gray, common.f14]
                }>Jan 2022 - Week 1</Text>
            </Text>
            <View style={
                {
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    right: 0
                }
            }>

                <TouchableOpacity onPress={() => navigation.navigate('ListingGro')} style={[common.ml20]}>
                    <Ionicons name="ios-basket-outline" size={28} color={screen == "gro" ? "#38AF00" : "#94A3B8"} style={[screen == "gro" ? { backgroundColor: "#D9EFCF", padding: 4, borderRadius: 5 } : { backgroundColor: "#fff", padding: 4 }]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ListingFood')} style={[common.ml20]}>
                    <Ionicons name="fast-food-outline" size={28} color={screen == "food" ? "#38AF00" : "#94A3B8"} style={[screen == "food" ? { backgroundColor: "#D9EFCF", padding: 4, borderRadius: 5 } : { backgroundColor: "#fff", padding: 4 }]} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default TopNav;
