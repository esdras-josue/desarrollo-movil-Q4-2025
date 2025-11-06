import { View, Text, Touchable, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { JuegoContexto } from '../contexto/JuegoContexto'

export default function Tablero() {
    const { cartas, jugar, voltearCarta } = useContext(JuegoContexto);    

  return (
    <View style={styles.container}>
      {cartas.length === 0 ? (
        <TouchableOpacity style={styles.boton} onPress={jugar}>
            <Text style={styles.textoBoton}>Iniciar Juego</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.tablero}>
            {cartas.map((carta) =>(
                <TouchableOpacity key={carta.id} onPress={() => voltearCarta(carta.id)}>
                    <Text>{carta.id ? carta.valor : "?"}</Text>
                </TouchableOpacity>
            ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 20 },
  tablero: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 220,
    justifyContent: "center",
  },
  carta: {
    width: 50,
    height: 50,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  boton: {
    backgroundColor: "#4a90e2",
    padding: 10,
    borderRadius: 8,
  },
  textoBoton: { color: "#fff", fontWeight: "bold" },
});
