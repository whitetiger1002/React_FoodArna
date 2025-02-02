import React, { useEffect, useRef } from 'react';
import {MapDiv} from "./../partPageStyle";
const GMap = (props) => {
    const googleMapRef = useRef(null);
    let googleMap = null;

    useEffect(() => {
        googleMap = initGoogleMap();
        createMarker();
    }, []);


    // initialize the google map
    const initGoogleMap = () => {
        return new window.google.maps.Map(googleMapRef.current, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }

    // create marker on google map
    const createMarker = () => new window.google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: googleMap
    });

     return <MapDiv ref={googleMapRef} stylePros = {props.id}/>

// return <div
//         ref={googleMapRef}
//         style={{ width: props.id === 'thankyou'?450 : props.id === 'deliverylocation'? 300:'', height: props.id === 'thankyou'?450:props.id === 'deliverylocation'? 250:'', borderRadius: '15px' }}
//     />
}

export default GMap;
