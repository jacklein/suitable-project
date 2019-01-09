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
      headerBackTitle: 'Back'
    }
  }

  async componentDidMount() {
    this.props.fetchBadges();
  }

  shortenName = badge => {
    const { title } = badge.details;
    const lastIndex = title.lastIndexOf(' ');
    return title.substring(0, lastIndex);
  }

  onPress = badge => {
    this.props.navigation.navigate({
      routeName: 'badge',
      params: {
        badge,
        activities: badge.relationships.recommendations,
        title: this.shortenName(badge)
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
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.badges}  
          keyExtractor={badge => badge.id}
          renderItem={this.renderBadge}
        />
      </View>
    );
  }
}

function mapStateToProps({ badges }) {
  return { badges };
}

export default connect(mapStateToProps, { fetchBadges })(HomeScreen);
