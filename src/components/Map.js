// purpose - 
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { PinchGestureHandler } from 'react-native-gesture-handler';

const Map = () => {
    let points = [];
    // for loop 20 times to create 20 map coordinates
    // used on the Polyline below
    for ( let i=0; i<20; i++) {
        points.push({
            latitude: 37.33233 + i * 0.001,
            longitude: -122.03121 + i * 0.001
        });
    } // end for loop

    return (
        <View>
            <MapView style={styles.mapStyle}
            initialRegion={{ // initial google map location
                latitude: 37.33233,
                longitude: -122.03121,
                latitudeDelta: 0.01, // zoom level
                longitudeDelta: 0.01 // zoom level

            }}
            >
                <Polyline
                    coordinates={points} // draw a line on map, points is an array from the for loop above
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