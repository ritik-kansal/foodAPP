import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { topMenu, common } from './styles'

const BottomNav = ({navigation}) => {
  return (
    <View style={bottomNav.pBottom}>
      <Text>bottom</Text>
    </View>
  )
}

const bottomNav = StyleSheet.create({
  pBottom:{
    // position:"absolute",
    // bottom:0
  }
})

export default BottomNav