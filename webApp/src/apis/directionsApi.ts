import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZmFjdXgxNCIsImEiOiJja3M0emhvZGExNzU0Mm9wa3pyd2tuc3c2In0.jaIs1sJoNEY_XJc1NznDCA'
    }
})

export default directionsApi;