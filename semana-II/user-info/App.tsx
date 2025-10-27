import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserInfoComponent from './components/UserInfoComponent';

export default function App() {

  const user = {
    nombre: 'Esdras Josue Penna',
    edad: 25,
    ciudad: 'San Marcos',
    ocupacion: 'Desarrollador'
  }

  return (
    <View style={styles.container}>
      <Text>User Profile</Text>
      <UserInfoComponent 
        nombre={user.nombre}
        edad={user.edad}
        ciudad={user.ciudad}
        ocupacion={user.ocupacion}
      />

      <StatusBar style="auto" />
    </View>
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
