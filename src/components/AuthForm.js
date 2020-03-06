// Purpose - make a re-usable form for the SignupScreen and SigninScreen because they are so similar.
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button} from 'react-native-elements';
import Spacer from './Spacer';

// AuthForm will be called from the SignupScreen and SigninScreen and will receive these parameters
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
     // set State to blanks and later setEmail and setPassword will be updated below on the onChangeText line.
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
 
     return (
        <>
            <Input label='Email' 
                    value={email}
                    onChangeText = {(newEmail) => setEmail(newEmail)} // update the state of email
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <Spacer />
                <Input label='Password' 
                    value={password}
                    secureTextEntry={true}
                    onChangeText = {(newPassword) => setPassword(newPassword)} // update the state of password
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <Spacer>
                    <Button 
                        buttonStyle={{ backgroundColor: 'navy', marginTop: 20 }}
                        title={ submitButtonText } // one of the parameters passed from line 7
                        onPress={() => onSubmit({ email, password})} // call the signup function in AuthContext line 16 which is a POST request
                    />
                </Spacer>
                
                {errorMessage
                    ? <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
                    : null } 
        </> // the state.errorMessage above is coming from the authReducer starting on line 7 in AuthContext.js
     ); // end return
}; // end AuthForm

const styles = StyleSheet.create({
    errorMessageStyle: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});
   

export default AuthForm;