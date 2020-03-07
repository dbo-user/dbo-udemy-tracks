// Purpose -
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-navigation'; // prevents text from overlapping in the header area

const TrackCreateScreen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }} >
            <Text h2>Create a Track</Text>
        <Spacer>
            <Text>MAP</Text>
        </Spacer>
        <Map />
           
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

const styles = StyleSheet.create({});

export default TrackCreateScreen;