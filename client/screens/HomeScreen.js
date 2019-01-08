import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { fetchBadges } from '../actions';

import Badge from '../components/Badge';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Badges',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
    }
  }

  async componentDidMount() {
    this.props.fetchBadges();
  }

  onPress = badge => {
    this.props.navigation.navigate({
      routeName: 'badge',
      params: {
        badge
      }
    });
  }

  renderBadge = ({ item }) => {
    return (
      <Badge 
        badge={item} 
        onPress={this.onPress} 
      />
    )
  }

  loadBadges = () => {
    const badges = [];
    for (const [key, value] of this.props.badges) {
      badges.push(value);
    }

    return badges;
  }

  render() {
    return (
      <FlatList
        data={this.loadBadges()}  
        keyExtractor={badge => badge.id}
        renderItem={this.renderBadge}
      />
    );
  }
}

function mapStateToProps({ badges }) {
  return { badges };
}

export default connect(mapStateToProps, { fetchBadges })(HomeScreen);
