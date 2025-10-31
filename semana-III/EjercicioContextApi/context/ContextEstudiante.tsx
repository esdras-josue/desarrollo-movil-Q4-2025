import { createContext } from "react";
import { ContextEstudiantesProps} from "../models/ContextEstudiantesProps";

export const ContextEstudiante = createContext<ContextEstudiantesProps>({
    estudiantes: [],
    agregarEstudiante: ()=>{},
});



