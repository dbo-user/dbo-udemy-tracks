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

// swithcNavigator will control the flow between the 
// loginFlow and the mainFlow
const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen, // load this screen first
  loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen
  }),
  // BottomTabNavigator will control the flow between the 
  // trackListFlow, TrackCreateScreen and AccountScreen 
  mainFlow: createBottomTabNavigator({
      trackListFlow: createStackNavigator({
      // trackListFlow will control the flow between the 
      // TtrackListScreen and TrackDEtailScreen
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen
      }),
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen
  })
});

//export default createAppContainer(navigator); normally would do this but
//this blog is using a blog post provider wrapper that wraps around the entire application

// so make a custom App component
const App = createAppContainer(switchNavigator);

// passing App to children in AuthProvider
export default () => {
  return (
    <AuthProvider>
        <App ref={(navigator) => { setNavigator(navigator)} } />
    </AuthProvider> // navigator allows us to navigate around
  );
}; // end export