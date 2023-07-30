import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from '../../scomponents/CustomButton';
import * as customStyles from '../../scomponents/StyleSheet';

const EngenhocaCDCalculator = () => {
  const [baseCD, setBaseCD] = useState('15');
  const [spellCost, setSpellCost] = useState('0');
  const [improvCost, setImprovCost] = useState('0');
  const [activations, setActivations] = useState('0');
  const [textoResult, setResult] = useState('');
  const increaseCD = 5;

  const handleCalculate = () => {
    var baseCDn = parseFloat(baseCD);
    var spellCostn = parseFloat(spellCost);
    var improvCostn = parseFloat(improvCost);
    var activationsn = parseFloat(activations);

    const sum = baseCDn + spellCostn + improvCostn + activationsn * increaseCD;
    setResult('CD: ' + sum + '\nGasto de Mana: ' + improvCostn);
  };

  const increaseValue = (value, setInputValue) => () => {
    
    const currentValue = parseFloat(value);
    var newValue = (currentValue + 1);

    newValue = Math.max(newValue, 0);
    setInputValue(newValue.toString());
  };
  
  const decreaseValue = (value, setInputValue) => () => {
    const currentValue = parseFloat(value);
    var newValue = (currentValue - 1);

    newValue = Math.max(newValue, 0);
    setInputValue(newValue.toString());
  }; 

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dificuldade Base:</Text>
        <CustomButton title="-" onPress={decreaseValue(baseCD, setBaseCD)} />
        <TextInput
          style={styles.input}
          placeholder="Enter Number 1"
          value={baseCD}
          onChangeText={setBaseCD}
          keyboardType="numeric"
        />
        <CustomButton title="+" onPress={increaseValue(baseCD, setBaseCD)} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Custo da Magia:</Text>
        <CustomButton title="-" onPress={decreaseValue(spellCost, setSpellCost)} />
        <TextInput
          style={styles.input}
          placeholder="Enter Number 2"
          value={spellCost}
          onChangeText={setSpellCost}
          keyboardType="numeric"
        />
        <CustomButton title="+" onPress={increaseValue(spellCost, setSpellCost)} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Custo dos Aprimoramentos:</Text>
        <CustomButton title="-" onPress={decreaseValue(improvCost, setImprovCost)} />
        <TextInput
          style={styles.input}
          placeholder="Enter Number 3"
          value={improvCost}
          onChangeText={setImprovCost}
          keyboardType="numeric"
        />
        <CustomButton title="+" onPress={increaseValue(improvCost, setImprovCost)} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}># de Ativações da Engenhoca:</Text>
        <CustomButton title="-" onPress={decreaseValue(activations, setActivations)} />
        <TextInput
          style={styles.input}
          placeholder="Enter Number 4"
          value={activations}
          onChangeText={setActivations}
          keyboardType="numeric"
        />
        <CustomButton title="+" onPress={increaseValue(activations, setActivations)} />
      </View>

      <CustomButton title="Calculate" onPress={handleCalculate} style={customStyles.confirmButtonStyle} />

      {textoResult !== '' && <Text style={styles.result}>{textoResult}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    label: {
      flex: 1,
      marginRight: 50, // Increase the marginRight for more space between label and input
      fontSize: 16,
    },
    input: {
      flex: 1, // Set flex to 1 to make input fields take up more space
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
    },
    result: {
      marginTop: 20,
      fontSize: 18,
    },
  });

export default EngenhocaCDCalculator;
