import React, { Component } from 'react';
import { View, Text, Platform, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { updateProgress } from '../actions';
import { Bar } from 'react-native-progress';
import Toast from 'react-native-easy-toast';
import { progressBar, secondaryColor } from '../styles/common';

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
   * 1. the id of the completed activity
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

  calculatePercent = decimal => {
    return (100 * parseFloat(decimal)).toFixed(2);
  }

  renderBadgeProgress = badge => {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 16, marginVertical: 10 }}>Badge Progress: {this.calculatePercent(badge.details.progress)}%</Text>
        <Bar 
          progress={badge.details.progress}
          color={progressBar.color}
          height={progressBar.height}
        />
      </View>
    )
  }

  render() {
    const badge = this.props.badges[this.props.currentBadge];
    const activities = badge.relationships.recommendations;
    
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {this.renderBadgeProgress(badge)}
          <FlatList
            data={activities}
            keyExtractor={item => item.id}
            renderItem={this.renderActivity}
          />
        </ScrollView>
        <Toast 
          ref="toast"
          style={{ backgroundColor: secondaryColor }}
        />
      </View>
    )
  }
}

function mapStateToProps({ badges, currentBadge }) {
  return { badges, currentBadge };
}

export default connect(mapStateToProps, { updateProgress })(BadgeScreen);