"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Check, Clock, TrendingUp, Lightbulb, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GeneratorResultsProps {
  data: {
    posts: Array<{ id: string; content: string }>;
    hashtags: string[];
    titles: string[];
    captions: string[];
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
      <div className="flex items-center justify-between p-5 bg-secondary/30 rounded-2xl border border-border/50">
        <div className="flex items-center gap-4">
          <div className="p-2.5 bg-accent/10 rounded-xl text-accent">
            <Clock className="h-5 w-5" />
          </div>
          <div className="font-body">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Best Time to Post</p>
            <p className="text-sm font-semibold text-foreground">{data.bestTime}</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-4 h-12 bg-muted/30 p-1 rounded-xl">
          <TabsTrigger value="posts" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm font-display font-semibold">Posts</TabsTrigger>
          <TabsTrigger value="titles" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm font-display font-semibold">Titles</TabsTrigger>
          <TabsTrigger value="tags" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm font-display font-semibold">Tags</TabsTrigger>
          <TabsTrigger value="captions" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm font-display font-semibold">Captions</TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-6 space-y-4">
          <AnimatePresence mode="popLayout">
            {data.posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border-border/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="bg-muted/50 font-medium text-[10px] uppercase tracking-wider">Variation {index + 1}</Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(post.content, post.id)}
                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                  >
                    {copiedId === post.id ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-sm leading-relaxed whitespace-pre-wrap text-foreground/90">
                  {post.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </TabsContent>

        <TabsContent value="titles" className="mt-6 space-y-3">
          {data.titles.map((title, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-background border rounded-xl hover:border-blue-200 transition-colors group">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">{index + 1}</span>
              <p className="flex-grow text-sm font-medium">{title}</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(title, `title-${index}`)}
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copiedId === `title-${index}` ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="tags" className="mt-6">
          <div className="bg-card border border-border/50 rounded-2xl p-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {data.hashtags.map((tag, index) => (
                <Badge 
                  key={index} 
                  className="bg-blue-500/5 hover:bg-blue-500/10 text-blue-600 border-blue-500/20 py-1.5 px-3 cursor-pointer transition-all"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <Button 
              className="w-full" 
              variant="outline"
              onClick={() => copyToClipboard(data.hashtags.join(" "), "all-tags")}
            >
              {copiedId === "all-tags" ? <Check className="mr-2 h-4 w-4 text-green-500" /> : <Copy className="mr-2 h-4 w-4" />}
              Copy All Hashtags
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="captions" className="mt-6 space-y-3">
          {data.captions.map((caption, index) => (
            <div key={index} className="p-4 bg-muted/20 border border-border/50 rounded-xl flex items-center justify-between">
              <p className="text-sm text-muted-foreground italic">&quot;{caption}&quot;</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(caption, `caption-${index}`)}
                className="h-8 w-8"
              >
                {copiedId === `caption-${index}` ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
