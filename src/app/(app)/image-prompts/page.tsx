"use client"

import React, { useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Upload,
  X,
  Copy,
  Check,
  Loader2,
  Sparkles,
  Palette,
  Type,
  Layout,
  ImageIcon,
  Heart,
  Bookmark
} from "lucide-react"
import { toast } from 'sonner'

import { MOCK_GALLERY, type GalleryItem, type AnalysisResult } from "./mock-data"

/* ─── TINY COPY HELPER ─── */
function useCopy() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const copy = useCallback((text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }, [])
  return { copiedKey, copy }
}

/* ─── PAGE ─── */
export default function ImagePromptsPage() {
  const [activeItem, setActiveItem] = useState<{
    image: string
    name: string
    analysis: AnalysisResult | null
    loading: boolean
  } | null>(null)

  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { copiedKey, copy } = useCopy()

  const [likedImages, setLikedImages] = useState<string[]>([])
  const [savedImages, setSavedImages] = useState<string[]>([])

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    setLikedImages(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  const toggleSave = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    setSavedImages(prev => {
      const isSaved = prev.includes(id)
      toast.success(isSaved ? "Removed from saved" : "Saved to your library")
      return isSaved ? prev.filter(x => x !== id) : [...prev, id]
    })
  }

  /* handle custom file upload */
  const handleFile = async (file: File) => {
    if (!file.type.startsWith("image/")) return
    
    // Read local image to show immediately
    const reader = new FileReader()
    reader.onload = async (e) => {
      const imageUrl = e.target?.result as string
      
      // Open modal in loading state
      setActiveItem({
        image: imageUrl,
        name: file.name,
        analysis: null,
        loading: true
      })

      try {
        const form = new FormData()
        form.append("image", file)
        const res = await fetch("/api/analyze-design", { method: "POST", body: form })
        if (!res.ok) throw new Error("Analysis failed")
        const data: AnalysisResult = await res.json()
        
        // Update modal with results
        setActiveItem(prev => prev ? { ...prev, analysis: data, loading: false } : null)
      } catch (err) {
        console.error(err)
        // Update modal with error state or close it
        setActiveItem(prev => prev ? { ...prev, loading: false } : null)
      }
    }
    reader.readAsDataURL(file)
  }

  /* drag/drop handlers for the top bar */
  const onDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true)
    if (e.type === "dragleave") setDragActive(false)
  }
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0])
  }

  /* open gallery item */
  const openGalleryItem = (item: GalleryItem) => {
    setActiveItem({
      image: item.url,
      name: item.title,
      analysis: item.analysis,
      loading: false
    })
  }

  /* close modal */
  const closeModal = () => {
    setActiveItem(null)
  }

  return (
    <div className="max-w-[1400px] mx-auto pb-20">
      
      {/* ─── TOP BAR (Upload Hero) ─── */}
      <div 
        className={`
          relative w-full max-w-3xl mx-auto rounded-3xl border-2 border-dashed mb-16 p-10 sm:p-14 transition-all duration-300 text-center
          ${dragActive ? "border-accent bg-accent/5 scale-[1.02]" : "border-border hover:border-accent/40 bg-secondary/30"}
        `}
        onDragEnter={onDrag}
        onDragOver={onDrag}
        onDragLeave={onDrag}
        onDrop={onDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="h-16 w-16 rounded-2xl bg-background shadow-sm border border-border flex items-center justify-center shrink-0 mb-2">
            <ImageIcon className="h-8 w-8 text-accent" />
          </div>
          
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground mb-3">
              Reverse-Engineer Any Design
            </h1>
            <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
              Drop an image here to instantly extract its style, colors, typography, and get a ready-to-use AI prompt.
            </p>
          </div>

          <button
            onClick={() => inputRef.current?.click()}
            className="mt-2 px-8 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:scale-105 hover:bg-foreground/90 transition-all flex items-center gap-2 shadow-lg"
          >
            <Upload className="h-4 w-4" />
            Upload Image
          </button>
        </div>
      </div>

      {/* ─── PINTEREST GALLERY ─── */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-1">Explore Community Prompts</h2>
        <p className="text-sm text-muted-foreground">Click any design to view its exact generation prompt.</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {MOCK_GALLERY.map((item) => (
          <div 
            key={item.id}
            onClick={() => openGalleryItem(item)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer border border-border/50 bg-secondary/10 break-inside-avoid"
          >
            <img 
              src={item.url} 
              alt={item.title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <h3 className="text-white font-medium text-lg mb-1">{item.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {item.analysis.designKeywords.slice(0, 3).map(kw => (
                  <span key={kw} className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-md text-white text-[10px] font-medium uppercase tracking-wider">
                    {kw}
                  </span>
                ))}
              </div>
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                <button
                  onClick={(e) => toggleLike(e, item.id)}
                  className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md transition-colors"
                >
                  <Heart className={`w-4 h-4 ${likedImages.includes(item.id) ? 'text-red-500 fill-red-500' : 'text-white'}`} />
                </button>
                <button
                  onClick={(e) => toggleSave(e, item.id)}
                  className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md transition-colors"
                >
                  <Bookmark className={`w-4 h-4 ${savedImages.includes(item.id) ? 'text-blue-500 fill-blue-500' : 'text-white'}`} />
                </button>
              </div>
              <button className="w-full py-2 bg-white text-black font-medium text-sm rounded-lg flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4" />
                View Exact Prompt
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ─── FULLSCREEN MODAL OVERLAY ─── */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl max-h-full bg-background border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-black/10 backdrop-blur border border-white/10 flex items-center justify-center text-foreground hover:bg-black/20 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Left: Image Viewer */}
              <div className="w-full lg:w-1/2 bg-secondary/30 border-r border-border p-6 flex items-center justify-center min-h-[300px]">
                <img 
                  src={activeItem.image} 
                  alt={activeItem.name}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-md"
                />
              </div>

              {/* Right: Analysis & Prompt */}
              <div className="w-full lg:w-1/2 overflow-y-auto max-h-[80vh] p-6 sm:p-8">
                
                {activeItem.loading ? (
                  <div className="h-full flex flex-col items-center justify-center gap-6 py-20">
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-full bg-accent/10 animate-ping" />
                      <div className="relative h-14 w-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Loader2 className="h-6 w-6 text-accent animate-spin" />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-foreground font-medium mb-1">Analyzing your design...</p>
                      <p className="text-muted-foreground text-sm">
                        Extracting style, colors, and layout details
                      </p>
                    </div>
                  </div>
                ) : activeItem.analysis ? (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-display font-bold text-foreground mb-2">{activeItem.name}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {activeItem.analysis.styleSummary}
                      </p>
                    </div>

                    {/* Ready to Use Prompt (Moved to top of analysis for quick access) */}
                    <div className="relative group">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="h-4 w-4 text-accent" />
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                          Ready-to-Use Prompt
                        </h3>
                      </div>
                      <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 text-foreground/90 text-[14px] leading-relaxed font-mono whitespace-pre-wrap shadow-inner">
                        {activeItem.analysis.readyToUsePrompt}
                      </div>
                      <button
                        onClick={() => copy(activeItem.analysis!.readyToUsePrompt, "prompt")}
                        className={`
                          absolute top-10 right-3 px-3 py-1.5 rounded-lg text-xs font-medium
                          flex items-center gap-1.5 transition-all shadow-sm
                          ${
                            copiedKey === "prompt"
                              ? "bg-green-500 text-white border-green-600"
                              : "bg-background text-foreground border border-border hover:bg-secondary"
                          }
                        `}
                      >
                        {copiedKey === "prompt" ? (
                          <>
                            <Check className="h-3 w-3" /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" /> Copy
                          </>
                        )}
                      </button>
                    </div>

                    {/* Keywords */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                        Design Keywords
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {activeItem.analysis.designKeywords.map((kw) => (
                          <button
                            key={kw}
                            onClick={() => copy(kw, `kw-${kw}`)}
                            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary/70 text-foreground/80 hover:bg-accent/10 hover:text-accent border border-transparent hover:border-accent/20 transition-all cursor-copy"
                          >
                            {copiedKey === `kw-${kw}` ? (
                              <span className="flex items-center gap-1">
                                <Check className="h-3 w-3" /> Copied
                              </span>
                            ) : (
                              kw
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color Palette */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Palette className="h-4 w-4" /> Color Palette
                      </h3>
                      <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                        {activeItem.analysis.keyElements.colorPalette.map((c) => (
                          <button
                            key={c.hex}
                            onClick={() => copy(c.hex, `color-${c.hex}`)}
                            className="group flex flex-col items-center gap-1.5 cursor-copy"
                          >
                            <div
                              className="h-12 w-full rounded-lg border border-border group-hover:scale-110 transition-transform shadow-sm"
                              style={{ backgroundColor: c.hex }}
                            />
                            <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                              {copiedKey === `color-${c.hex}` ? (
                                <span className="text-accent flex items-center gap-0.5">
                                  <Check className="h-2.5 w-2.5" /> Copied
                                </span>
                              ) : (
                                c.hex
                              )}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Detailed Breakdown */}
                    <div className="space-y-4 pt-4 border-t border-border">
                      <DetailBlock icon={<Type className="h-3.5 w-3.5" />} label="Typography" text={activeItem.analysis.keyElements.typography} />
                      <DetailBlock icon={<Layout className="h-3.5 w-3.5" />} label="Layout & Composition" text={activeItem.analysis.keyElements.layout} />
                      <DetailBlock icon={<Layout className="h-3.5 w-3.5" />} label="Spacing" text={activeItem.analysis.keyElements.spacing} />
                    </div>

                  </div>
                ) : (
                  <div className="p-8 text-center text-muted-foreground">
                    Something went wrong extracting the design data.
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}

/* ─── DETAIL BLOCK COMPONENT ─── */
function DetailBlock({
  icon,
  label,
  text,
}: {
  icon: React.ReactNode
  label: string
  text: string
}) {
  if (text === "N/A") return null;
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className="text-muted-foreground">{icon}</span>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
      </div>
      <p className="text-foreground/80 text-[13.5px] leading-relaxed pl-5">{text}</p>
    </div>
  )
}
