import React from 'react';
import { Text } from 'react-native'
import { Card, Button } from 'react-native-elements';

const Activity = ({ activity, onPress }) => {
  const { details } = activity;
  return (
    <Card
      title={details.title}
    >
      <Text style={{marginBottom: 10}}>
        {details.description}
      </Text>
      <Button
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='Mark Task Complete'
        onPress={() => onPress(activity)} />
    </Card>
  );
}

export default Activity;