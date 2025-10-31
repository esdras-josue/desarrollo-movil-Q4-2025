import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EstudianteProvider from './Provider/EstudianteProvider';
import ListaEstudiantes from './Consumer/ListaEstudiantes';

export default function App() {
  return (
    <EstudianteProvider>
      <View style={{ flex: 1, marginTop: 40}}>
        <ListaEstudiantes />
      </View>
    </EstudianteProvider>
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
