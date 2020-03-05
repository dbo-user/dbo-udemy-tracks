// Purpose - Signup Screen enter email and password to sign up for Tracker
import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    // set State to blanks and later setEmail and setPassword will be updated below on the onChangeText line.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.containerStyle}>
            
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
                    title='Sign Up'
                    onPress={() => signup({ email, password})} // call the signup function in AuthContext line 16 which is a POST request
                />
            </Spacer>
            
            {state.errorMessage
                ? <Text style={styles.errorMessageStyle}>{state.errorMessage}</Text>
                : null }

        </View>
        // state.errorMessage is coming from the authReducer starting on line 7 in AuthContext.js
    ); // end return
}; // end SignupScreen


SignupScreen.navigationOptions = ({ navigation }) => {
    return {
       // headerShown: false
        headerStyle: { backgroundColor: 'lightblue' },
        title: 'Sign Up for Tracker',
        headerTitleAlign: 'center'
    }; // end return
}; // end navigationOptions


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    h3Style: {
        backgroundColor: 'lightblue', 
        alignSelf: 'center'
    },
    errorMessageStyle: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});

export default SignupScreen;