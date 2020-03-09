import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext); // all the tracks will be in state

    const _id = navigation.getParam('_id');
    // iterate thru state looking for matching id's
    const track = state.find(eachTrack => eachTrack._id === _id);

    return (
        <View>
            <Text>{ track.name }</Text>
        </View>
    ); // end return
}; // end TrackDetailScreen

TrackDetailScreen.navigationOptions = ({ navigation }) => {
    return {
       // headerShown: false
        headerStyle: { backgroundColor: 'lightblue' },
        title: 'Track List',
        headerTitleAlign: 'center'
    }; // end return
}; // end navigationOptions

const styles = StyleSheet.create({});

export default TrackDetailScreen;