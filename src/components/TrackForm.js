// Purpose - start or stop recording track locations get track name
import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { state: { name, recording, locations },
         startRecording, stopRecording, changeName } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack(); // call useSaveTrack.js line 10 which uses TrackContext.js to create a track
    return (
        <>
            <Spacer>
                <Input 
                    placeholder='Enter a name for this Track'
                    value={ name }
                    onChangeText={changeName}
                />
            </Spacer>
            <Spacer>
                {recording // if recording then show the Stop button else show the Start button
                    ? <Button 
                        title='Stop'
                        onPress={stopRecording}
                    />
                    : <Button 
                        title='Start Recording'
                        onPress={startRecording}
                    /> 
                } 
            </Spacer>  
            <Spacer> 
                {!recording && locations.length
                    ? <Button
                        title='Save Recording' 
                        onPress={saveTrack} />// goes to TrackContext.js createTrack action line 17
                    : null
                }
            </Spacer>
            
        </>
    ); // end return
}; // end TrackForm

export default TrackForm;
