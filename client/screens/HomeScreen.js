import React from 'react';
import { StyleSheet, Text, FlatList, Platform } from 'react-native';
import axios from 'axios';
import { Card, Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Achievements',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
    }
  }

  state = { achievements: [] };

  async componentDidMount() {
    const res = await axios.get('http://192.168.1.137:3001/v1/achievements');
    this.setState({ achievements: res.data });
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
    const { details } = item;
    return (
      <Card
        title={details.title}
        image={{ uri: details.iconUrl }}
      >
        <Text style={{ textAlign: 'center', marginBottom: 10 }}>
          Progress: {details.progress}
        </Text>
        <Text style={{marginBottom: 10}}>
          {details.description}
        </Text>
        <Button
          //icon={{name: 'code'}}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='View Tasks'
          onPress={() => this.onPress(item)} />
      </Card>
    )
  }

  render() {
    return (
      <FlatList
        data={this.state.achievements}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
