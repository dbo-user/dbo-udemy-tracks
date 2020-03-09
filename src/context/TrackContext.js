// Purpose -
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'; // gives access to the back-end

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    } // end switch
}; // end trackReducer

// action functions

const fetchTracks = dispatch => () => {

}; // end fetchTracks

// create makes a post request to trackerApi.js and to the back-end instead of using a case statement above
const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', {name, locations});
}; // end createTrack


export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
); // end export