import React from 'react';
import { Text } from 'react-native'
import { Card, Button } from 'react-native-elements';

const Badge = ({ badge, onPress }) => {
  const { details } = badge;
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
        onPress={() => onPress(badge)} />
    </Card>
  );
}

export default Badge;