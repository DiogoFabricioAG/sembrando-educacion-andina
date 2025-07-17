import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppSidebar from "./components/AppSidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ClassroomsPage from "./pages/salones/ClassroomsPage";
import CommunityPage from "./pages/comunidad/CommunityPage";
import StatePage from "./pages/estado/StatePage";
import HelpPage from "./pages/HelpPage";
import SettingsPage from "./pages/SettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <SidebarInset>
              <div className="p-4 md:p-6 flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/salones" element={<ClassroomsPage />} />
                  <Route path="/comunidad" element={<CommunityPage />} />
                  <Route path="/estado" element={<StatePage />} />
                  <Route path="/ayuda" element={<HelpPage />} />
                  <Route path="/configuracion" element={<SettingsPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
