// Purpose - tracking map locations, manages recording locations
import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload }; // update currentLocaton with new location in action.payload
        default:
            return state;
    } // end switch
}; // end locationReducer

// action functions

const startRecording = dispatch => () => {

}; // end startRecording

const stopRecording = dispatch => () => {
    
}; // end stopRecording

// receives new location from useLocation.js
const addLocation = dispatch => (location) => {
    dispatch({ type: 'add_current_location', payload: location });
}; // end addLocation

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    { recording: false, locations: [], currentLocation: null }
); // end export
