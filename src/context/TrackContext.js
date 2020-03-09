// Purpose -
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'; // gives access to the back-end

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    } // end switch
}; // end trackReducer

// action functions

// fetch makes a get request to trackerApi.js and to the back-end and then uses a case statement above
const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('/tracks');
    dispatch({ type: 'fetch_tracks', payload: response.data });
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