import { Estudiante } from "./Estudiante";

export interface ContextEstudiantesProps {
    estudiantes: Estudiante[];
    agregarEstudiante: (name: string) => void;
}