import { useState } from "react";
import { CheckCircle, X, Upload, BookOpen, AlertCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GradeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  studentName: string;
  studentLastName: string;
}

// Mock assignments data
const assignments = [
  { id: 1, title: "Tarea de Matemáticas", date: "2023-10-15", status: "completado", score: 85, feedback: "Buen trabajo en ecuaciones. Necesita practicar fracciones." },
  { id: 2, title: "Tarea de Lenguaje", date: "2023-10-20", status: "pendiente" },
  { id: 3, title: "Tarea de Ciencias", date: "2023-10-25", status: "completado", score: 92, feedback: "Excelente comprensión de los ecosistemas." },
];

export function GradeModal({ open, onOpenChange, studentName, studentLastName }: GradeModalProps) {
  const [activeAssignment, setActiveAssignment] = useState<number | null>(null);
  const [score, setScore] = useState<number[]>([75]);
  const [feedback, setFeedback] = useState("");
  const [aiSuggestion, setAiSuggestion] = useState("");
  
  const handleAiAnalysis = () => {
    // Simulate AI analysis
    setTimeout(() => {
      setAiSuggestion(
        "Basado en el desempeño del estudiante, se recomienda enfocarse en ejercicios de fracciones y problemas de razonamiento matemático. El estudiante muestra fortalezas en comprensión lectora y ciencias naturales."
      );
    }, 1000);
  };

  const handleGradeSubmit = () => {
    // Here you would submit the grade and feedback
    console.log("Submitting grade:", score[0], "for assignment:", activeAssignment);
    console.log("Feedback:", feedback);
    
    // Reset and close
    setScore([75]);
    setFeedback("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Calificar Estudiante: {studentName} {studentLastName}</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="assignments" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="assignments">Tareas</TabsTrigger>
            <TabsTrigger value="grade">Calificar</TabsTrigger>
            <TabsTrigger value="ai">Análisis IA</TabsTrigger>
          </TabsList>
          
          {/* Assignments Tab */}
          <TabsContent value="assignments">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Lista de Tareas</h3>
                <Button size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Subir Nueva Tarea
                </Button>
              </div>
              
              <div className="space-y-2">
                {assignments.map((assignment) => (
                  <Card key={assignment.id} className="cursor-pointer hover:border-primary" onClick={() => setActiveAssignment(assignment.id)}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{assignment.title}</h4>
                          <p className="text-sm text-muted-foreground">Fecha: {assignment.date}</p>
                        </div>
                        <Badge variant={assignment.status === "completado" ? "success" : "outline"}>
                          {assignment.status === "completado" ? (
                            <>
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Calificado: {assignment.score}
                            </>
                          ) : "Pendiente"}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          {/* Grade Tab */}
          <TabsContent value="grade">
            {activeAssignment ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">
                    {assignments.find(a => a.id === activeAssignment)?.title}
                  </h3>
                  <Badge>Pendiente de calificación</Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="grade">Calificación (0-100)</Label>
                    <div className="flex items-center space-x-4">
                      <Slider
                        id="grade"
                        max={100}
                        step={1}
                        value={score}
                        onValueChange={setScore}
                        className="flex-1"
                      />
                      <span className="w-12 text-center font-medium">{score[0]}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="feedback">Retroalimentación</Label>
                    <Textarea
                      id="feedback"
                      placeholder="Escribe aquí tu retroalimentación para el estudiante..."
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      rows={5}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-8 text-center">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Selecciona una tarea</h3>
                <p className="text-muted-foreground">
                  Selecciona una tarea de la pestaña "Tareas" para calificarla
                </p>
              </div>
            )}
          </TabsContent>
          
          {/* AI Analysis Tab */}
          <TabsContent value="ai">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Análisis IA de Desempeño</h3>
                <Button onClick={handleAiAnalysis} variant="outline" size="sm">
                  Generar Análisis
                </Button>
              </div>
              
              {aiSuggestion ? (
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Recomendaciones:</h4>
                      <p>{aiSuggestion}</p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <AlertCircle className="h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">Sin análisis disponible</h3>
                  <p className="text-muted-foreground">
                    Haz clic en "Generar Análisis" para recibir sugerencias de la IA
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" size="sm">
              <X className="h-4 w-4 mr-2" />
              Cancelar
            </Button>
          </DialogClose>
          {activeAssignment && (
            <Button onClick={handleGradeSubmit} size="sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              Guardar Calificación
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}