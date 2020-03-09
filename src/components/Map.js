// Purpose - draws a line on the map, called from the TrackCreateScreen line 42
import React, { useContext } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext);

    // if there is no current location then show a spinner and return
    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />;
    } // end if

    return (
        <View>
            <MapView style={styles.mapStyle}
                initialRegion={{ // initial google map location
                    ...currentLocation.coords,
                    //latitude: 34.652370, same as currentLocation.coords
                    //longitude: -77.086330, same as currentLocation.coords
                    latitudeDelta: 0.01, // zoom level
                    longitudeDelta: 0.01 // zoom level

                }}
                /*
                region={{ // current google map loaction
                    ...currentLocation.coords,
                    //latitude: 34.652370,
                    //longitude: -77.086330,
                    latitudeDelta: 0.01, // zoom level
                    longitudeDelta: 0.01 // zoom level
                }}
                */
            > 
                <Circle 
                    center={currentLocation.coords} // same as latitude, longitude
                    radius={30}
                    strokeColor='rgba(217, 30, 24, 1)'
                    fillColor='rgba(217, 30, 24, 0.3)'
                /> 

                <Polyline // draw the line on the map by getting the latitude and longitude from eachLocation.coords
                    coordinates={locations.map(eachLocation => eachLocation.coords)}
                />
            </MapView>
        </View>
    ); // end return

}; // end Map

const styles = StyleSheet.create({
   mapStyle: {
       height: 300
   }
});

export default Map;