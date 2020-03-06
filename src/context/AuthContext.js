// Purpose - AuthProvider
import { AsyncStorage } from 'react-native';
// AsyncStorage is storage on the device. It is useful to save data that the application would need to use,
// like saving a username. It will remain even when the user has closed the app or has even closed the device.
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'; // trackerApi has the baseURL
import { navigate } from '../navigationRef';

// state is an array of all the users
// authReducer is called everytime from a dispatch line below
const authReducer = (state, action) => {
    switch (action.type){ // action.type and payload come from the dispatch lines below
        case 'add_error': // error trying to signin a new user
            return { ...state, errorMessage: action.payload}; // errorMessage will go to SignUpScreen line 39 and display it on the phone
        case 'signup': // token received from the dispatch line below
            return { errorMessage: '', token: action.payload }; // reset errorMessage
        default: // possible error becasue the action was not recognized
            return state; // return the array of tracks
    }
}; // end authReducer

// 4 action functions: get, post, delete, edit

const signup = (dispatch) => {
return async ({ email, password }) => {
    // make api request to sign up with that email and password from the signup screen onPress line 35
    try {
        const response = await trackerApi.post('/signup', { email, password }) // post request to baseURL/ in track-server authRoutes.js
        // response.data also has a token property
        await AsyncStorage.setItem('token', response.data.token); // store token on phone's storage
        dispatch({ type: 'signup', payload: response.data.token}); // pass this up to the authReducer
        console.log(response.data); // shows the user's data on the console
        navigate('TrackList'); // TrackList defined in App.js on line 28 basically branch to TrackListScreen
        // this navigate line calls the navigate function on line 14 in navigation.Ref
    } catch (err) {
        console.log(`Unsuccessful sign up in POST AuthContext line 23 ${err.response.data}`);
        dispatch({ type: 'add_error', payload: 'Unsuccessful sign up in POST AuthContext line 23'}); // pass this message up to the authReducer and eventually to the user's phone screen
    } // end try catch
    // if we sign up then modify the state and say we are authenticated

    // if signing up failed then send an error message 

    }; // end return
}; // end signup

const signin = (dispatch) => {
    return ({ email, password }) => {
        // make api request to sign in with that email and password
    
        // if we sign in then modify the state and say we are authenticated
    
        // if signing in failed then send an error message
        
    }; // end return
}; // end signin

const signout = (dispatch) => {
    return () => {
        // make api request to sign out with that email and password
    
        // if we sign up then modify the state and say we are authenticated
    
        // if signing up failed then send an error message
        
    }; // end return
};  // end signout

// context and provider come from createDataContext.js
// receive the reducer function, the action and the initial state
export const { Context, Provider} = createDataContext(
    authReducer,
    { signin, signup, signout }, // makes these functions available to the entire app
    { token: null, errorMessage: '' } // initial signin or token state is null or no and errorMessage is blank
); // end export