import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import AchievementScreen from './screens/AchievementScreen';

const AppNavigator = createStackNavigator({
  home: HomeScreen,
  achievement: AchievementScreen
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}