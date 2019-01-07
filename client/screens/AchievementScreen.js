import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native'

class AchievementScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.achievement.details.title,
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
    }
  }

  render() {
    return (
      <View>
        <Text>
          AchievementScreen
        </Text>
      </View>
    )
  }
}

export default AchievementScreen;