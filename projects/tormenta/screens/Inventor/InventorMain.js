import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

const inventorFunctionalities = [
  { id: '1', title: 'Calculadora de CD de Ativação de Engenhoca' },
  { id: '2', title: 'Character Lv Up Information' },
  { id: '3', title: 'Max Health Calculator' },
  // Add more functionalities here...
];

const InventorMain = () => {
  
  const router = useRouter();

  const handleFunctionalityPress = (functionality) => {
    // Implement the navigation to the corresponding functionality screen here
    // For example, use functionality.id or functionality.title to determine which screen to navigate to.

    // Placeholder navigation, replace this with actual navigation code
    if (functionality.id === '1') {
      // Navigate to Contraption Activation Difficulty Calculator screen
      router.replace('/EngenhocaCDCalculator');
    } else if (functionality.id === '2') {
      // Navigate to Character Lv Up Information screen
      router.replace('/CharacterLvUpInfo');
    } else if (functionality.id === '3') {
      // Navigate to Max Health Calculator screen
      router.replace('/MaxHealthCalculator');
    } else {
      // Placeholder for other functionalities
      console.log(`Navigating to functionality: ${functionality.title}`);
    }
  };


  const renderFunctionalityItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handleFunctionalityPress(item)}>
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={inventorFunctionalities}
        renderItem={renderFunctionalityItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
  },
});

export default InventorMain;
