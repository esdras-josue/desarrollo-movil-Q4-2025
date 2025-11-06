import React, { useState } from 'react'
import { PlantillaReact } from '../modelos/PlantillaReact'
import { Carta } from '../modelos/Carta';
import { JuegoContexto } from '../contexto/JuegoContexto';

export default function JuegoProvider({children}: PlantillaReact) {
    const [cartas, setCartas ] = useState<Carta[]>([]);
    const [seleccionadas, setSeleccionadas] = useState<number[]>([]);
    const [partidas, setPartidas ] = useState<number[]>([]);
    const [jugada, setJugada] = useState(0);

    const cartasIniciales: Carta[] = [
        {id: 1, valor: "A", descubierta: false},
        {id: 2, valor: "B", descubierta: false},
        {id: 3, valor: "C", descubierta: false},
        {id: 4, valor: "D", descubierta: false},
        {id: 5, valor: "A", descubierta: false},
        {id: 6, valor: "B", descubierta: false},
        {id: 7, valor: "C", descubierta: false},
        {id: 8, valor: "D", descubierta: false},
    ];

    function jugar(){
        setCartas(cartasIniciales);
        setSeleccionadas([]);
        setJugada(jugada + 1);
    };

    function voltearCarta(id: number) {
        const nuevasCartas = cartas.map((carta) => 
            carta.id === id ? {...carta, descubierta: true} : carta
        );
        setCartas(nuevasCartas);

        const nuevasSelecciodas = [...seleccionadas, id];
        setSeleccionadas(nuevasSelecciodas);

        if (nuevasSelecciodas.length === 2) {
            const primera = nuevasCartas.find(
                (c) => c.id === nuevasSelecciodas[0]
            );
            const segunda = nuevasCartas.find(
                (c) => c.id === nuevasSelecciodas[0]
            );

            if( !primera || !segunda) {
                console.warn("Carta no encontrada");
                setSeleccionadas([]);
                return;
            }

            if(primera.valor === segunda.valor) {
                alert("Encontraste un par!");
            }else{
                alert("No son iguales, fin del juego!");
                setPartidas([...partidas, jugada]);
                setCartas(cartasIniciales);
            }

            setSeleccionadas([]);
        }
    }

  return (
    <JuegoContexto.Provider value={{ cartas, partidas, jugar, voltearCarta}}>
        {children}
    </JuegoContexto.Provider>
  );
}
