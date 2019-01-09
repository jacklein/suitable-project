import React, { Component } from 'react';
import { View, Platform, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { updateProgress } from '../actions';
import Toast from 'react-native-easy-toast';
import { secondaryColor } from '../styles/common';

import Activity from '../components/Activity';

class BadgeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.title,
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    }
  }

  /**
   * this.props.updateProgress takes two parameters:
   * 1. the ID of the completed activity
   * 2. the callback function to be called after the action
   *    successfully dispatches to the Badges reducer
   */
  onPress = activity => {
    this.props.updateProgress(activity.id, () => {
      this.refs.toast.show(activity.details.title + ' Complete!');
    });
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
    const { activities } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={activities}
          keyExtractor={item => item.id}
          renderItem={this.renderActivity}
        />
        <Toast 
          ref="toast"
          style={{ backgroundColor: secondaryColor }}
        />
      </View>
    )
  }
}

export default connect(null, { updateProgress })(BadgeScreen);