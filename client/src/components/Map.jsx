import React, { useRef } from "react";
import {useEffect, useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

const Pin = (props) => {
  return (
      <Marker position={props.map.position}>
          <Popup className="max-width-64">
            <h1 className="font-bold text-xl py-2">{props.map.event}</h1>
            <h2>{props.map.organization}</h2>
            <h3>{props.map.tags}</h3>
            <p>{props.map.description}</p>
          </Popup>
        </Marker>
  );
}

const Map = () => {
    const mapRef = useRef(null);
    const latitude = 42.054853;
    const longitude = -87.673945;
    const Norris = [42.05366, -87.67258];

    const [pins, setPins] = useState([]);

    //fetches records from the database
    useEffect(() => {
      async function getRecords() {
          const response = await fetch(`http://localhost:5050/record/`);
          if(!response.ok)
          {
              const message = `An error has occurred: ${response.statusText}`;
              console.error(message);
              return;
          }

          const records = await response.json();
          setPins(records);
      }

      getRecords();
      return;
  }, [pins.length]);

  
  function mapPins() {
    return pins.map((pin) => {
        return (
            <Pin
                pin={pin}
                key={pin._id} 
            />
        );
    });
}
  
    return ( 
      // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer center={[latitude, longitude]} zoom={16} setMaxZoom={25} setMinZoom={10} ref={mapRef} className="h-full w-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Additional map layers or components can be added here */}
          <Marker position={Norris}>
            <Popup className="max-width-64">
              <h1 className="font-bold text-xl py-2">Event At Norris</h1>
              <h2>Organization</h2>
              <span id="badge-dismiss-default" className="inline-flex items-center px-2 py-1 me-2 text-sm text-white bg-blue-400 rounded-xl">
                Free Food
                <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-white bg-transparent rounded-xl hover:text-black " data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                </button>
                </span>
                <span id="badge-dismiss-default" className="inline-flex  items-center px-2 py-1 me-2 text-sm text-white bg-purple-400 rounded-xl">
                Event
                <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-white bg-transparent rounded-xl hover:text-black" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                </button>
                </span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </Popup>
          </Marker>
          {mapPins()}
        </MapContainer>
    );
  };
  
  export default Map;
  