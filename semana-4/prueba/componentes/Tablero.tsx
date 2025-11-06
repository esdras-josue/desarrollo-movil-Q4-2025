import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { JuegoContexto } from '../contexto/JuegoContexto'

export default function Tablero() {
    const { cartas, jugar, voltearCarta } = useContext(JuegoContexto);    

  return (
    <View>
      {cartas.length === 0 ? (
        <TouchableOpacity onPress={jugar}>
            <Text>Iniciar Juego</Text>
        </TouchableOpacity>
      ) : (
        <View>
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
