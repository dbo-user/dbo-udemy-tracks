// Purpose - initial load up screen that willl show until the presence of the user token has been verified
// prevents the sign up screen from loading first and sorta of flashing by
import React, {useEffect, useContext} from 'react';
import { Context as AuthContext } from '../context/AuthContext';
//import AuthForm from '../components/AuthForm';

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext); // tryLocalSignin chekcs for the presence of a user token

    // this will be called at the start and only one time
    useEffect(() => { // automatic signup will occur if the user token is present
        tryLocalSignin(); // call this, it is in the AuthContext line 26
    }, []); // empty array  means call only one time

    return null; // show nothing
}; // end ResolveAuthScreen

export default ResolveAuthScreen;