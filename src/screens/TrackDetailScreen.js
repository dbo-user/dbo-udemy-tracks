import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TrackDetailScreen = ({ navigation }) => {
    return (
        <View>
            <Text>TrackDetailScreen</Text>
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