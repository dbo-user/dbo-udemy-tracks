// Purpose -
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{ marginTop: 20 }}>TrackListScreen</Text>
            <Button
                title='Go to Track Detail'
                onPress={() => navigation.navigate('TrackDetail')}
            />
            
        </>
    ); // end return
}; // end TrackListScreen

TrackListScreen.navigationOptions = ({ navigation }) => {
    return {
       // headerShown: false
        headerStyle: { backgroundColor: 'lightblue' },
        title: 'Track List',
        headerTitleAlign: 'center'
    }; // end return
}; // end navigationOptions

const styles = StyleSheet.create({});

export default TrackListScreen;