"use client"

import React, { useEffect, useRef, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { useCompletion } from "@ai-sdk/react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { ArrowLeft, Layers, Sparkles, Loader2, Save } from "lucide-react"

function ArchitecturePlanContent() {
  const searchParams = useSearchParams()
  const idea = searchParams.get("idea") || ""

  const { completion, complete, isLoading } = useCompletion({
    api: "/api/generate-architecture",
  })

  const hasFetched = useRef(false)

  useEffect(() => {
    if (idea && !hasFetched.current) {
      hasFetched.current = true
      complete(idea)
    }
  }, [idea, complete])

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <Layers className="w-5 h-5 text-primary" />
            <span className="font-bold text-foreground">Skyler</span>
          </Link>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Architecture Generator</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Backend Architecture Plan</h1>
          <p className="text-muted-foreground">Generated based on your idea:</p>
          <div className="mt-4 p-4 rounded-xl bg-secondary/30 border border-border text-foreground font-medium">
            "{idea}"
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card shadow-sm p-6 md:p-8 relative min-h-[400px]">
          {isLoading && !completion && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
              <Loader2 className="w-8 h-8 animate-spin mb-4 text-primary" />
              <p>Designing your production-ready backend architecture...</p>
              <p className="text-xs mt-2 opacity-60">This involves scaling strategy, database selection, AI infra, and more.</p>
            </div>
          )}

          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none prose-headings:text-foreground prose-a:text-primary">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {completion}
            </ReactMarkdown>
          </div>
          
          {!isLoading && completion && (
            <div className="mt-10 flex justify-end">
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <Save className="w-4 h-4" /> Save as PDF
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default function ArchitecturePlanPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center pb-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    }>
      <ArchitecturePlanContent />
    </Suspense>
  )
}
