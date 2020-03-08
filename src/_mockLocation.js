// Purpose - generate a map track so you don't have to go walk around the block with your phone
import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 100000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 0,
            altitudeAccuracy: 5,
            altituge: 5,
            longitude: -77.086330 + increment * tenMetersWithDegrees,
            latitude: 34.652370 + increment * tenMetersWithDegrees
        } // end coords
    }; // end return
}; // end getLocation

let counter = 0;
// generate a map track
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    }); // end Location
    counter++;
}, 1000); // end setInterval
// 1000 is 1 second