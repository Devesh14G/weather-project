import  { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const home2 = () => {

  const [selectedMarker, setSelectedMarker] = useState(null);

  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974,
  };

  const markers = [
    {
      id: 1,
      position: {
        lat: 40.712776,
        lng: -74.005974,
      },
      name: 'New York City',
    },
    {
      id: 2,
      position: {
        lat: 34.052235,
        lng: -118.243683,
      },
      name: 'Los Angeles',
    },
  ];

  return (
<>
<LoadScript
      googleMapsApiKey="YOUR_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={9}
        center={defaultCenter}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            onClick={() => setSelectedMarker(marker)}
          />
        ))}
        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h2>{selectedMarker.name}</h2>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
   

</>
)
}

export default home2