import { View } from "react-native";
import MapView from "react-native-maps"
import { styles } from './styles'


export function Map(){
    return(
        <View>
            <MapView style = {styles.map} />
        </View>
    );
}   