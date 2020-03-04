import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{ marginTop: 20 }}>TrachListScreen</Text>
            <Button
                title='Go to Track Detail'
                onPress={() => navigation.navigate('TrackDetail')}
            />
            
        </>
    ); // end return
}; // end TrackListScreen

const styles = StyleSheet.create({});

export default TrackListScreen;