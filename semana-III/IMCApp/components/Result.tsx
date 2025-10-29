import React from "react";
import {View, Text, StyleSheet } from "react-native";

interface ResultProps {
    imc: number;
    categoria: string;
}

export default function Result({ imc, categoria}: ResultProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>IMC: {imc.toFixed(2)}</Text>
      <Text style={styles.text}>Clasificación: {categoria} {imc.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { marginTop: 20, alignItems: "center" },
  text: { fontSize: 18, fontWeight: "500" },
});