/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-useless-path-segments */
import { useState, useEffect } from 'react';
import axios from 'axios'
import credentials from 'credentials'

const useGoogleAddress = address=>{
    const [map,setMap] = useState({})
    const api = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${credentials.maps}`;

    useEffect(async ()=>{
        const response = await axios(api)
        console.log(response)
        setMap(response.data.results[0].geometry.location)
    },[])
    return map
}

export default useGoogleAddress