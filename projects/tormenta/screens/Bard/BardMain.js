import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BardMain = () => {
  return (
    <View style={styles.container}>
      <Text>Bard Main123</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BardMain;
