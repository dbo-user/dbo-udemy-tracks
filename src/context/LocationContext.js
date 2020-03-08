// Purpose - tracking map locations, manages recording locations
import createDataContext from './createDataContext';
import Spacer from '../components/Spacer';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload }; // update currentLocaton with new location in action.payload
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] };
        case 'start_recording':
            return { ...state, recording: true };
        case 'stop_recording':
            return { ...state, recording: false };
        case 'change_name':
            return { ...state, name: action.payload };
        default:
            return state;
    } // end switch
}; // end locationReducer

// action functions
const changeName = dispatch => (name) => {
    dispatch({ type: 'change_name', payload: name });
}; // end changeName

const startRecording = dispatch => () => {
    dispatch({ type: 'start_recording' });
}; // end startRecording

const stopRecording = dispatch => () => {
    dispatch({ type: 'stop_recording' });
}; // end stopRecording

// receives new location from useLocation.js
const addLocation = dispatch => (location, recording) => {
    dispatch({ type: 'add_current_location', payload: location });
    if (recording) { // add location to locations array
        dispatch({ type: 'add_location', payload: location});
    }// end if

}; // end addLocation

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeName },
    { name: '', recording: false, locations: [], currentLocation: null }
); // end export
