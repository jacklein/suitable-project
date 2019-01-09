import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements';
import { primaryColor } from '../styles/common';

const Activity = ({ activity, onPress }) => {
  const { details } = activity;
  return (
    <Card containerStyle={styles.card} >
      <Text style={styles.title}>
        {details.title}
      </Text>
      <Text style={styles.description}>
        {details.description}
      </Text>
      <Button
        icon={{ name:'check', color:'#ffffff' }}
        backgroundColor={primaryColor}
        buttonStyle={styles.button}
        title='Mark Complete'
        onPress={() => onPress(activity)}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold', 
    marginBottom: 15
  },
  description: {
    marginBottom: 20
  },
  button: {
    borderRadius: 0,
    alignSelf: 'center'
  }
});

Activity.propTypes = {
  activity: PropTypes.object,
  onPress: PropTypes.func
}


export default Activity;