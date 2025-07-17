import { useState } from "react";
import { Send, Download, Bot, Save, Eraser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  files?: string[];
}

interface ClassroomChatbotProps {
  className?: string;
  classroomName: string;
}

export function ClassroomChatbot({ className, classroomName }: ClassroomChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: `¡Hola! Soy tu asistente para el salón ${classroomName}. ¿En qué puedo ayudarte hoy? Puedo preparar material educativo, generar ejercicios, o ayudarte con tus planes de clase.`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses: { [key: string]: string } = {
        "material": "Aquí tienes material para la clase de hoy sobre fracciones:\n\n1. Introducción a fracciones (10 min)\n2. Actividad práctica con ejemplos visuales (15 min)\n3. Ejercicios en grupos pequeños (20 min)\n4. Evaluación rápida (5 min)\n\nPuedo generar cada sección en detalle si lo necesitas.",
        "ejercicio": "He creado estos ejercicios de matemáticas adaptados al nivel de tu clase:\n\n1. Resuelve: 3/4 + 1/2 = ?\n2. Si Juan tiene 1/3 de una pizza y María tiene 2/6, ¿quién tiene más pizza?\n3. Dibuja una representación visual de 2/5.\n\n¿Deseas que genere más ejercicios o que los adapte a un tema específico?",
        "evaluación": "Aquí tienes una evaluación breve para tus estudiantes:\n\n1. Define qué es una fracción con tus propias palabras.\n2. Completa: 1/2 + 1/4 = ?\n3. Dibuja 3/4 de un círculo.\n\nPuedes descargar esta evaluación en formato PDF para imprimirla.",
      };

      let responseContent = "Entiendo que necesitas ayuda con tu clase. ¿Podrías especificar si necesitas material didáctico, ejercicios, o evaluaciones?";
      
      // Simple keyword matching
      const inputLower = input.toLowerCase();
      for (const [keyword, response] of Object.entries(responses)) {
        if (inputLower.includes(keyword)) {
          responseContent = response;
          break;
        }
      }

      const aiResponse: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: responseContent,
        timestamp: new Date(),
        files: inputLower.includes("material") ? ["material_clase.pdf"] : undefined,
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 1,
        role: "assistant",
        content: `¡Hola! Soy tu asistente para el salón ${classroomName}. ¿En qué puedo ayudarte hoy?`,
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Asistente IA - {classroomName}</CardTitle>
          <Button variant="outline" size="sm" onClick={handleClearChat}>
            <Eraser className="h-4 w-4 mr-2" />
            Limpiar Chat
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="border rounded-md h-[500px] flex flex-col">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex items-center mb-1">
                        <Badge variant="outline" className="text-xs">
                          <Bot className="h-3 w-3 mr-1" />
                          Asistente IA
                        </Badge>
                      </div>
                    )}
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    {message.files && message.files.length > 0 && (
                      <div className="mt-2">
                        {message.files.map((file, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="mt-2 text-xs"
                          >
                            <Download className="h-3 w-3 mr-1" />
                            {file}
                          </Button>
                        ))}
                      </div>
                    )}
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                    <div className="flex space-x-2 items-center">
                      <div className="w-2 h-2 rounded-full bg-foreground/50 animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 rounded-full bg-foreground/50 animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 rounded-full bg-foreground/50 animate-bounce"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje aquí..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading}>
                <Send className="h-4 w-4 mr-2" />
                Enviar
              </Button>
              <Button type="button" variant="outline">
                <Save className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}