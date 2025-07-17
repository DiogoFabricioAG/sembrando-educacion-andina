import { useState } from "react";
import { PlusCircle, FileText, FileOutput, Search, GraduationCap, Award, Book } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GradeModal } from "@/components/classroom/GradeModal";
import { ClassroomChatbot } from "@/components/classroom/ClassroomChatbot";
import { StudentGradesTable } from "@/components/classroom/StudentGradesTable";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

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

// Mock grades data
const studentGrades = [
  { id: 1, studentId: 1, name: "Ana", lastName: "Vargas", mathGrade: 85, languageGrade: 90, scienceGrade: 78, artGrade: 95, averageGrade: 87, level: "Básico", classroom: 1 },
  { id: 2, studentId: 2, name: "Carlos", lastName: "Quispe", mathGrade: 92, languageGrade: 88, scienceGrade: 91, artGrade: 84, averageGrade: 89, level: "Intermedio", classroom: 1 },
  { id: 3, studentId: 3, name: "María", lastName: "Torres", mathGrade: 96, languageGrade: 94, scienceGrade: 95, artGrade: 92, averageGrade: 94, level: "Avanzado", classroom: 2 },
  { id: 4, studentId: 4, name: "Juan", lastName: "Mamani", mathGrade: 75, languageGrade: 72, scienceGrade: 68, artGrade: 80, averageGrade: 74, level: "Básico", classroom: 2 },
  { id: 5, studentId: 5, name: "Pedro", lastName: "Flores", mathGrade: 88, languageGrade: 82, scienceGrade: 86, artGrade: 79, averageGrade: 84, level: "Intermedio", classroom: 3 },
  { id: 6, studentId: 6, name: "Lucia", lastName: "Huaman", mathGrade: 94, languageGrade: 97, scienceGrade: 91, artGrade: 96, averageGrade: 95, level: "Avanzado", classroom: 3 },
  { id: 7, studentId: 7, name: "Roberto", lastName: "Ríos", mathGrade: 71, languageGrade: 68, scienceGrade: 75, artGrade: 82, averageGrade: 74, level: "Básico", classroom: 4 },
  { id: 8, studentId: 8, name: "Sonia", lastName: "Salazar", mathGrade: 83, languageGrade: 85, scienceGrade: 80, artGrade: 88, averageGrade: 84, level: "Intermedio", classroom: 4 }
];

const ClassroomsPage = () => {
  const [selectedClassroom, setSelectedClassroom] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<{ id: number; name: string; lastName: string } | null>(null);
  const [activeTab, setActiveTab] = useState("list");

  const filteredStudents = selectedClassroom
    ? students.filter(student => 
        student.classroom === selectedClassroom && 
        (student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
         student.lastName.toLowerCase().includes(searchTerm.toLowerCase())))
    : [];

  const filteredGrades = selectedClassroom
    ? studentGrades.filter(student => student.classroom === selectedClassroom)
    : [];

  const handleOpenGradeModal = (student: { id: number; name: string; lastName: string }) => {
    setSelectedStudent(student);
    setIsGradeModalOpen(true);
  };

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

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList>
              <TabsTrigger value="list">Lista de Estudiantes</TabsTrigger>
              <TabsTrigger value="grades">Calificaciones</TabsTrigger>
              <TabsTrigger value="sessions">Sesiones de Aula</TabsTrigger>
            </TabsList>
            
            {/* Lista de Estudiantes Tab */}
            <TabsContent value="list">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>NOMBRES</TableHead>
                      <TableHead>APELLIDOS</TableHead>
                      <TableHead>NIVEL</TableHead>
                      <TableHead>ACCIONES</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStudents.length > 0 ? (
                      filteredStudents.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell>{student.name}</TableCell>
                          <TableCell>{student.lastName}</TableCell>
                          <TableCell>
                            <span className={`
                              student-badge 
                              ${student.level === "Básico" ? "student-badge-beginner" : 
                                student.level === "Intermedio" ? "student-badge-intermediate" : 
                                "student-badge-advanced"}
                            `}>
                              {student.level}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">EDITAR</Button>
                              <Button variant="outline" size="sm">ELIMINAR</Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleOpenGradeModal(student)}
                              >
                                CALIFICAR
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                          No hay estudiantes para mostrar
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            {/* Calificaciones Tab */}
            <TabsContent value="grades">
              <StudentGradesTable 
                students={filteredGrades} 
                classroom={selectedClassroom} 
              />
            </TabsContent>
            
            {/* Sesiones de Aula Tab */}
            <TabsContent value="sessions">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium">Sesiones de Clase - {classrooms.find(c => c.id === selectedClassroom)?.name}</h3>
                  <Button variant="outline">
                    <Book className="h-4 w-4 mr-2" />
                    Historial de Sesiones
                  </Button>
                </div>
                
                <ClassroomChatbot 
                  classroomName={classrooms.find(c => c.id === selectedClassroom)?.name || ""} 
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}

      {/* Grade Modal */}
      {selectedStudent && (
        <GradeModal 
          open={isGradeModalOpen} 
          onOpenChange={setIsGradeModalOpen}
          studentName={selectedStudent.name}
          studentLastName={selectedStudent.lastName}
        />
      )}
    </div>
  );
};

export default ClassroomsPage;