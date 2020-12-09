/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
import credentials from '.credentials.js'

const Map = ({location}) => {
    const MapStyles={
        height:"50vh",
        width:"100%"
    }
    const defaultCenter={
        lat:location.lat, lng:location.lng
    }
    return (
      <LoadScript googleMapsApiKey={credentials.maps}>
        <GoogleMap mapContainerStyle={MapStyles} zoom={9} center={defaultCenter}>
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    );
}
 
export default Map;