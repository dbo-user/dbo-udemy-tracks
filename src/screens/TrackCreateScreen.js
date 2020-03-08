// Purpose - ask permission to access Location service of phone
// call Map.js line 42 to draw the line on the map
import '../_mockLocation';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-navigation'; // prevents text from overlapping in the header area
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

const TrackCreateScreen = ({ navigation }) => {
    const [err, setErr] = useState(null); // err is initialized to null
    
    // ask user's permission to track their location
    const startWatching = async () => {
        try {
            await requestPermissionsAsync(); // ask permission to use phone location
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000, // try to get an update every 1 second
                distanceInterval: 10 // or update every 10 meters
            }, (location) => {
                    console.log(location); // show actual location
            }); // end watch
        } catch (errorRequest) {
            setErr(errorRequest); // permission was denied
        } // end try
    }; // end startWatching

    useEffect(() => {
        startWatching(); // will only be called one time at the start
    }, []);

    return (
        <SafeAreaView forceInset={{ top: 'always' }} >
            <Text h2>Create a Track</Text>
        <Spacer>
            <Text>MAP</Text>
        </Spacer>
        <Map /> 
        {err 
        ? <Text style={styles.errorMessageStyle}>Please enable Location in Settings</Text>
        : null}
           
        </SafeAreaView>
    ); // end return
}; // end TrackCreateScreen

TrackCreateScreen.navigationOptions = ({ navigation }) => {
    return {
        //headerShown: false,
        headerStyle: { backgroundColor: 'lightblue' },
        title: 'Track Create',
        headerTitleAlign: 'center'
    }; // end return
}; // end navigationOptions

const styles = StyleSheet.create({
    errorMessageStyle: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});

export default TrackCreateScreen;