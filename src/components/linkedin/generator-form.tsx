"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Sparkles, Loader2 } from "lucide-react";

interface GeneratorFormProps {
  onGenerate: (data: Record<string, string | number>) => void;
  isLoading: boolean;
}

export function GeneratorForm({ onGenerate, isLoading }: GeneratorFormProps) {
  const [formData, setFormData] = useState({
    niche: "tech",
    tone: "professional",
    postType: "thought-leadership",
    audience: "founders",
    keywords: "",
    length: 150,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-body">
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="niche" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Niche</Label>
          <Select
            value={formData.niche}
            onValueChange={(v) => setFormData({ ...formData, niche: v || "tech" })}
          >
            <SelectTrigger className="bg-background/50">
              <SelectValue placeholder="Select niche" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tech">Tech & SaaS</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="hr">HR & Recruiting</SelectItem>
              <SelectItem value="ai">Artificial Intelligence</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="tone" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tone</Label>
          <Select
            value={formData.tone}
            onValueChange={(v) => setFormData({ ...formData, tone: v || "professional" })}
          >
            <SelectTrigger className="bg-background/50">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="casual">Casual & Friendly</SelectItem>
              <SelectItem value="storytelling">Storytelling</SelectItem>
              <SelectItem value="bold">Bold & Provocative</SelectItem>
              <SelectItem value="inspirational">Inspirational</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="postType" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Post Type</Label>
          <Select
            value={formData.postType}
            onValueChange={(v) => setFormData({ ...formData, postType: v || "thought-leadership" })}
          >
            <SelectTrigger className="bg-background/50">
              <SelectValue placeholder="Select post type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="thought-leadership">Thought Leadership</SelectItem>
              <SelectItem value="how-to">How-to Guide</SelectItem>
              <SelectItem value="case-study">Case Study</SelectItem>
              <SelectItem value="listicle">Listicle (Tips)</SelectItem>
              <SelectItem value="poll">Engagement Poll</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="audience" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Target Audience</Label>
          <Input
            id="audience"
            placeholder="e.g. Startup Founders, Devs"
            value={formData.audience}
            onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
            className="bg-background/50"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="keywords" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Keywords</Label>
          <Input
            id="keywords"
            placeholder="automation, growth, scaling"
            value={formData.keywords}
            onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
            className="bg-background/50"
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Estimated Length</Label>
            <span className="text-xs font-medium text-muted-foreground">{formData.length} words</span>
          </div>
          <Slider
            value={[formData.length]}
            onValueChange={(v) => {
              const value = Array.isArray(v) ? v[0] : v;
              setFormData({ ...formData, length: value });
            }}
            min={50}
            max={500}
            step={10}
            className="py-2"
          />
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 rounded-xl shadow-lg transition-all active:scale-[0.98]"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Generating Pipeline...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-5 w-5" />
            Generate Content Pipeline
          </>
        )}
      </Button>
    </form>
  );
}
