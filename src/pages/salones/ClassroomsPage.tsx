import { useState } from "react";
import { PlusCircle, FileText, FileOutput, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for initial development
const classrooms = [
  { id: 1, name: "1° Primaria", studentCount: 15 },
  { id: 2, name: "2° Primaria", studentCount: 12 },
  { id: 3, name: "3° Primaria", studentCount: 18 },
  { id: 4, name: "4° Primaria", studentCount: 10 }
];

// Mock students data
const students = [
  { id: 1, name: "Ana", lastName: "Vargas", level: "Básico", classroom: 1 },
  { id: 2, name: "Carlos", lastName: "Quispe", level: "Intermedio", classroom: 1 },
  { id: 3, name: "María", lastName: "Torres", level: "Avanzado", classroom: 2 },
  { id: 4, name: "Juan", lastName: "Mamani", level: "Básico", classroom: 2 },
  { id: 5, name: "Pedro", lastName: "Flores", level: "Intermedio", classroom: 3 },
  { id: 6, name: "Lucia", lastName: "Huaman", level: "Avanzado", classroom: 3 },
  { id: 7, name: "Roberto", lastName: "Ríos", level: "Básico", classroom: 4 },
  { id: 8, name: "Sonia", lastName: "Salazar", level: "Intermedio", classroom: 4 }
];

const ClassroomsPage = () => {
  const [selectedClassroom, setSelectedClassroom] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = selectedClassroom
    ? students.filter(student => 
        student.classroom === selectedClassroom && 
        (student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
         student.lastName.toLowerCase().includes(searchTerm.toLowerCase())))
    : [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Salones de Clase</h1>
          <p className="text-muted-foreground">
            Gestiona tus salones y el avance de tus estudiantes
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Crear Salón
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {classrooms.map((classroom) => (
          <Card 
            key={classroom.id}
            className="peru-card cursor-pointer transition-colors hover:border-primary"
            onClick={() => setSelectedClassroom(classroom.id)}
          >
            <CardHeader className="pb-2">
              <CardTitle>{classroom.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {classroom.studentCount} estudiantes
              </p>
            </CardContent>
            <CardFooter className="pt-1">
              <p className="text-xs text-muted-foreground">
                {selectedClassroom === classroom.id 
                  ? "Seleccionado" 
                  : "Haz clic para ver detalles"}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedClassroom && (
        <div className="mt-8 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">
              Estudiantes - {classrooms.find(c => c.id === selectedClassroom)?.name}
            </h2>
            <div className="flex space-x-2">
              <Button variant="outline">
                <FileOutput className="mr-2 h-4 w-4" />
                Exportar Formato Excel
              </Button>
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Importar Excel
              </Button>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Agregar
              </Button>
            </div>
          </div>

          <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
            <Input
              placeholder="Buscar estudiante..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[300px]"
            />
            <Button type="submit" size="icon" variant="ghost">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="list" className="w-full">
            <TabsList>
              <TabsTrigger value="list">Lista de Estudiantes</TabsTrigger>
              <TabsTrigger value="sessions">Sesiones de Aula</TabsTrigger>
            </TabsList>
            <TabsContent value="list">
              <div className="rounded-md border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-left">
                      <th className="p-2 pl-4 font-medium">NOMBRES</th>
                      <th className="p-2 font-medium">APELLIDOS</th>
                      <th className="p-2 font-medium">NIVEL</th>
                      <th className="p-2 font-medium">ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.length > 0 ? (
                      filteredStudents.map((student) => (
                        <tr key={student.id} className="border-t hover:bg-muted/50">
                          <td className="p-2 pl-4">{student.name}</td>
                          <td className="p-2">{student.lastName}</td>
                          <td className="p-2">
                            <span className={`
                              student-badge 
                              ${student.level === "Básico" ? "student-badge-beginner" : 
                                student.level === "Intermedio" ? "student-badge-intermediate" : 
                                "student-badge-advanced"}
                            `}>
                              {student.level}
                            </span>
                          </td>
                          <td className="p-2">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">EDITAR</Button>
                              <Button variant="outline" size="sm">ELIMINAR</Button>
                              <Button variant="outline" size="sm">CAL</Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="p-8 text-center text-muted-foreground">
                          No hay estudiantes para mostrar
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="sessions">
              <div className="rounded-md border p-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-medium">Sesiones de Aula</h3>
                  <p className="text-muted-foreground">
                    Gestiona las sesiones de clase para este salón
                  </p>
                  <Button>Ver Sesiones</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default ClassroomsPage;