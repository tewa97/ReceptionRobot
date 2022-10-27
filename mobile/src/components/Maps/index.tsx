import MapView, { MapViewProps } from "react-native-maps"
import { styles } from './styles'

type Props = MapViewProps

export function Map({...rest}: Props){
    return(
         <MapView style={styles.map} />
    );
}