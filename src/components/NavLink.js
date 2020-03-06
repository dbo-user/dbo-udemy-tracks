// Purpose - make a re-usable button for the SignupScreen and SigninScreen because they are so similar.
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button} from 'react-native-elements';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
// withNavigation passes the navigation props

// NavLink will be called from the SignupScreen and SigninScreen to show the second button after the form
const NavLink = ({ navigation, submitButtonText, routeName }) => {
    return (
        <Spacer>
            <Button 
                buttonStyle={{ backgroundColor: 'navy' }}
                title= {submitButtonText}
                onPress={() => navigation.navigate(routeName)}
                    /* Button to go to the SigninScreen or the SignupScreen, determined by routeName */
                />
        </Spacer> 
    ); // end return
}; // end NavLink

const styles = StyleSheet.create({});

export default withNavigation(NavLink);