// Purpose -
import createDataContext from '.createDataContext';

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    } // end switch
}; // end trackReducer

// action functions

const fetchTracks = dispatch => () => {

}; // end fetchTracks

const createTrack = dispatch => () => {

}; // end createTrack


export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
); // end export