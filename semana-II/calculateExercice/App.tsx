import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { calculateExercice } from './CalculateExecercice';


export default function App() {

  const dailyHours: number[] = [1.5,2,0,1,0,1,0]; // entrenar 7 dias a la semana
  const target: number = 2; // horas de enteno diarias

  const result = calculateExercice(dailyHours, target);
  console.log(result);

  return (
    <View style={styles.container}>
      <Text>Calculate Exercice</Text>
      <Text>Dias en la semana: {result.periodLength}</Text>
      <Text>Dias de entreno: {result.trainingDays}</Text>
      <Text>Promedio diario: {result.average.toFixed(2)}</Text>
      <Text>Calificación: {result.rating}</Text>
      <Text>{result.ratingDescription}</Text>
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
