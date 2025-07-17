import { 
  HelpCircle, 
  BookOpen, 
  FileQuestion, 
  Video, 
  MessageCircle, 
  Mail 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const HelpPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Centro de Ayuda</h1>
        <p className="text-muted-foreground">
          Encuentra respuestas a tus preguntas y aprende a usar la plataforma
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="peru-card">
          <CardHeader>
            <BookOpen className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Guías y Tutoriales</CardTitle>
            <CardDescription>
              Guías paso a paso para usar todas las funciones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Ver guías</Button>
          </CardContent>
        </Card>

        <Card className="peru-card">
          <CardHeader>
            <Video className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Videos Instructivos</CardTitle>
            <CardDescription>
              Aprende visualmente con nuestros videos tutoriales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Ver videos</Button>
          </CardContent>
        </Card>

        <Card className="peru-card">
          <CardHeader>
            <MessageCircle className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Soporte Técnico</CardTitle>
            <CardDescription>
              Contacta con nuestro equipo de soporte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Contactar soporte</Button>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-md border p-6">
        <h2 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              ¿Cómo puedo crear un nuevo salón de clases?
            </AccordionTrigger>
            <AccordionContent>
              Para crear un nuevo salón de clases, ve a la sección "Salones" y haz clic en el botón "Crear Salón". 
              Completa la información requerida y haz clic en "Guardar". Tu nuevo salón aparecerá en la lista.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              ¿Cómo puedo registrar calificaciones para mis estudiantes?
            </AccordionTrigger>
            <AccordionContent>
              Selecciona el salón de clases, encuentra al estudiante en la lista y haz clic en el botón "CAL" 
              junto a su nombre. Se abrirá una ventana donde podrás registrar diferentes tipos de evaluaciones 
              y calificaciones.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              ¿Cómo funciona la generación de tareas personalizadas?
            </AccordionTrigger>
            <AccordionContent>
              El sistema analiza el rendimiento de cada estudiante basado en las tareas previamente cargadas. 
              Para generar tareas personalizadas, ve al perfil del estudiante y selecciona "Generar tarea personalizada". 
              El sistema creará ejercicios adaptados a las necesidades específicas del estudiante.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              ¿Cómo puedo subir una tarea completada por un estudiante?
            </AccordionTrigger>
            <AccordionContent>
              En el perfil del estudiante, selecciona "Subir tarea". Puedes tomar una foto o cargar un archivo 
              PDF de la tarea completada. El sistema analizará la tarea y registrará el progreso del estudiante.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              ¿Cómo puedo postular a un estudiante para reconocimiento estatal?
            </AccordionTrigger>
            <AccordionContent>
              Ve a la sección "Estado", luego a "Estudiantes Destacados". Haz clic en "Nominar para Beca" 
              junto al estudiante que deseas postular. Completa el formulario con los logros y cualidades 
              destacadas del estudiante.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="rounded-md border p-6 text-center">
        <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2">¿No encuentras lo que buscas?</h2>
        <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
          Nuestro equipo está disponible para ayudarte con cualquier pregunta o problema que tengas.
        </p>
        <div className="flex justify-center space-x-4">
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Enviar correo
          </Button>
          <Button variant="outline">
            <FileQuestion className="mr-2 h-4 w-4" />
            Reportar problema
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;