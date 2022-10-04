import { PlacesState } from '.';
import { Feature } from '../../interfaces/places-response';


type PlacesActionType = 
  | { type: '[PLACES] - setUserLocation', payload: [number, number] }
  | { type: '[PLACES] - setLoadingPlaces', }
  | { type: '[PLACES] - setPlaces', payload: Feature[] }

export const placesReducer = (state: PlacesState, action: PlacesActionType): PlacesState => {
   switch (action.type) {
      case '[PLACES] - setUserLocation':
          return {
            ...state,
            isLoading: false,
            userLocation: action.payload
          }
      
      case '[PLACES] - setLoadingPlaces':
          return {
            ...state,
            isLoadingPlaces: true,
            places: []
          }

      case '[PLACES] - setPlaces':
          return {
            ...state,
            isLoadingPlaces: false,
            places: action.payload
          }
          
      default:
         return state;
     }


}