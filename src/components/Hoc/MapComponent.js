// components/Map.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';

// Import Leaflet CSS in your component
import 'leaflet/dist/leaflet.css';

// Fix for the default icon not being loaded correctly
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Map = () => {
  useEffect(() => {
    // Any necessary side effects or initializations
  }, []);


  const position =[51.505, -0.09];

  const mapStyle = {
    marginTop:"1.3rem",
    height: "350px",
    width: "100%",
    zIndex: 1,
    borderRadius: "0.5rem"


  };

  return (
    <MapContainer className='rounded-lg ' center={position} style={mapStyle} zoom={10} scrollWheelZoom={false} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
