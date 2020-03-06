// Purpose - get access to the navigator, and make navigation function for all to use to
// branch to different screens like going from loginFlow to mainFlow in App.js line 18
// so if I want to go from SignupScreen to TrackListScreen I would use this navigate function.
// line 14 is the branch function called navigate
import { NavigationActions } from 'react-navigation';

let navigator;
// nav comes from react-navigation
export const setNavigator = (nav) => {
    navigator = nav;
}; // end setNavigator

// routeName is from App.js like signup, signin, TrackList
// params is info we want to show on the phone
// anytime we call navigate we'll pass in the routeName and any params
export const navigate = (routeName, params) => {
    // trigger navigation, called from AuthContext line 31
    navigator.dispatch( // change state and show or branch to a different screen
        NavigationActions.navigate({
            routeName: routeName,
            params: params
        })
    ); // end dispatch
}; // end navigate