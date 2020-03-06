import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SigninScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={{ marginTop: 20 }}>SigninScreen</Text>
        </View>
    ); // end return
}; // end SigninScreen

SigninScreen.navigationOptions = ({ navigation }) => {
    return {
       // headerShown: false
        headerStyle: { backgroundColor: 'lightblue' },
        title: 'Sign In for Tracker',
        headerTitleAlign: 'center'
    }; // end return
}; // end navigationOptions

const styles = StyleSheet.create({});

export default SigninScreen;