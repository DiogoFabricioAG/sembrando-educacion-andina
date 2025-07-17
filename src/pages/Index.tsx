import { useState } from "react";
import { 
  BookOpen, 
  Users, 
  Building2, 
  PenLine, 
  Calendar, 
  FileText,
  ChevronRight,
  Lightbulb,
  BookCopy,
  Trophy,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [userName] = useState("Juan Pérez");

  // Mock data
  const recentActivities = [
    { id: 1, type: "class", description: "Sesión de matemáticas creada", time: "Hace 2 horas" },
    { id: 2, type: "grade", description: "Calificaciones actualizadas (2° Primaria)", time: "Hace 3 horas" },
    { id: 3, type: "student", description: "Nuevo estudiante añadido", time: "Hace 1 día" }
  ];

  const upcomingTasks = [
    { id: 1, title: "Calificar tareas de 3° Primaria", due: "Hoy" },
    { id: 2, title: "Preparar sesión de Comunicación", due: "Mañana" },
    { id: 3, title: "Reunión con padres de familia", due: "En 3 días" }
  ];

  const quickAccessCards = [
    { 
      title: "Salones", 
      description: "Gestiona tus salones y estudiantes", 
      icon: BookOpen, 
      action: () => navigate("/salones"),
      color: "text-blue-500"
    },
    { 
      title: "Comunidad", 
      description: "Conecta con otros docentes", 
      icon: Users, 
      action: () => navigate("/comunidad"),
      color: "text-green-500"
    },
    { 
      title: "Estado", 
      description: "Oportunidades y reconocimientos", 
      icon: Building2, 
      action: () => navigate("/estado"),
      color: "text-purple-500"
    }
  ];

  const resourceCards = [
    { 
      title: "Plan de Lección", 
      description: "Crea un plan con IA", 
      icon: BookCopy, 
      color: "text-amber-500"
    },
    { 
      title: "Actividad Interactiva", 
      description: "Genera ejercicios", 
      icon: Lightbulb, 
      color: "text-emerald-500"
    },
    { 
      title: "Evaluaciones", 
      description: "Crea evaluaciones", 
      icon: FileText, 
      color: "text-rose-500"
    }
  ];

  const achievementCards = [
    { id: 1, name: "Lucia Huamán", achievement: "Excelencia Académica", level: "Cinta Negra" },
    { id: 2, name: "Carlos Quispe", achievement: "Mejor Proyecto", level: "Cinta Azul" },
  ];

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-xl bg-accent mb-6">
        <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
                ¡Bienvenido, {userName}!
              </h1>
              <p className="text-white/90 max-w-lg">
                EduRural te apoya en tu labor docente. Gestiona tus clases, conecta con otros docentes y accede a recursos educativos personalizados para tus estudiantes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => navigate("/salones")} className="bg-white text-accent hover:bg-white/90">
                Gestionar Salones
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Explorar Recursos
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-[280px] flex-shrink-0">
            <img 
              src={heroImage} 
              alt="Docentes en zonas rurales" 
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/70" style={{ mixBlendMode: "multiply" }}></div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Acceso Rápido</h2>
        <p className="text-muted-foreground">
          Gestiona tus salones y mejora la experiencia educativa de tus estudiantes
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quickAccessCards.map((card, i) => (
          <Card key={i} className="peru-card cursor-pointer" onClick={card.action}>
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <card.icon className={`h-5 w-5 mr-2 ${card.color}`} />
                <CardTitle className="text-xl">{card.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="ml-auto" onClick={card.action}>
                Acceder <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              Próximas Tareas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-muted-foreground">Vence: {task.due}</p>
                  </div>
                  <Button variant="outline" size="sm">Completar</Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="ml-auto">
              Ver todas las tareas <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PenLine className="mr-2 h-5 w-5 text-primary" />
              Actividad Reciente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex border-b pb-2">
                  <div className="mr-4">
                    {activity.type === "class" && <BookOpen className="h-5 w-5 text-blue-500" />}
                    {activity.type === "grade" && <FileText className="h-5 w-5 text-amber-500" />}
                    {activity.type === "student" && <Users className="h-5 w-5 text-green-500" />}
                  </div>
                  <div>
                    <p className="font-medium">{activity.description}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="ml-auto">
              Ver todo el historial <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="resources" className="w-full">
        <TabsList>
          <TabsTrigger value="resources">Recursos Educativos</TabsTrigger>
          <TabsTrigger value="achievements">Logros Destacados</TabsTrigger>
        </TabsList>
        <TabsContent value="resources">
          <div className="grid gap-6 md:grid-cols-3">
            {resourceCards.map((card, i) => (
              <Card key={i} className="peru-card cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <card.icon className={`h-5 w-5 mr-2 ${card.color}`} />
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{card.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Crear Ahora
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="achievements">
          <div className="grid gap-6 md:grid-cols-2">
            {achievementCards.map((student) => (
              <Card key={student.id} className="peru-card flex items-center p-4">
                <Trophy className="h-10 w-10 text-primary mr-4" />
                <div className="flex-1">
                  <h3 className="font-medium">{student.name}</h3>
                  <p className="text-sm text-muted-foreground">{student.achievement}</p>
                </div>
                <div>
                  <span className="student-badge student-badge-expert">{student.level}</span>
                </div>
              </Card>
            ))}
            <Card className="peru-card flex flex-col items-center justify-center p-6 border-dashed">
              <p className="text-muted-foreground mb-2">Ver más estudiantes destacados</p>
              <Button variant="outline" onClick={() => navigate("/estado")}>
                Ir a Reconocimientos
              </Button>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
