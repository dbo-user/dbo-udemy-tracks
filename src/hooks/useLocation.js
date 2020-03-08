// Purpose - request permission to track user, error handling, watch for change in user's location
import React, { useEffect, useState, useContext } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

// re-usable function, shouldTrack is the isFocused from TrackCreateScreen
export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null); // err is initialized to null

    //const [subscriber, setSubscriber] = useState(null);

    useEffect(() => {
        let subscriber;
        // ask user's permission to track their location
        const startWatching = async () => {
            try {
                await requestPermissionsAsync(); // ask permission to use phone location
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000, // try to get an update every 1 second
                    distanceInterval: 10 // or update every 10 meters
                }, 
                callback // was addLocation(location) that called LocationContext.js
                ); // end watchPositionAsync
                //setSubscriber(sub);
            } catch (errorRequest) {
                setErr(errorRequest); // permission was denied
            } // end try
        }; // end startWatching
    
        // if shouldTrack is true? and it comes from TrackCreateScreen and will be true if that screen has focus
        if (shouldTrack) {
            startWatching(); // will only be called one time at the start
        } else {
            if (subscriber) {
                //stop watching location
                subscriber.remove();
            } // end if
            
            subscriber= null; // reset subscriber
        } // end if esle
        return () => {
            if (subscriber) {
                subscriber.remove();
            } // end if
        }; // end return

    }, [shouldTrack, callback]); // will also run if shouldTrack has a different value than from before

    return [err];

}; // end export