import { useState } from "react";
import { User, School, MapPin, Mail, Phone, Lock, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    web: true,
    mobile: false,
    marketing: false,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configuración</h1>
        <p className="text-muted-foreground">
          Administra tu cuenta y preferencias
        </p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList>
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="school">Escuela</TabsTrigger>
          <TabsTrigger value="security">Seguridad</TabsTrigger>
          <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Información Personal</CardTitle>
              <CardDescription>
                Actualiza tu información personal y de contacto
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Nombres</Label>
                  <Input id="first-name" placeholder="Tus nombres" defaultValue="Juan" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Apellidos</Label>
                  <Input id="last-name" placeholder="Tus apellidos" defaultValue="Pérez" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="tu@ejemplo.com" defaultValue="juan.perez@educacion.gob.pe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <Input id="phone" placeholder="999 999 999" defaultValue="999 888 777" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Biografía</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Cuéntanos sobre ti..." 
                  defaultValue="Docente con 8 años de experiencia en zonas rurales, especializado en educación primaria."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="school" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Información de la Escuela</CardTitle>
              <CardDescription>
                Actualiza la información de tu centro educativo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="school-name">Nombre de la Escuela</Label>
                <div className="flex items-center space-x-2">
                  <School className="h-4 w-4 text-muted-foreground" />
                  <Input id="school-name" placeholder="I.E. Ejemplo" defaultValue="I.E. José Carlos Mariátegui" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="school-code">Código Modular</Label>
                <Input id="school-code" placeholder="000000" defaultValue="123456" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="school-region">Región</Label>
                <Select defaultValue="amazonas">
                  <SelectTrigger id="school-region">
                    <SelectValue placeholder="Selecciona una región" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="amazonas">Amazonas</SelectItem>
                    <SelectItem value="ancash">Ancash</SelectItem>
                    <SelectItem value="apurimac">Apurímac</SelectItem>
                    <SelectItem value="arequipa">Arequipa</SelectItem>
                    <SelectItem value="ayacucho">Ayacucho</SelectItem>
                    <SelectItem value="cajamarca">Cajamarca</SelectItem>
                    <SelectItem value="cusco">Cusco</SelectItem>
                    <SelectItem value="huancavelica">Huancavelica</SelectItem>
                    <SelectItem value="huanuco">Huánuco</SelectItem>
                    <SelectItem value="ica">Ica</SelectItem>
                    <SelectItem value="junin">Junín</SelectItem>
                    <SelectItem value="lalibertad">La Libertad</SelectItem>
                    <SelectItem value="lambayeque">Lambayeque</SelectItem>
                    <SelectItem value="lima">Lima</SelectItem>
                    <SelectItem value="loreto">Loreto</SelectItem>
                    <SelectItem value="madrededios">Madre de Dios</SelectItem>
                    <SelectItem value="moquegua">Moquegua</SelectItem>
                    <SelectItem value="pasco">Pasco</SelectItem>
                    <SelectItem value="piura">Piura</SelectItem>
                    <SelectItem value="puno">Puno</SelectItem>
                    <SelectItem value="sanmartin">San Martín</SelectItem>
                    <SelectItem value="tacna">Tacna</SelectItem>
                    <SelectItem value="tumbes">Tumbes</SelectItem>
                    <SelectItem value="ucayali">Ucayali</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="school-address">Dirección</Label>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <Input id="school-address" placeholder="Dirección de la escuela" defaultValue="Jr. Los Educadores 123, Chachapoyas" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Seguridad</CardTitle>
              <CardDescription>
                Actualiza tu contraseña y configura la seguridad de tu cuenta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Contraseña Actual</Label>
                <div className="flex items-center space-x-2">
                  <Lock className="h-4 w-4 text-muted-foreground" />
                  <Input id="current-password" type="password" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-password">Nueva Contraseña</Label>
                <div className="flex items-center space-x-2">
                  <Lock className="h-4 w-4 text-muted-foreground" />
                  <Input id="new-password" type="password" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Nueva Contraseña</Label>
                <div className="flex items-center space-x-2">
                  <Lock className="h-4 w-4 text-muted-foreground" />
                  <Input id="confirm-password" type="password" />
                </div>
              </div>

              <Separator className="my-4" />
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="two-factor">Autenticación de Dos Factores</Label>
                    <p className="text-sm text-muted-foreground">
                      Añade una capa adicional de seguridad a tu cuenta
                    </p>
                  </div>
                  <Switch id="two-factor" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Actualizar Seguridad
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notificaciones</CardTitle>
              <CardDescription>
                Configura cómo quieres recibir notificaciones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications">Notificaciones por Correo</Label>
                    <p className="text-sm text-muted-foreground">
                      Recibe actualizaciones importantes por correo electrónico
                    </p>
                  </div>
                  <Switch 
                    id="email-notifications" 
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="web-notifications">Notificaciones Web</Label>
                    <p className="text-sm text-muted-foreground">
                      Recibe notificaciones mientras usas la plataforma
                    </p>
                  </div>
                  <Switch 
                    id="web-notifications" 
                    checked={notifications.web}
                    onCheckedChange={(checked) => setNotifications({...notifications, web: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="mobile-notifications">Notificaciones Móviles</Label>
                    <p className="text-sm text-muted-foreground">
                      Recibe notificaciones en tu dispositivo móvil
                    </p>
                  </div>
                  <Switch 
                    id="mobile-notifications" 
                    checked={notifications.mobile}
                    onCheckedChange={(checked) => setNotifications({...notifications, mobile: checked})}
                  />
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="marketing-notifications">Actualizaciones del Programa</Label>
                    <p className="text-sm text-muted-foreground">
                      Recibe información sobre nuevas funciones y mejoras
                    </p>
                  </div>
                  <Switch 
                    id="marketing-notifications" 
                    checked={notifications.marketing}
                    onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Guardar Preferencias
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="border-dashed border-muted">
        <CardHeader>
          <CardTitle>Preferencias de Cuenta</CardTitle>
          <CardDescription>
            Gestiona la configuración general de tu cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="language">Idioma</Label>
                <p className="text-sm text-muted-foreground">
                  Selecciona el idioma para la plataforma
                </p>
              </div>
              <Select defaultValue="es">
                <SelectTrigger id="language" className="w-[180px]">
                  <SelectValue placeholder="Selecciona un idioma" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="qu">Quechua</SelectItem>
                  <SelectItem value="ay">Aymara</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="text-destructive hover:text-destructive">
              Cerrar Sesión
            </Button>
            <Button variant="outline" className="text-destructive hover:text-destructive">
              Eliminar Cuenta
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SettingsPage;