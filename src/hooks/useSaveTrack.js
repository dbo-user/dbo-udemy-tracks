// Purpose -
import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../navigationRef';

export default () => {
    const { createTrack } = useContext(TrackContext);
    const { state: { name, locations }, reset } = useContext(LocationContext);

    const saveTrack = async () => {
        await createTrack(name, locations); // call createTrack in TrackContext. js line 17
        reset(); // call reset in LocationContext.js line 45
        navigate('TrackList'); // go to TrackListScreen
    }; // end saveTrack

    return [saveTrack];
}; // end export
