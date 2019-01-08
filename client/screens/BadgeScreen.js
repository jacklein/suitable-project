import React, { Component } from 'react';
import { View, Platform, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { updateProgress } from '../actions';

import Activity from '../components/Activity';

class BadgeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.title,
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
    }
  }

  onPress = item => {
    this.props.updateProgress(item.id);
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

export default connect(null, { updateProgress })(BadgeScreen);