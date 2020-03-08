// Purpose - ask permission to access Location service of phone
// call Map.js line 42 to draw the line on the map
import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import Spacer from '../components/Spacer';
import { SafeAreaView, withNavigationFocus } from 'react-navigation'; // prevents text from overlapping in the header area
import { Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';


const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);

        const callback = useCallback(location => {
            addLocation(location, state.recording);
        }, [state.recording]);

    // call useLocation and pass in addLocation and receive back err
    const [err] = useLocation(isFocused, callback );

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

        <TrackForm />
           
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

export default withNavigationFocus(TrackCreateScreen);