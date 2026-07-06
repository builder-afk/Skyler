"use client";

import { useState } from "react";
import { GeneratorForm } from "./generator-form";
import { GeneratorResults } from "./generator-results";
import { motion } from "framer-motion";
import { Sparkles, LayoutGrid, LayoutList, MessageSquare } from "lucide-react";

export function LinkedInGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleGenerate = async (formData: any) => {
    setIsLoading(true);
    setResults(null);
    
    try {
      const response = await fetch("/api/generate-linkedin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="h-3 w-3" />
          Content Strategy
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-foreground leading-[1.1]">
            AI LinkedIn Post Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl font-body leading-relaxed">
            Drive your content pipeline with AI-powered posts, trending tags, and scroll-stopping hooks tailored to your niche.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 xl:col-span-4">
          <div className="bg-card border border-border/50 rounded-3xl p-6 md:p-8 shadow-xl shadow-foreground/5 sticky top-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <LayoutGrid className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-display font-semibold tracking-tight">Input Parameters</h2>
            </div>
            <GeneratorForm onGenerate={handleGenerate} isLoading={isLoading} />
          </div>
        </div>

        <div className="lg:col-span-7 xl:col-span-8 min-h-[600px]">
          {isLoading ? (
            <div className="h-full flex flex-col items-center justify-center space-y-6 text-center animate-pulse">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-blue-600 animate-spin" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold tracking-tight">Crafting your content...</h3>
                <p className="text-muted-foreground font-body">Our AI is analyzing your niche and generating viral variations.</p>
              </div>
            </div>
          ) : results ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-display font-semibold tracking-tight">Generated Pipeline</h2>
              </div>
              <GeneratorResults data={results} />
            </motion.div>
          ) : (
            <div className="h-full border-2 border-dashed border-border/60 rounded-3xl flex flex-col items-center justify-center p-12 text-center bg-muted/5">
              <div className="w-16 h-16 rounded-2xl bg-muted/20 flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-muted-foreground/50" />
              </div>
              <h3 className="text-xl font-bold text-muted-foreground/80">Ready to Generate?</h3>
              <p className="text-muted-foreground max-w-sm mt-2">
                Configure your niche and tone on the left to generate a full LinkedIn content pipeline.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
