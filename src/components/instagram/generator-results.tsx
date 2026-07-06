"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Check, Clock, Camera, Image, Layout, MessageCircle, Hash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GeneratorResultsProps {
  data: {
    concept: string;
    visualApproach: string;
    pillar: string;
    captions: Array<{ id: string; tone: string; content: string }>;
    hashtags: string[];
    bestTime: string;
  };
}

export function GeneratorResults({ data }: GeneratorResultsProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-4 p-5 bg-secondary/30 rounded-2xl border border-border/50">
          <div className="p-2.5 bg-pink-500/10 rounded-xl text-pink-500">
            <Layout className="h-5 w-5" />
          </div>
          <div className="font-body">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Content Pillar</p>
            <p className="text-sm font-semibold text-foreground">{data.pillar}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 bg-secondary/30 rounded-2xl border border-border/50">
          <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-500">
            <Clock className="h-5 w-5" />
          </div>
          <div className="font-body">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Best Time to Post</p>
            <p className="text-sm font-semibold text-foreground">{data.bestTime}</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-card border border-border/50 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Camera className="h-5 w-5 text-pink-500" />
          <h3 className="text-lg font-display font-semibold">Post Concept & Visual Direction</h3>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Concept</p>
            <p className="text-sm text-foreground/90 leading-relaxed">{data.concept}</p>
          </div>
          <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border/50">
            <div className="p-2 bg-background rounded-lg shadow-sm">
              <Image className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Recommended Visual</p>
              <p className="text-sm font-medium">{data.visualApproach}</p>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="captions" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-12 bg-muted/30 p-1 rounded-xl">
          <TabsTrigger value="captions" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm font-display font-semibold flex items-center gap-2">
            <MessageCircle className="h-4 w-4" /> Captions
          </TabsTrigger>
          <TabsTrigger value="hashtags" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm font-display font-semibold flex items-center gap-2">
            <Hash className="h-4 w-4" /> Hashtags
          </TabsTrigger>
        </TabsList>

        <TabsContent value="captions" className="mt-6 space-y-4">
          <AnimatePresence mode="popLayout">
            {data.captions.map((caption, index) => (
              <motion.div
                key={caption.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border-border/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/10 font-medium text-[10px] uppercase tracking-wider">
                    {caption.tone} Variation
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(caption.content, caption.id)}
                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                  >
                    {copiedId === caption.id ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-sm leading-relaxed whitespace-pre-wrap text-foreground/90 font-body">
                  {caption.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </TabsContent>

        <TabsContent value="hashtags" className="mt-6">
          <div className="bg-card border border-border/50 rounded-2xl p-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {data.hashtags.map((tag, index) => (
                <Badge 
                  key={index} 
                  className="bg-primary/5 hover:bg-primary/10 text-primary border-primary/20 py-1.5 px-3 cursor-pointer transition-all"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <Button 
              className="w-full bg-primary hover:bg-primary/90" 
              onClick={() => copyToClipboard(data.hashtags.join(" "), "all-tags")}
            >
              {copiedId === "all-tags" ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              Copy All Hashtags
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
