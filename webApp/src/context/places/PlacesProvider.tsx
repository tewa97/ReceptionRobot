import { FC, useEffect, useReducer } from 'react';
import { searchApi } from '../../apis';
import { getUserLocation } from '../../helpers';
import { Feature, PlacesResponse } from '../../interfaces/places-response';
import { PlacesContext, placesReducer } from '.';

interface Props {
    children?: React.ReactNode | undefined
}

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number];
    isLoadingPlaces: boolean;
    places: Feature[];
}

const PLACES_INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: []
}

export const PlacesPovider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(placesReducer, PLACES_INITIAL_STATE)
    


    useEffect(() => {
       getUserLocation()
            .then( lngLat => dispatch({ type: '[PLACES] - setUserLocation', payload: lngLat }))
    },[]);

    const searchPlacesByTerm = async( query:string ): Promise<Feature[]> => {
        if(query.length === 0){
            dispatch({ type: '[PLACES] - setPlaces', payload: [] })
        }
        if(!state.userLocation) throw new Error('No se pudo obtener la ubicación del usuario');

        dispatch({ type: '[PLACES] - setLoadingPlaces'})

        const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation.join(','),
            }
        });

        dispatch({ type: '[PLACES] - setPlaces', payload: resp.data.features })
        return resp.data.features;
    }


    return (
        <PlacesContext.Provider value={{
            ...state,

            //Methods
            searchPlacesByTerm
        }}>
            { children }
        </PlacesContext.Provider>
    )
}

