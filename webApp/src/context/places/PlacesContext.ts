import { createContext } from 'react';
import { Feature } from '../../interfaces/places-response';

export interface ContextProps {
   isLoading: boolean;
   userLocation?: [number, number];
   isLoadingPlaces: boolean;
   places: Feature[];

   searchPlacesByTerm: (query: string) => Promise<Feature[]>
}


export const PlacesContext = createContext<ContextProps>({} as ContextProps);