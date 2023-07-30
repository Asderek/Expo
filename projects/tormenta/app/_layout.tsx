import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';

export default function RootLayout() {
  const route = useRouter();

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <View style={{ marginTop: 30 }} >
      </View>
      <Slot />
      <Button title="Página inicial" onPress={() => route.replace("/") } />
    </SafeAreaProvider>
  );
}