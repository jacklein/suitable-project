import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { Card, Button } from 'react-native-elements';
import { Bar } from 'react-native-progress';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Badge extends React.PureComponent {
  render(){
    const { details } = this.props.badge;
    return (
      <View style={styles.container}>
        <Card
          title={details.title}
          containerStyle={styles.card}
          wrapperStyle={{ alignItems: 'center' }}
        >
          <Bar 
            progress={details.progress}
            height={15}
          />
          <Image
            style={styles.image}
            source={{ uri: details.iconUrl }}
          />
          <Text style={{marginBottom: 10}}>
            {details.description}
          </Text>
          <Button
            backgroundColor='#03A9F4'
            buttonStyle={styles.button}
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
    alignItems: 'center'
  },
  card: {
    width: SCREEN_WIDTH, 
    marginTop: 0, 
    marginBottom: 10
  },
  image: {
    resizeMode: 'center',
    width: SCREEN_WIDTH,
    height: 150
  },
  button: {
    borderRadius: 0
  }
});

export default Badge;