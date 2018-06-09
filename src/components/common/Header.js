import React from 'react';
import {Text, View} from 'react-native';

class Header extends React.Component {
  
  render() {
    const {viewStyle, textStyle} = styles;
    return (<View style={viewStyle}>
      <Text style={textStyle}>{this.props.headerText}</Text>
    </View>);
  }
}

const styles = {
  viewStyle: {
    alignItems: 'flex-start',
    height: 30,
    width: '100%',
    backgroundColor: '#2a2a2a',
    position: 'relative',    
    justifyContent: 'center',
  },
  
  textStyle: {
    fontSize:20,
    // fontWeight: "bold",    
    color:'white'
  }
}

export {Header};