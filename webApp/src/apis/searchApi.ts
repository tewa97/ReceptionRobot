import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 4,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZmFjdXgxNCIsImEiOiJja3M0emhvZGExNzU0Mm9wa3pyd2tuc3c2In0.jaIs1sJoNEY_XJc1NznDCA'
    }
})

export default searchApi;