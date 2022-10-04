import React from 'react'
import ReactDOM from 'react-dom/client'
import { MapsApp } from './MapsApp'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZmFjdXgxNCIsImEiOiJja3M0emhvZGExNzU0Mm9wa3pyd2tuc3c2In0.jaIs1sJoNEY_XJc1NznDCA';

if(!navigator.geolocation){
    alert('Geolocation is not supported by your browser')
    throw new Error('Geolocation is not supported by your browser')
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
)
