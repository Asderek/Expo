import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import BardMain from './Bard/BardMain';
import InventorMain from './Inventor/InventorMain';
import EngenhocaCDCalculator from './Inventor/EngenhocaCDCalculator';
// Import other character class screens here...

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Tormenta Companion' }} />
        <Stack.Screen name="BardMain" component={BardMain} options={{ title: 'Bard Funcitons' }} />
        <Stack.Screen name="InventorMain" component={InventorMain} options={{ title: 'Inventor Functions' }} />
        <Stack.Screen name="EngenhocaCDCalculator" component={EngenhocaCDCalculator} options={{ title: 'CD da Ativação de Engenhoca' }} />
        {/* Add other character class screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
