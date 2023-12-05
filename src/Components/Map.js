import React from 'react'
import { GoogleMap } from '@react-google-maps/api';

const Map = (props) => {
    const { isLoaded } = props
    const containerStyle = {
        width: '75vw',
        height: '75vh'
      };
      
      const center = {
        lat: 38.213,
        lng: -85.760
      };
  return (
    isLoaded && (
        <>
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            >
            </GoogleMap>
        </>
        )
    )
}

export default Map