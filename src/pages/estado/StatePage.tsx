import { useState } from "react";
import { Search, Award, Medal, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for exceptional students
const exceptionalStudents = [
  { 
    id: 1, 
    name: "Lucia", 
    lastName: "Huamán", 
    classroom: "3° Primaria", 
    achievement: "Excelencia Académica", 
    level: "Cinta Negra",
    description: "Destacado desempeño en matemáticas y comunicación"
  },
  { 
    id: 2, 
    name: "Carlos", 
    lastName: "Quispe", 
    classroom: "1° Primaria", 
    achievement: "Mejor Proyecto de Ciencias", 
    level: "Cinta Azul",
    description: "Proyecto innovador sobre plantas medicinales locales"
  },
  { 
    id: 3, 
    name: "María", 
    lastName: "Torres", 
    classroom: "2° Primaria", 
    achievement: "Liderazgo Comunitario", 
    level: "Cinta Verde",
    description: "Iniciativa para limpiar áreas comunes de la comunidad"
  },
  { 
    id: 4, 
    name: "Juan", 
    lastName: "Mamani", 
    classroom: "4° Primaria", 
    achievement: "Innovación Tecnológica", 
    level: "Cinta Negra",
    description: "Diseño de sistema de riego utilizando materiales reciclados"
  }
];

// Mock data for scholarships and opportunities
const opportunities = [
  {
    id: 1,
    title: "Beca Bicentenario",
    organization: "PRONABEC",
    deadline: "30 de Septiembre, 2025",
    description: "Becas para estudiantes de alto rendimiento de zonas rurales"
  },
  {
    id: 2,
    title: "Concurso Nacional de Innovación",
    organization: "Ministerio de Educación",
    deadline: "15 de Octubre, 2025",
    description: "Competencia para proyectos innovadores de estudiantes"
  },
  {
    id: 3,
    title: "Programa Talentos Rurales",
    organization: "Fundación Educativa Perú",
    deadline: "5 de Noviembre, 2025",
    description: "Programa de mentoría para estudiantes destacados"
  }
];

// Badge color mapper based on level
const getLevelBadgeClass = (level: string) => {
  switch (level) {
    case "Cinta Blanca":
      return "bg-gray-100 text-gray-800 border-gray-200";
    case "Cinta Amarilla":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Cinta Verde":
      return "bg-green-100 text-green-800 border-green-200";
    case "Cinta Azul":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "Cinta Negra":
      return "bg-purple-100 text-purple-800 border-purple-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const StatePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredStudents = exceptionalStudents.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.achievement.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reconocimientos del Estado</h1>
          <p className="text-muted-foreground">
            Oportunidades y reconocimientos para estudiantes destacados
          </p>
        </div>
      </div>

      <Tabs defaultValue="exceptional" className="w-full">
        <TabsList>
          <TabsTrigger value="exceptional">Estudiantes Destacados</TabsTrigger>
          <TabsTrigger value="opportunities">Becas y Oportunidades</TabsTrigger>
        </TabsList>

        <TabsContent value="exceptional">
          <div className="space-y-4">
            <div className="flex max-w-sm items-center space-x-2">
              <Input
                placeholder="Buscar estudiantes destacados..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button type="submit" size="icon" variant="ghost">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {filteredStudents.map((student) => (
                <Card key={student.id} className="peru-card">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">
                        {student.name} {student.lastName}
                      </CardTitle>
                      <span className={`student-badge ${getLevelBadgeClass(student.level)}`}>
                        {student.level}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {student.classroom}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-2">
                      <Trophy className="mr-2 h-5 w-5 text-primary" />
                      <span className="font-medium">{student.achievement}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {student.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Button variant="outline" size="sm">Ver Perfil</Button>
                    <Button variant="outline" size="sm">Nominar para Beca</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="opportunities">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {opportunities.map((opportunity) => (
                <Card key={opportunity.id} className="peru-card flex flex-col">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {opportunity.organization}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground mb-2">
                      {opportunity.description}
                    </p>
                    <div className="flex items-center text-sm">
                      <Award className="mr-2 h-4 w-4 text-primary" />
                      <span>Fecha límite: {opportunity.deadline}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" className="w-full">
                      Ver Detalles
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="rounded-md border p-6 text-center">
              <div className="flex justify-center mb-4">
                <Medal className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Guía de Niveles de Reconocimiento</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                El sistema de cintas reconoce diferentes niveles de logro académico y contribución comunitaria de los estudiantes. 
                Cada nivel representa un paso más en su desarrollo integral.
              </p>
              
              <div className="grid gap-4 md:grid-cols-5 max-w-3xl mx-auto">
                <div className="flex flex-col items-center">
                  <span className="student-badge bg-gray-100 text-gray-800 border-gray-200 mb-2">Cinta Blanca</span>
                  <span className="text-xs text-muted-foreground">Nivel inicial</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="student-badge bg-yellow-100 text-yellow-800 border-yellow-200 mb-2">Cinta Amarilla</span>
                  <span className="text-xs text-muted-foreground">Progresando</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="student-badge bg-green-100 text-green-800 border-green-200 mb-2">Cinta Verde</span>
                  <span className="text-xs text-muted-foreground">Desarrollando</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="student-badge bg-blue-100 text-blue-800 border-blue-200 mb-2">Cinta Azul</span>
                  <span className="text-xs text-muted-foreground">Avanzado</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="student-badge bg-purple-100 text-purple-800 border-purple-200 mb-2">Cinta Negra</span>
                  <span className="text-xs text-muted-foreground">Excelencia</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StatePage;