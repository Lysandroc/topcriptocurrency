import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({
  label, 
  value, 
  onChangeText, 
  placeholder, 
  secureTextEntr, 
  keyboardType, 
  style, 
  onBlur, 
  editable,
}) => {

  const { labelStyle, inputStyle, containerStyle,  } = styles;

  return (
    <View style={{...containerStyle, ...style}}>
      <TextInput 
        style={inputStyle}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value.toString()}
        placeholder={placeholder}
        keyboardType={keyboardType}
        editable={editable}
      />
    </View>
  )
};

const styles = {
  inputStyle: {
    flex:1,
    fontSize: 22,
    marginLeft: 5,
    marginRight: 5,  
    fontFamily: 'Montserrat-Regular',
  },
  containerStyle: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 5,
    margin: 3,
  }
}
export {Input};