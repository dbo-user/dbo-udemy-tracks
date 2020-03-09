// Purpose - start or stop recording track locations get track name
import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';


const TrackForm = () => {
    const { state: { name, recording, locations },
         startRecording, stopRecording, changeName } = useContext(LocationContext);

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
                        title='Save Recording' />
                    : null
                }
            </Spacer>
            
        </>
    ); // end return
}; // end TrackForm

export default TrackForm;
