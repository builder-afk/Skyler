"use client"

import React, { useState, useMemo } from 'react'
import { Search, ArrowRight, LayoutTemplate, User, ChevronLeft, ChevronRight, Heart, Bookmark } from 'lucide-react'
import { toast } from 'sonner'
import { motion, AnimatePresence, type Variants } from 'framer-motion'

import { CATEGORIES, TEMPLATES_BY_CATEGORY, type EnhancedTemplateItem, type TemplateSection } from '@/lib/data/templates';
import { PromptPreviewModal } from '@/components/prompt-preview-modal';

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("General")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState<EnhancedTemplateItem | null>(null)

  const [likedTemplates, setLikedTemplates] = useState<string[]>([])
  const [savedTemplates, setSavedTemplates] = useState<string[]>([])

  const toggleLike = (e: React.MouseEvent, title: string) => {
    e.stopPropagation()
    setLikedTemplates(prev => prev.includes(title) ? prev.filter(x => x !== title) : [...prev, title])
  }

  const toggleSave = (e: React.MouseEvent, title: string) => {
    e.stopPropagation()
    setSavedTemplates(prev => {
      const isSaved = prev.includes(title)
      toast.success(isSaved ? "Removed from saved" : "Saved to your library")
      return isSaved ? prev.filter(x => x !== title) : [...prev, title]
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  // Filter templates based on active category and search query
  const filteredTemplates = useMemo(() => {
    if (!searchQuery.trim()) {
      if (activeCategory === "All Templates") {
        return Object.values(TEMPLATES_BY_CATEGORY).flat();
      }
      return TEMPLATES_BY_CATEGORY[activeCategory] || [];
    }

    const query = searchQuery.toLowerCase();
    const results: TemplateSection[] = [];
    
    // Search across ALL categories globally
    Object.values(TEMPLATES_BY_CATEGORY).flat().forEach(section => {
      const matchedItems = section.items.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.desc.toLowerCase().includes(query)
      );
      
      if (matchedItems.length > 0) {
        results.push({
          ...section,
          items: matchedItems
        });
      }
    });
    
    return results;
  }, [searchQuery, activeCategory]);

  return (
    <div className="w-full max-w-[1200px] mx-auto py-4 px-4 sm:px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-display font-semibold tracking-tight mb-2 flex items-center gap-3">
            <LayoutTemplate className="w-8 h-8 text-primary" />
            Discover
          </h1>
          <p className="text-muted-foreground text-sm font-medium">Ready-to-use prompts across every role. Pick one and make it yours.</p>
        </div>
        <div className="relative w-full md:w-[320px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search templates..."
            className="w-full bg-secondary/30 border border-border/50 text-foreground placeholder-muted-foreground rounded-full pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
      </div>

      {/* Pill Navigation */}
      <div className="flex overflow-x-auto pb-4 mb-4 gap-2 no-scrollbar scroll-smooth">
        <button
          onClick={() => { setActiveCategory("All Templates"); setSearchQuery(""); }}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
            activeCategory === "All Templates" && !searchQuery
              ? 'bg-primary/10 border-primary/30 text-primary shadow-sm' 
              : 'bg-transparent border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50'
          }`}
        >
          All Templates
        </button>
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => { setActiveCategory(category); setSearchQuery(""); }}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeCategory === category && !searchQuery
                ? 'bg-primary/10 border-primary/30 text-primary shadow-sm'
                : 'bg-transparent border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-12 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={searchQuery ? 'search' : activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-12"
          >
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((section, sectionIdx) => (
                <motion.div
                  key={section.category + sectionIdx}
                  initial="hidden"
                  animate="show"
                  variants={containerVariants}
                >
                  <div className="flex items-center gap-3 mb-6 ml-1 sm:ml-12">
                    <div className="p-2 bg-secondary/40 rounded-lg border border-border/30">
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-foreground tracking-tight">{section.category}</h2>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <button className="hidden sm:flex items-center justify-center p-2 rounded-full hover:bg-secondary/80 text-border hover:text-muted-foreground transition-colors shrink-0 group">
                      <ChevronLeft className="w-5 h-5 opacity-60 group-hover:opacity-100" />
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full flex-1">
                      {section.items.map((item, itemIdx) => (
                        <motion.div
                          key={itemIdx}
                          variants={itemVariants}
                          onClick={() => setSelectedTemplate(item)}
                          className="group/card flex flex-col h-full bg-background border border-border/60 hover:border-primary/40 rounded-2xl p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer text-left relative overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                          
                          <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover/card:opacity-100 transition-opacity">
                            <button
                              onClick={(e) => toggleLike(e, item.title)}
                              className="p-1.5 rounded-full bg-secondary/80 hover:bg-secondary text-muted-foreground transition-colors"
                            >
                              <Heart className={`w-3.5 h-3.5 ${likedTemplates.includes(item.title) ? 'text-red-500 fill-red-500' : ''}`} />
                            </button>
                            <button
                              onClick={(e) => toggleSave(e, item.title)}
                              className="p-1.5 rounded-full bg-secondary/80 hover:bg-secondary text-muted-foreground transition-colors"
                            >
                              <Bookmark className={`w-3.5 h-3.5 ${savedTemplates.includes(item.title) ? 'text-blue-500 fill-blue-500' : ''}`} />
                            </button>
                          </div>

                          <h3 className="font-semibold text-[15px] leading-snug text-foreground mb-3 pr-8">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                            {item.desc}
                          </p>
                          <div className="flex w-full items-center justify-between mt-auto">
                            <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5 opacity-70 group-hover/card:opacity-100 transition-opacity">
                              <User className="w-3.5 h-3.5" />
                              {item.author}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-secondary/50 group-hover/card:bg-primary text-muted-foreground group-hover/card:text-primary-foreground flex items-center justify-center transition-colors">
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <button className="hidden sm:flex items-center justify-center p-2 rounded-full hover:bg-secondary/80 text-border hover:text-muted-foreground transition-colors shrink-0 group">
                      <ChevronRight className="w-5 h-5 opacity-60 group-hover:opacity-100" />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-muted-foreground border border-dashed border-border/50 rounded-2xl">
                <LayoutTemplate className="w-8 h-8 mb-4 opacity-50" />
                <p className="font-medium text-foreground">No templates found.</p>
                <p className="text-sm opacity-70 mt-1">Try a different search term or category.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <PromptPreviewModal 
        item={selectedTemplate} 
        isOpen={!!selectedTemplate} 
        onClose={() => setSelectedTemplate(null)} 
      />
    </div>
  )
}
