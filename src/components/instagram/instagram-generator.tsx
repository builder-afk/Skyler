"use client";

import { useState } from "react";
import { GeneratorForm } from "./generator-form";
import { GeneratorResults } from "./generator-results";
import { motion } from "framer-motion";
import { Sparkles, Camera, Rocket, Info } from "lucide-react";

export function InstagramGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleGenerate = async (formData: any) => {
    setIsLoading(true);
    setResults(null);
    
    try {
      const response = await fetch("/api/generate-instagram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error generating Instagram content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-500 border border-pink-500/20 text-xs font-semibold uppercase tracking-wider">
          <Camera className="h-3 w-3" />
          Content Strategy
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-foreground leading-[1.1]">
            Instagram Post Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl font-body leading-relaxed">
            Create high-engagement Instagram content pipelines for your prompt business. Generate concepts, captions, and visual strategies in seconds.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 xl:col-span-4">
          <div className="bg-card border border-border/50 rounded-3xl p-6 md:p-8 shadow-xl shadow-foreground/5 sticky top-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500">
                <Rocket className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-display font-semibold tracking-tight">Campaign Details</h2>
            </div>
            <GeneratorForm onGenerate={handleGenerate} isLoading={isLoading} />
          </div>
        </div>

        <div className="lg:col-span-7 xl:col-span-8 min-h-[600px]">
          {isLoading ? (
            <div className="h-full flex flex-col items-center justify-center space-y-6 text-center animate-pulse">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-pink-600 animate-spin" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold tracking-tight">Designing your strategy...</h3>
                <p className="text-muted-foreground font-body">Our AI strategist is curating your Instagram content pillar.</p>
              </div>
            </div>
          ) : results ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-display font-semibold tracking-tight">Your Content Strategy</h2>
              </div>
              <GeneratorResults data={results} />
            </motion.div>
          ) : (
            <div className="h-full border-2 border-dashed border-border/60 rounded-3xl flex flex-col items-center justify-center p-12 text-center bg-muted/5">
              <div className="w-16 h-16 rounded-2xl bg-muted/20 flex items-center justify-center mb-6">
                <Camera className="h-8 w-8 text-muted-foreground/50" />
              </div>
              <h3 className="text-xl font-bold text-muted-foreground/80">Ready to Grow?</h3>
              <p className="text-muted-foreground max-w-sm mt-2">
                Define your topic and audience on the left to generate an end-to-end Instagram content pipeline.
              </p>
              <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-3 text-left max-w-md">
                <Info className="h-5 w-5 text-primary mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Tip: Use specific topics like &quot;Daily ChatGPT Hacks&quot; or &quot;Midjourney for Interior Design&quot; for more targeted content suggestions.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
