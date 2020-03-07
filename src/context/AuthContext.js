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
        case 'signin': // token received from the dispatch line below
            return { errorMessage: '', token: action.payload }; // reset errorMessage
        case 'signout': // token received from the dispatch line below
            return { token: null, errorMessage: '' }; // reset token and errorMessage
        case 'clear_error_message': // received from the dispatch line below
            return { ...state, errorMessage: action.payload }; // reset errorMessage to blank
        default: // possible error becasue the action was not recognized
            return state; // return the array of users
    }
}; // end authReducer

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
        if (token) { // if the token is present then automate the signin and branch to the TrackListScreen
            dispatch({ type: 'signin', payload: token});
            navigate('TrackList'); // TrackList defined in App.js on line 28 basically branch to TrackListScreen
        } else { // no token present so branch to the Signup screen
            navigate('Signup');
        } // end if
}; // end tryLocalSignin

const clearErrorMessage = dispatch => () =>{
    return (
        dispatch({ type:'clear_error_message', payload: '' })
    ); // end return
}; // end clearErrorMessage

// 4 action functions: get, post, delete, edit

const signup = (dispatch) => {
return async ({ email, password }) => {
    // make api request to sign up with that email and password from the signup screen onSubmit line 18
    try {
        const response = await trackerApi.post('/signup', { email, password }) // post request to baseURL/ in track-server authRoutes.js
        // response.data also has a token property
        await AsyncStorage.setItem('token', response.data.token); // store token on phone's storage
        dispatch({ type: 'signup', payload: response.data.token}); // pass this up to the authReducer
        console.log(response.data); // shows the user's data on the console
        navigate('TrackList'); // TrackList defined in App.js on line 28 basically branch to TrackListScreen
        // this navigate line calls the navigate function on line 14 in navigation.Ref
    } catch (err) { // signup failed
        console.log(`Unsuccessful sign up in POST AuthContext line 23 ${err.response.data}`);
        dispatch({ type: 'add_error', payload: 'Unsuccessful Sign Up, email already exists in POST AuthContext line 37'}); 
        // pass this message up to the authReducer and eventually to the user's phone screen
    } // end try catch

    }; // end return
}; // end signup

const signin = (dispatch) => {
    return async ({ email, password }) => {
        // make api request to sign in with that email and password from the signin screen onSubmit line 18
        try {
            const response = await trackerApi.post('/signin', { email, password }) // post request to baseURL/ in track-server authRoutes.js
            // response.data also has a token property
            await AsyncStorage.setItem('token', response.data.token); // store token on phone's storage
            dispatch({ type: 'signin', payload: response.data.token}); // pass this up to the authReducer
            console.log(response.data); // shows the user's data on the console
            navigate('TrackList'); // TrackList defined in App.js on line 28 basically branch to TrackListScreen
            // this navigate line calls the navigate function on line 14 in navigation.Ref
        } catch (err) { // signin failed
            console.log(`Unsuccessful sign in in POST AuthContext line 23 ${err.response.data}`);
            dispatch({ type: 'add_error', payload: 'Unsuccessful Sign in, Email does not exist in POST AuthContext line 56'}); // pass this message up to the authReducer and eventually to the user's phone screen
        } // end try catch

    }; // end return
}; // end signin

const signout = (dispatch) => {
    return async() => {
        await AsyncStorage.removeItem('token'); // remove token on phone's storage
        dispatch({ type: 'signout' }); // use authReducer above line 19
        navigate('loginFlow'); // go to the Signup Screen
    }; // end return
};  // end signout

// context and provider come from createDataContext.js
// receive the reducer function, the action and the initial state
export const { Context, Provider} = createDataContext(
    authReducer,
    { signin, signup, signout, clearErrorMessage, tryLocalSignin }, // makes these functions available to the entire app
    { token: null, errorMessage: '' } // initial signin or token state is null or no and errorMessage is blank
); // end export