import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

const MapPin = ({latitude, longitude, name, address}) => {
    const position = [latitude, longitude];
    return (
        <Marker position={position}>
            <Popup className="max-width-64">
              <h1 className="font-bold text-xl py-2">Event At Norris</h1>
              <h2>Organization</h2>
              <h3>Tags</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </Popup>
          </Marker>
    );
}