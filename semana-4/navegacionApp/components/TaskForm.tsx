import React, { useState } from 'react';
import useTask from "../hooks/useTask";
import { View, Text, TextInput, Button } from 'react-native';

export const TaskForm = () => {
  const { addTask } = useTask();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;
    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <View style={{ marginBottom: 16 }}>
      <Text>Agregar Tarea</Text>
      <TextInput
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Agregar" onPress={handleSubmit} />
    </View>
  );
};