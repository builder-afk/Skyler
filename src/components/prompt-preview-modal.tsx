"use client"

import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Check, Sparkles, User, MessageSquare, Share2 } from "lucide-react"
import type { EnhancedTemplateItem } from "@/lib/data/templates"

interface PromptPreviewModalProps {
  item: EnhancedTemplateItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PromptPreviewModal({ item, isOpen, onClose }: PromptPreviewModalProps) {
  const [variableValues, setVariableValues] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  // Reset variables when a new item is opened
  useEffect(() => {
    if (item) {
      const initialVals: Record<string, string> = {};
      item.variables.forEach(v => {
        initialVals[v.id] = '';
      });
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVariableValues(initialVals);
      setCopied(false);
      setShared(false);
    }
  }, [item]);

  if (!item) return null;

  // Generate the final prompt by replacing {var} with actual values
  let finalPrompt = item.promptTemplate;
  item.variables.forEach(v => {
    const val = variableValues[v.id] || `[${v.label}]`;
    // Regex to replace all occurrences of {var_id}
    const regex = new RegExp(`\\{${v.id}\\}`, 'g');
    finalPrompt = finalPrompt.replace(regex, val);
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(finalPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: finalPrompt,
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback to copy if Web Share API is not supported
      handleCopy();
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  const handleVariableChange = (id: string, value: string) => {
    setVariableValues(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl sm:max-w-4xl p-0 overflow-hidden bg-background border-border shadow-2xl">
        <div className="flex flex-col md:flex-row h-[80vh] max-h-[600px]">
          {/* Left Column: Config */}
          <div className="w-full md:w-1/2 p-6 flex flex-col border-r border-border/50 bg-secondary/10 overflow-y-auto">
            <DialogHeader className="mb-6 text-left space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex shrink-0 items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <User className="w-3.5 h-3.5 shrink-0" />
                  {item.author}
                </span>
                <span className="inline-flex shrink-0 items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium max-w-[200px] sm:max-w-full">
                  <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate" title={item.expectedOutput}>
                    Expected: {item.expectedOutput}
                  </span>
                </span>
              </div>
              <div>
                <DialogTitle className="text-2xl font-semibold leading-tight text-left">
                  {item.title}
                </DialogTitle>
                <DialogDescription className="text-sm mt-2 text-muted-foreground text-left">
                  {item.desc}
                </DialogDescription>
              </div>
            </DialogHeader>

            <div className="flex-1 space-y-6">
              <div>
                <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Customize Prompt
                </h4>
                <div className="space-y-4">
                  {item.variables.map(variable => (
                    <div key={variable.id} className="space-y-2">
                      <Label htmlFor={variable.id} className="text-xs font-medium text-foreground">
                        {variable.label}
                      </Label>
                      <Input
                        id={variable.id}
                        placeholder={variable.placeholder}
                        value={variableValues[variable.id] || ''}
                        onChange={(e) => handleVariableChange(variable.id, e.target.value)}
                        className="bg-background"
                      />
                    </div>
                  ))}
                  {item.variables.length === 0 && (
                    <div className="text-sm text-muted-foreground italic p-4 bg-background rounded-lg border border-border/50 text-center">
                      This prompt requires no additional variables.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Preview */}
          <div className="w-full md:w-1/2 flex flex-col bg-[#0d1117] relative">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/20">
              <span className="text-xs font-medium text-gray-400">Final Prompt Preview</span>
              <div className="flex items-center gap-2">
                <Button 
                  onClick={handleShare} 
                  variant="secondary" 
                  size="sm" 
                  className="h-8 gap-1.5 bg-white/10 hover:bg-white/20 text-white border-0"
                >
                  {shared ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                  {shared ? "Shared!" : "Share"}
                </Button>
                <Button 
                  onClick={handleCopy} 
                  variant="secondary" 
                  size="sm" 
                  className="h-8 gap-1.5 bg-white/10 hover:bg-white/20 text-white border-0"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>
            </div>
            
            <div className="flex-1 p-6 overflow-y-auto">
              <pre className="text-[13px] leading-relaxed font-mono text-gray-300 whitespace-pre-wrap break-words font-medium">
                {finalPrompt}
              </pre>
            </div>
            
            <div className="p-4 border-t border-white/10 bg-black/20">
              <Button className="w-full gap-2" size="lg">
                <Sparkles className="w-4 h-4" />
                Use in Generator
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
