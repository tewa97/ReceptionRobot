import { MapState } from '.';
import { Map, Marker } from 'mapbox-gl';


type MapActionType = 
  | { type: '[MAP] - setMap', payload: Map }
  | { type: '[MAP] - setMarkers', payload: Marker[] }

export const mapReducer = (state: MapState, action: MapActionType): MapState => {
   switch (action.type) {
      case '[MAP] - setMap':
        return {
          ...state,
          isMapReady: true, 
          map: action.payload 
        };

      case '[MAP] - setMarkers':
        return {
          ...state,
          markers: action.payload
        };
        

      default:
         return state;
     }


}