import { AnySourceData, LngLatBounds, Map, Marker, Popup } from 'mapbox-gl';
import { FC, useReducer, useContext, useEffect } from 'react';
import { directionsApi } from '../../apis';
import { DirectionsResponse } from '../../interfaces/directions-response';
import { PlacesContext } from '../places';
import { MapContext, mapReducer } from '.';

interface Props {
    children?: React.ReactNode | undefined
}

export interface MapState {
    isMapReady: boolean;
    map?: Map;
    markers: Marker[];
}

const MAP_INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
    markers: []
}

export const MapPovider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(mapReducer, MAP_INITIAL_STATE);

    const { places } = useContext(PlacesContext);

    useEffect(() => {
      state.markers.forEach(marker => marker.remove());
      const newMarkers: Marker[] = [];
    
      for (const place of places) {
        const [ lng, lat ] = place.center;
        const popup = new Popup()
            .setHTML(`
                <h6>${place.text_es}</h6>
                <p className='text-muted' style={{ fontSize: '12px' }}>
            `)

        const newMarker = new Marker()
            .setPopup(popup)
            .setLngLat([lng, lat])
            .addTo(state.map!);

        newMarkers.push(newMarker);
      }

      //Todo: limpiar polylines

      dispatch({ type: '[MAP] - setMarkers', payload: newMarkers });

    }, [places])
    


    const setMap = (map: Map) => {

        const myLocationPopup = new Popup()
            .setHTML(`
                <h4>Aquí estoy</h4>
                <p>En algún lugar del mundo</p>
            `)

        new Marker()
            .setLngLat(map.getCenter())
            .setPopup(myLocationPopup)
            .addTo(map)

        dispatch({ type: '[MAP] - setMap', payload: map})
    }

    const getRouteBetweenPoints = async (start: [number, number], end: [number, number]) => {
        const resp = await directionsApi.get<DirectionsResponse>(`/${start.join(',')};${end.join(',')}`);
        const { distance, duration, geometry } = resp.data.routes[0];

        const { coordinates:coords } = geometry;

        let kms = distance / 1000;
            kms = Math.round(kms * 100) / 100;
        
        const minutes = Math.floor(duration / 60);
        console.log({kms, minutes});


        const bounds = new LngLatBounds(
            start,
            start
        )

        for (const coord of coords) {
            const newCoord: [number, number] = [coord[0], coord[1]];
            bounds.extend(newCoord);
        }

        state.map?.fitBounds(bounds, { padding: 100 });

        const sourceData: AnySourceData = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: coords
                        }
                    }
                ]
            }
        }

        if(state.map?.getLayer('RouteString')) {
            state.map?.removeLayer('RouteString');
            state.map?.removeSource('RouteString');
        }
        
        state.map?.addSource('RouteString', sourceData);

        state.map?.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RouteString',
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': 'black',
                'line-width': 3
            }
        })
    }


    return (
        <MapContext.Provider value={{
            ...state,

            // Methods
            setMap,
            getRouteBetweenPoints
        }}>
            { children }
        </MapContext.Provider>
    )
}