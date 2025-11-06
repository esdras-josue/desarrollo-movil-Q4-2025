import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useTask from '../hooks/useTask';
import { Task } from '../models/Task';

export const TaskTable = () => {
  const { task, updateStatus, deleteTask } = useTask();

  return (
    <View style={styles.container}>
      <FlatList
        data={task}
        keyExtractor={(item: Task) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.id}</Text>
            <Text style={styles.cell}>{item.title}</Text>
            <Text style={styles.cell}>{item.description}</Text>
            <Picker
              selectedValue={item.status}
              style={styles.picker}
              onValueChange={(value:any) => updateStatus(item.id, value as typeof item.status)}
            >
              <Picker.Item label="Pendiente" value="Pendiente" />
              <Picker.Item label="En Proceso" value="En Proceso" />
              <Picker.Item label="Completada" value="Completada" />
            </Picker>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(item.id)}>
              <Text style={styles.deleteText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  cell: { flex: 1, paddingHorizontal: 5 },
  picker: { flex: 1, height: 40 },
  deleteButton: { backgroundColor: 'red', padding: 8, borderRadius: 5 },
  deleteText: { color: 'white', fontWeight: 'bold' },
});
