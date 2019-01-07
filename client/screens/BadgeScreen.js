import React, { Component } from 'react';
import { Platform, FlatList } from 'react-native';

import Activity from '../components/Activity';

class BadgeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.badge.details.title,
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
    }
  }

  onPress = item => {
    console.log(item);
  }

  renderActivity = ({ item }) => {
    return (
      <Activity
        activity={item}
        onPress={this.onPress}
      />
    )
  }

  render() {
    const activities = this.props.navigation.state.params.badge.relationships.recommendations;
    return (
      <FlatList
        data={activities}
        keyExtractor={item => item.id}
        renderItem={this.renderActivity}
      />
    )
  }
}

export default BadgeScreen;