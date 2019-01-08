import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Card, Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Badge extends React.PureComponent {
  render(){
    const { details } = this.props.badge;
    return (
      <View style={styles.container}>
        <Card
          title={details.title}
          image={{ uri: details.iconUrl }}
          imageProps={styles.image}
          containerStyle={styles.card}
        >
          <Text style={{ textAlign: 'center', marginBottom: 10 }}>
            Progress: {details.progress}
          </Text>
          <Text style={{marginBottom: 10}}>
            {details.description}
          </Text>
          <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='View Tasks'
            onPress={() => this.props.onPress(this.props.badge)}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  card: {
    width: SCREEN_WIDTH, 
    marginTop: 0, 
    marginBottom: 10
  },
  image: {
    resizeMode: 'contain'
  }
});

export default Badge;