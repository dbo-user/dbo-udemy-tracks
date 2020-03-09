// Purpose - entry point for the app, it is the main configuration, it is a JavaScript UI library for creating mobile webapps
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { FontAwesome } from '@expo/vector-icons';

// swithcNavigator below will control the flow between the 
// loginFlow and the mainFlow
const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
}); // end trackListFlow

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name='th-list' size={20} />
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen, // load this screen first
  loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
      trackListFlow,
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen
      
  })
});
//const mainFlow = createBottomTabNavigator({TrackList, TrackCreate, Account});
// BottomTabNavigator will control the flow between the 
  // trackListFlow, TrackCreateScreen and AccountScreen 
// trackListFlow will control the flow between the 
      // TrackListScreen and TrackDetailScreen

//export default createAppContainer(navigator); normally would do this but
//this blog is using a blog post provider wrapper that wraps around the entire application

// so make a custom App component
const App = createAppContainer(switchNavigator);

// passing App to children in AuthProvider
export default () => {
  return (
    <TrackProvider>
    <LocationProvider>
        <AuthProvider>
            <App ref={(navigator) => { setNavigator(navigator)} } />
        </AuthProvider> 
    </LocationProvider> 
    </TrackProvider> // navigator on line 55 allows us to navigate around
  ); // end return
}; // end export