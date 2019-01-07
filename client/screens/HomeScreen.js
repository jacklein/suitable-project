import React, { Component } from 'react';
import { StyleSheet, FlatList, Platform } from 'react-native';
import { connect } from 'react-redux';
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

  render() {
    return (
      <FlatList
        data={this.props.badges}
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
