// Purpose - Signup Screen
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.containerStyle}>
            <Spacer>
                <Text style={{alignSelf:'center'}} h3 >Sign Up for Tracker</Text>
            </Spacer>
            <Input label='Email' />
            <Spacer />
            <Input label='Password' />
            <Spacer>
                <Button title='Sign Up' />
            </Spacer>
        </View>
        
    ); // end return
}; // end SignupScreen


SignupScreen.navigationOptions = ({ navigation }) => {
    return {
        headerShown: false
        //headerStyle: { backgroundColor: 'lightblue' },
        //title: 'Signup',
        //headerTitleAlign: 'center'
    }; // end return
}; // end navigationOptions


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SignupScreen;