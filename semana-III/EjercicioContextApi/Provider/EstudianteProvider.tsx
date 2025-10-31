import { ReactNode, useState, useContext, useEffect } from "react";
import { Estudiante } from "../models/Estudiante";
import { ContextEstudiante } from "../context/ContextEstudiante";

interface plantillaReact {
  children: ReactNode;
}

export default function EstudianteProvider({ children }: plantillaReact) {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
    { id: "1", name: "Kevin" },
    { id: "2", name: "Maria" },
    { id: "3", name: "Esdras" },
    { id: "4", name: "Josue" },
    { id: "5", name: "Roberto" },
    { id: "6", name: "Daniel" },
    { id: "7", name: "Esther" },
    { id: "8", name: "Lif" },
    { id: "9", name: "AlbaLuz" },
    { id: "10", name: "Luciano" },
  ]);

  const agregarEstudiante = (name: string) => {
    const nuevo = { id: Date.now().toString(), name };
    setEstudiantes([...estudiantes, nuevo]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setEstudiantes((prev) => [
        ...prev,
        { id: Date.now().toString(), name: "Isaac" },
        { id: (Date.now() + 1).toString(), name: "Pedro" },
      ]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ContextEstudiante.Provider value={{ estudiantes, agregarEstudiante }}>
        {children}
    </ContextEstudiante.Provider>
  );
}

export const useEstudiantes = () => useContext(ContextEstudiante);
