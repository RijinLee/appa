import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from './WelcomeScreen';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import WeeklyTips from './HomeScreens/WeeklyTips';
import SwipingComponent from './Swipers';
// import AppNavigator from '../navigation/AppNavigator';
// import HomeScreen from '../screens/HomeScreen';

export default createAppContainer(
  createSwitchNavigator({
    Welcome: WelcomeScreen,
    Profile: ProfileScreen,
    Home: HomeScreen,
    WeeklyTips: WeeklyTips
    // SomeComponent: SomeComponent
  })
);
