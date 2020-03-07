// Purpose - sign out the user by resetting their token in AuthContext.js
// after removing the token AuthContext will show the Signup Screen
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation'; // prevents text from overlapping in the header area


const AccountScreen = ({ navigation }) => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: 'always' }} >
            
        <Spacer>
            <Button 
                buttonStyle={{ backgroundColor: 'navy', marginTop: 20}}
                title='Sign Out'
                onPress={signout} // will go to the AuthContext line 85 and remove the user's token
            />
        </Spacer>
           
        </SafeAreaView>
    ); // end return
}; // end AccountScreen

AccountScreen.navigationOptions = ({ navigation }) => {
    return {
       // headerShown: false
        headerStyle: { backgroundColor: 'lightblue' },
        title: 'Account Screen',
        headerTitleAlign: 'center'
    }; // end return
}; // end navigationOptions

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 220
    }
});

export default AccountScreen;