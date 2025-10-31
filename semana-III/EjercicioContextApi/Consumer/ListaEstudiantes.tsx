import  React, { useState } from "react";
import { View, Text, Button, FlatList, TextInput } from "react-native";
import { useEstudiantes } from "../Provider/EstudianteProvider";
import { styles } from "../styles";

export default function ListaEstudiantes() {
    const { estudiantes, agregarEstudiante } = useEstudiantes();
    const [nombre, setNombre] = useState("");

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Lista de Estudiantes</Text>

      <FlatList 
      data={estudiantes}
      keyExtractor={(item) => item.id}
      renderItem={({ item}) => <Text>{item.name}</Text>}
      />

      <TextInput
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre del estudiante"

       />

      <Button title="Agregar estudiante" onPress={() => { agregarEstudiante(nombre), setNombre("") }} />
    </View>
  );
}