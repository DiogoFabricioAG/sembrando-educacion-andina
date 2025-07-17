import { useState } from "react";
import { PlusCircle, MessageSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for initial development
const initiatives = [
  { 
    id: 1, 
    title: "Materiales educativos para zonas rurales",
    description: "Propuesta para crear materiales educativos adaptados a las realidades de las zonas rurales del Perú",
    votes: 24,
    status: "En revisión"
  },
  { 
    id: 2, 
    title: "Internet para todas las escuelas",
    description: "Iniciativa para garantizar acceso a internet en todas las escuelas rurales",
    votes: 42,
    status: "Aprobado"
  },
  { 
    id: 3, 
    title: "Capacitación docente en tecnología",
    description: "Programa de capacitación para docentes en el uso de herramientas tecnológicas",
    votes: 18,
    status: "En revisión"
  },
  { 
    id: 4, 
    title: "Mejora de infraestructura escolar",
    description: "Plan de mejoramiento de la infraestructura de escuelas rurales",
    votes: 31,
    status: "Rechazado"
  }
];

const communities = [
  {
    id: 1,
    name: "Red Nacional de Docentes Rurales",
    members: 245,
    description: "Grupo nacional de docentes que trabajan en zonas rurales de todo el Perú",
    link: "https://chat.whatsapp.com/example1"
  },
  {
    id: 2,
    name: "Docentes Región Amazonas",
    members: 87,
    description: "Comunidad de profesores de la región Amazonas compartiendo experiencias y recursos",
    link: "https://chat.whatsapp.com/example2"
  }
];

const CommunityPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredInitiatives = initiatives.filter(initiative => 
    initiative.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    initiative.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Comunidad</h1>
          <p className="text-muted-foreground">
            Conecta con otros docentes y comparte iniciativas
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Añadir iniciativa
        </Button>
      </div>

      <Tabs defaultValue="initiatives" className="w-full">
        <TabsList>
          <TabsTrigger value="initiatives">Iniciativas</TabsTrigger>
          <TabsTrigger value="communities">Comunidades</TabsTrigger>
        </TabsList>

        <TabsContent value="initiatives">
          <div className="space-y-4">
            <div className="flex max-w-sm items-center space-x-2">
              <Input
                placeholder="Buscar iniciativas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {filteredInitiatives.map((initiative) => (
                <Card key={initiative.id} className="peru-card">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{initiative.title}</CardTitle>
                      <span className={`student-badge ${
                        initiative.status === "Aprobado" ? "student-badge-advanced" :
                        initiative.status === "Rechazado" ? "student-badge-beginner" :
                        "student-badge-intermediate"
                      }`}>
                        {initiative.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {initiative.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MessageSquare className="mr-1 h-4 w-4" />
                      <span>{initiative.votes} votos</span>
                    </div>
                    <Button variant="outline" size="sm">Apoyar</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="communities">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {communities.map((community) => (
                <Card key={community.id} className="peru-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{community.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      {community.description}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="mr-1 h-4 w-4" />
                      <span>{community.members} miembros</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" className="w-full">
                      Unirse al grupo de WhatsApp
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="rounded-md border p-6 text-center">
              <h3 className="text-xl font-medium mb-2">¿Quieres crear tu propia comunidad?</h3>
              <p className="text-muted-foreground mb-4">
                Puedes crear un grupo regional o temático para conectar con otros docentes
              </p>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Crear comunidad
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunityPage;