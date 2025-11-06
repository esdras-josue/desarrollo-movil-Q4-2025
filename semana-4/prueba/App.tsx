import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import JuegoProvider from './provider/JuegoProvider';
import Tablero from './componentes/Tablero';

export default function App() {
  return (
    <JuegoProvider>
      <View style={styles.container}>
        <Tablero></Tablero>
      </View>
    </JuegoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
