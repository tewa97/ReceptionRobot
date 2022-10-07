import React from 'react'
import ReactDOM from 'react-dom/client'
import { MapsApp } from './MapsApp'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import './homeStyle.css';
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZmFjdXgxNCIsImEiOiJja3M0emhvZGExNzU0Mm9wa3pyd2tuc3c2In0.jaIs1sJoNEY_XJc1NznDCA';

if(!navigator.geolocation){
    alert('Geolocation is not supported by your browser')
    throw new Error('Geolocation is not supported by your browser')
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
       <div className="container">
      <aside>
        <p>Docket</p>
        <div className="addNote"><i className="fa fa-plus" aria-hidden="true"></i></div>
      </aside>
      <main>
        <header>
          <label htmlFor="searchLogo"><i
              className="fa fa-search"
              aria-hidden="true"
            ></i></label>
          <input
            id="searchLogo"
            className="searchInput"
            type="text"
            placeholder="Search"
          />
        </header>
        <h1>Notes</h1>
        <section className="notesContainer">
          <div className="camera"></div>
          <div className="mapContainer"></div>
        </section>
      </main>
    </div>
  </React.StrictMode>
)
// <MapsApp />