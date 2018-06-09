import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {

  return (
    <View style={{...styles.containerStyle, ...props.style}}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'column',
    backgroundColor: '#2a2a2a',
  }
};

export {CardSection};