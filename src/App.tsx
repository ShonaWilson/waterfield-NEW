import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import StrategyConnect from "./pages/StrategyConnect";
import SuccessAlliance from "./pages/SuccessAlliance";
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
          <Route path="/services/strategyconnect" element={<StrategyConnect />} />
          <Route path="/services/successalliance" element={<SuccessAlliance />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
