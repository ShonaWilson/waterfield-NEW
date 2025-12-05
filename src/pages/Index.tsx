import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ClaritySection } from "@/components/home/ClaritySection";
import { WaterfieldWay } from "@/components/home/WaterfieldWay";
import { ClientLogos } from "@/components/home/ClientLogos";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { BuildCapacity } from "@/components/home/BuildCapacity";
import { GettingStarted } from "@/components/home/GettingStarted";
import { FinalQuote } from "@/components/home/FinalQuote";
import { FromUncertainty } from "@/components/home/FromUncertainty";

const Index = () => {
  useEffect(() => {
    document.title = "Waterfield | Clear Strategic Direction & Action";
  }, []);

  return (
    <Layout>
      <Hero />
      <ProblemSection />
      <ClaritySection />
      <WaterfieldWay />
      <ClientLogos />
      <FinalQuote />
      <ServicesPreview />
      <BuildCapacity />
      <GettingStarted />
      <FromUncertainty />
    </Layout>
  );
};

export default Index;
