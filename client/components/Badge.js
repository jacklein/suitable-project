import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { Card, Button } from 'react-native-elements';
import { Bar } from 'react-native-progress';
import { progressBar, primaryColor } from '../styles/common';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Badge extends React.PureComponent {
  renderHeader = () => {
    const { details } = this.props.badge;
    return (
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
            color={progressBar.color}
            height={progressBar.height}
          />
        </View>
      </View>
    );
  }

  renderDescription = () => {
    const { details } = this.props.badge;
    return (
      <Text style={styles.description}>
        {details.description}
      </Text>
    );
  }

  renderAction = () => {
    return (
      <Button
        backgroundColor={primaryColor}
        buttonStyle={styles.button}
        title='View Tasks'
        onPress={() => this.props.onPress(this.props.badge, this.props.index)}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          {this.renderHeader()}
          {this.renderDescription()}
          {this.renderAction()}
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