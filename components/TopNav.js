import {
    Text,
    View,
    Image
} from 'react-native';
import { topMenu, common } from './styles'

const TopNav = () => {
    return (
        <View style={
            topMenu.topMenu
        }>
            <Image style={
                common.w24
            }
                source={
                    require('../assets/burgerMenu.png')
                } />
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
                <Image style={
                    {
                        width: 24,
                        height: 24
                    }
                }
                    source={
                        require('../assets/grocery.png')
                    } />
                <Image style={
                    [{
                        width: 24,
                        height: 24
                    }, common.ml20]
                }
                    source={
                        require('../assets/food.png')
                    } />
            </View>
        </View>
    );
}
export default TopNav;
