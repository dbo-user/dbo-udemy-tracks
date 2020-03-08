// Purpose - request permission to track user, error handling, watch for change in user's location
import React, { useEffect, useState, useContext } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

// re-usable function
export default (callback) => {
    const [err, setErr] = useState(null); // err is initialized to null

    // ask user's permission to track their location
    const startWatching = async () => {
        try {
            await requestPermissionsAsync(); // ask permission to use phone location
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000, // try to get an update every 1 second
                distanceInterval: 10 // or update every 10 meters
            }, 
            callback // was addLocation(location) that called LocationContext.js
            ); // end watchPositionAsync
        } catch (errorRequest) {
            setErr(errorRequest); // permission was denied
        } // end try
    }; // end startWatching

    useEffect(() => {
        startWatching(); // will only be called one time at the start
    }, []);

    return [err];

}; // end export