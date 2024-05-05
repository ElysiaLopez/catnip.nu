import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

const Map = () => {
    const mapRef = useRef(null);
    const latitude = 42.054853;
    const longitude = -87.673945;
  
    return ( 
      // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer center={[latitude, longitude]} zoom={15} ref={mapRef} className="h-full w-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Additional map layers or components can be added here */}
        </MapContainer>
    );
  };
  
  export default Map;
  