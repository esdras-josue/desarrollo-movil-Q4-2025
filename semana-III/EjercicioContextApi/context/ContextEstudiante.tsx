import { createContext } from "react";
import { ContextEstudiantesProps} from "../models/ContextEstudiantesProps";
import { Estudiante } from '../models/Estudiante';

export const ContextEstudiante = createContext<ContextEstudiantesProps>({
    estudiantes: [] as Estudiante[],
    agregarEstudiante: ()=>{},
});



