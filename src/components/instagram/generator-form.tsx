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
import { Sparkles, Loader2, Camera, Users, Target } from "lucide-react";

interface GeneratorFormProps {
  onGenerate: (data: any) => void;
  isLoading: boolean;
}

export function GeneratorForm({ onGenerate, isLoading }: GeneratorFormProps) {
  const [formData, setFormData] = useState({
    topic: "",
    audience: "creators",
    goal: "awareness",
    tone: "educational",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-body">
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="topic" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
            <Camera className="h-3 w-3" /> Topic / Product Focus
          </Label>
          <Input
            id="topic"
            placeholder="e.g. SEO Prompts, Midjourney Mastery"
            value={formData.topic}
            onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
            className="bg-background/50"
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="audience" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
            <Users className="h-3 w-3" /> Target Audience
          </Label>
          <Select
            value={formData.audience}
            onValueChange={(v) => setFormData({ ...formData, audience: v || "creators" })}
          >
            <SelectTrigger className="bg-background/50">
              <SelectValue placeholder="Select audience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="creators">Digital Creators</SelectItem>
              <SelectItem value="marketers">Marketers & Agencies</SelectItem>
              <SelectItem value="founders">SaaS Founders</SelectItem>
              <SelectItem value="designers">Graphic Designers</SelectItem>
              <SelectItem value="developers">Developers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="goal" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
            <Target className="h-3 w-3" /> Primary Goal
          </Label>
          <Select
            value={formData.goal}
            onValueChange={(v) => setFormData({ ...formData, goal: v || "awareness" })}
          >
            <SelectTrigger className="bg-background/50">
              <SelectValue placeholder="Select goal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="awareness">Brand Awareness</SelectItem>
              <SelectItem value="engagement">Engagement / Saves</SelectItem>
              <SelectItem value="conversion">Conversion / Traffic</SelectItem>
              <SelectItem value="education">Educational Value</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="tone" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tone of Voice</Label>
          <Select
            value={formData.tone}
            onValueChange={(v) => setFormData({ ...formData, tone: v || "educational" })}
          >
            <SelectTrigger className="bg-background/50">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="educational">Educational & Authoritative</SelectItem>
              <SelectItem value="inspirational">Inspirational & Visionary</SelectItem>
              <SelectItem value="urgent">Urgent & Provocative</SelectItem>
              <SelectItem value="curious">Curious & Intriguing</SelectItem>
              <SelectItem value="casual">Casual & Relatable</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white hover:opacity-90 font-semibold py-6 rounded-xl shadow-lg transition-all active:scale-[0.98]"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Crafting Insta Strategy...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-5 w-5" />
            Generate Instagram Pipeline
          </>
        )}
      </Button>
    </form>
  );
}
