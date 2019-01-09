import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { Card, Button } from 'react-native-elements';
import { Bar } from 'react-native-progress';
import { primaryColor } from '../styles/common';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Badge extends React.PureComponent {
  render() {
    const { details } = this.props.badge;
    return (
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.image}
              source={{ uri: details.iconUrl }}
            />
            <View style={{ flex: 1, marginTop: 10 }}>
              <Text style={styles.title}>
                {details.title}
              </Text>
              <Bar 
                progress={details.progress}
                color={primaryColor}
                height={15}
              />
            </View>
          </View>
          <Text style={styles.description}>
            {details.description}
          </Text>
          <Button
            backgroundColor={primaryColor}
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
    borderWidth: 0,
    width: SCREEN_WIDTH, 
    marginTop: 0, 
    marginBottom: 10
  },
  image: {
    left: -15,
    resizeMode: 'contain',
    width: 100,
    height: 100
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold'
  },
  description: {
    marginBottom: 20, 
    marginTop: 15
  },
  button: {
    borderRadius: 0,
    alignSelf: 'center'
  }
});

Badge.propTypes = {
  badge: PropTypes.object,
  onPress: PropTypes.func
}

export default Badge;