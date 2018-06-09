import React from 'react';
import {View} from 'react-native';

const Card = (props) => {

  return (
    <View style={{...styles.containerStyle, ...props.style}}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#2a2a2a',
  }
};

export {Card};