'use client'

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface PromptViewerProps {
  content: string
  onChange?: (value: string) => void
}

export function PromptViewer({ content, onChange }: PromptViewerProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!content) return null

  return (
    <div className="relative mt-4 rounded-xl border bg-muted/30 p-4 font-mono text-sm shadow-inner group">
      <div className="absolute right-4 top-4">
        <Button
          variant="secondary"
          size="sm"
          className="h-8 shadow-sm transition-opacity group-hover:opacity-100 opacity-80"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="mr-2 h-4 w-4 text-green-500" />
          ) : (
            <Copy className="mr-2 h-4 w-4" />
          )}
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <div className="overflow-x-auto pr-24 flex-1 h-full w-full">
        {onChange ? (
          <Textarea
            value={content}
            onChange={(e) => onChange(e.target.value)}
            className="min-h-[250px] font-mono text-sm border-0 focus-visible:ring-0 bg-transparent resize-y w-full p-0 leading-relaxed m-0 shadow-none"
            placeholder="Generated prompt will appear here, which you can then modify..."
          />
        ) : (
          <div className="whitespace-pre-wrap">{content}</div>
        )}
      </div>
    </div>
  )
}
