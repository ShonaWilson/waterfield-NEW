import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import BuildCapacity from "./pages/BuildCapacity";
import AITools from "./pages/AITools";
import StrategyConnect from "./pages/StrategyConnect";
import SuccessAlliance from "./pages/SuccessAlliance";
import OpenInnovation from "./pages/OpenInnovation";
import CustomFacilitation from "./pages/CustomFacilitation";
import CollaborativeIntelligence from "./pages/CollaborativeIntelligence";
import Process from "./pages/Process";
import OurClients from "./pages/OurClients";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/build-capacity" element={<BuildCapacity />} />
          <Route path="/ai-tools" element={<AITools />} />
          <Route path="/services/strategyconnect" element={<StrategyConnect />} />
          <Route path="/services/successalliance" element={<SuccessAlliance />} />
          <Route path="/services/openinnovation" element={<OpenInnovation />} />
          <Route path="/services/customfacilitation" element={<CustomFacilitation />} />
          <Route path="/collaborative-intelligence" element={<CollaborativeIntelligence />} />
          <Route path="/process" element={<Process />} />
          <Route path="/our-clients" element={<OurClients />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<Article />} />
          <Route path="/case-studies/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Redirects for old URLs */}
          <Route path="/strategyconnect" element={<Navigate to="/services/strategyconnect" replace />} />
          <Route path="/successalliance" element={<Navigate to="/services/successalliance" replace />} />
          <Route path="/openinnovation" element={<Navigate to="/services/openinnovation" replace />} />
          <Route path="/customfacilitation" element={<Navigate to="/services/customfacilitation" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
