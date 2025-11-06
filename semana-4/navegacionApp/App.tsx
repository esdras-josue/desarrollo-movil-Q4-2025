import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TaskProvider } from './context/TaskProvider';
import { TaskForm } from './components/TaskForm';
import { TaskTable } from './components/TaskTable';

export default function App() {
  return (
    <View style={styles.container}>
      <TaskProvider>
      <Text>Gestor de Tareas</Text>
        <TaskForm></TaskForm>
        <TaskTable></TaskTable>
      <StatusBar style="auto" />
      </TaskProvider>
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
