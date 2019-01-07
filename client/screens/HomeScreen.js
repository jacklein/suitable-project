import axios from 'axios';
import React, { Component } from 'react';
import { StyleSheet, FlatList, Platform } from 'react-native';
import { connect } from 'react-redux';
import { fetchAchievements } from '../actions';

import Achievement from '../components/Achievement';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Achievements',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
    }
  }

  async componentDidMount() {
    this.props.fetchAchievements();
  }

  onPress = item => {
    this.props.navigation.navigate({
      routeName: 'achievement',
      params: {
        achievement: item
      }
    });
  }

  renderItem = ({ item }) => {
    return (
      <Achievement 
        item={item} 
        onPress={this.onPress} 
      />
    )
  }

  render() {
    return (
      <FlatList
        data={this.props.achievements}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
      />
    );
  }
}

function mapStateToProps({ achievements }) {
  return { achievements };
}

export default connect(mapStateToProps, { fetchAchievements })(HomeScreen);
