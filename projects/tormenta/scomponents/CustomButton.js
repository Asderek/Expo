import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as styleSheet from './StyleSheet'

const CustomButton = ({ title, onPress, style }) => {
  const buttonStyle = style ? [styles.button, style] : styleSheet.defaultButtonStyle;

  return (
    <TouchableOpacity style={[buttonStyle]} onPress={onPress}>
      <Text style={styleSheet.defaultButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({ 
});

export default CustomButton;
