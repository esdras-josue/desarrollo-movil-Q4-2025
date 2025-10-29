import { useEffect, useState } from 'react';
import { StyleSheet, Text, Button ,View } from 'react-native';
import Result from "./components/Result";

export default function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const [imc, setImc] = useState(0);
  const [categoria, setCategoria] = useState("");

  useEffect(() =>{
    const nuevoImc = (peso / (altura * altura));
    setImc(nuevoImc);
    if (nuevoImc < 18.5) setCategoria("Bajo peso");
    else if (nuevoImc < 25) setCategoria("Peso normal");
    else if (nuevoImc < 30) setCategoria("sobre peso");
    else setCategoria("obesidad");
    
  }, [peso, altura]);

  return (
    <View style={styles.container}>
      <Text>Calculadora de IMC!</Text>
      <Text>Peso: {peso} kg</Text>
      <View style = {styles.row}>
        <Button title="-" onPress={() => setPeso(peso - 1)} />
        <Button title="+" onPress={() => setPeso(peso + 1)} />
      </View>

      <Text>Altura: {altura.toFixed(2)} m</Text>
      <View style={styles.row}>
        <Button title="-" onPress={() => setAltura(altura - 0.01)} />
        <Button title="+" onPress={() => setAltura(altura + 0.01)} />
      </View>

      <Result imc={imc} categoria={categoria} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  row: { flexDirection: "row", gap: 10, marginVertical: 5 },
  title: { fontSize: 20, marginBottom: 20, fontWeight: "bold" },
});
