// Purpose -
import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <>
            <NavigationEvents onWillFocus={ fetchTracks } />
            
            <FlatList 
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => 
                            navigation.navigate('TrackDetail', { _id: item._id }) 
                            } >
                            <ListItem 
                                chevron
                                title={item.name} />
                        </TouchableOpacity>
                    ); // end return
                } } 
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