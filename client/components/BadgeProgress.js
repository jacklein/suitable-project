import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { Bar } from 'react-native-progress';
import { progressBar } from '../styles/common';

const calculatePercent = decimal => {
  return (100 * parseFloat(decimal)).toFixed(2);
}

const BadgeProgress = ({ badge }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Badge Progress: {calculatePercent(badge.details.progress)}%
      </Text>
      <Bar 
        progress={badge.details.progress}
        color={progressBar.color}
        height={progressBar.height}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    marginBottom: 15
  },
  text: {
    fontSize: 16, 
    marginVertical: 10
  }
});

BadgeProgress.propTypes = {
  badge: PropTypes.object,
}


export default BadgeProgress