import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext); // all the tracks will be in state

    const _id = navigation.getParam('_id');
    // iterate thru state looking for matching id's
    const track = state.find(eachTrack => eachTrack._id === _id);

    const initialCoords = track.locations[0].coords; // starting track location on the map

    return (
        <>
            <Text style={{ fontSize: 30, marginLeft: 15}}>{ track.name }</Text>
            <MapView
                initialRegion={{
                    ...initialCoords,
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01
                }}
                style={styles.mapStyle}
            >
                <Polyline coordinates={ track.locations.map(loc => loc.coords) } />
            </MapView>
        </>
    ); // end return
}; // end TrackDetailScreen

TrackDetailScreen.navigationOptions = ({ navigation }) => {
    return {
       // headerShown: false
        headerStyle: { backgroundColor: 'lightblue' },
        title: 'Track Detail',
        headerTitleAlign: 'center'
    }; // end return
}; // end navigationOptions

const styles = StyleSheet.create({
    mapStyle: {
        height: 300
    }
});

export default TrackDetailScreen;