import { createContext } from "react";
import { Carta } from "../modelos/Carta";

export const JuegoContexto = createContext({
    cartas: [] as Carta[],
    partidas: [] as number[],
    jugar: () => {},
    voltearCarta: (id: number) => {}
});