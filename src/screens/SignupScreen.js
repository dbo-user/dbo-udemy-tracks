// Purpose - Signup Screen enter email and password to sign up for Tracker
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation'; // works like navigation.addListner
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink'; // for the second button

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    
    return (
        <View style={styles.containerStyle}>
            <NavigationEvents // does not show on the screen
                //onWillFocus={() => {} } // called when we are about to navigate to the signin screen
                //onDidFocus={() => {clearErrorMessage() } } // called when we land on the signin screen
                onWillBlur={() => {clearErrorMessage() } } // called when we are about to navigate away from the signin screen
                //onDidBlur={() => {clearErrorMessage() } } // called when the navigation away is complete 
             />
          <AuthForm // call the AuthForm to show this screen and pass these 4 parameters
                //headerText='Sign Up for Tracker' // not using this
                errorMessage={ state.errorMessage }
                submitButtonText='Sign Up'
                onSubmit={({ email, password }) => signup ({ email, password }) } // signup is the same action as line 10
          />
          <NavLink // call the NavLink line 10 to show a second button and pass these 2 parameters
                // headerText='Sign Up for Tracker' // not using this
                errorMessage={ state.errorMessage }
                routeName='Signin'
                submitButtonText='I already have an Account, so just Sign In'
                //onSubmit={({ email, password }) => signup ({ email, password }) } // signup is the same action as line 10
          />
           
        </View>
        
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
        marginBottom: 220
    },
    h3Style: { // not using this
        backgroundColor: 'lightblue', 
        alignSelf: 'center'
    }
});

export default SignupScreen;