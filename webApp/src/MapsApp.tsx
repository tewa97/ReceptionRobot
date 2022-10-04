import { MapPovider, PlacesPovider } from './context';
import { HomeScreen } from './screens';

import './styles.css';

export const MapsApp = () => {
  return (
    <PlacesPovider>
        <MapPovider>
          <HomeScreen />
        </MapPovider>
    </PlacesPovider>
  )
}
