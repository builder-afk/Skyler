"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Layers, BookOpen, Sparkles } from 'lucide-react'
import { PublicNavbar } from '@/components/public-navbar'
import { blogArticles, BLOG_CATEGORIES, getArticlesByCategory } from '@/lib/blog-data'

export default function DocumentationPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const filtered = getArticlesByCategory(activeCategory)
  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <PublicNavbar className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40" />

      {/* Hero */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground mb-6"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Learn from the experts
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display leading-[0.95] tracking-tight mb-5"
          >
            The Skyler <span className="italic">Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Deep dives into context engineering, prompt engineering, AI agents, and the future of AI-assisted development. Level up your AI coding workflow.
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-4 pb-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-foreground text-background shadow-md"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="px-4 pb-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href={`/documentation/${featured.slug}`} className="block group">
                <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${featured.coverGradient} p-8 md:p-12 min-h-[280px] flex flex-col justify-end shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  {/* Decorative patterns */}
                  <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                    <div className="absolute top-8 right-8 w-32 h-32 border border-white/40 rounded-full" />
                    <div className="absolute top-20 right-20 w-48 h-48 border border-white/20 rounded-full" />
                    <div className="absolute -top-4 right-32 w-16 h-16 border border-white/30 rounded-full" />
                  </div>

                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-4 backdrop-blur-sm">
                      {featured.category}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-display text-white leading-tight mb-3 max-w-2xl">
                      {featured.title}
                    </h2>
                    <p className="text-white/80 text-sm md:text-base max-w-xl leading-relaxed mb-4">
                      {featured.description}
                    </p>
                    <div className="flex items-center gap-4 text-white/70 text-sm">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> {featured.readTime}
                      </span>
                      <span>{featured.date}</span>
                      <span className="ml-auto flex items-center gap-1 text-white font-medium group-hover:gap-2 transition-all">
                        Read article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
              >
                <Link href={`/documentation/${article.slug}`} className="block group h-full">
                  <div className="h-full rounded-2xl border border-border bg-background hover:border-foreground/20 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                    {/* Color bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${article.coverGradient}`} />
                    
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block self-start px-2.5 py-1 rounded-full bg-secondary text-muted-foreground text-[11px] font-semibold mb-4 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <h3 className="text-lg font-bold tracking-tight leading-snug mb-2 group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border/40">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {article.readTime}
                          </span>
                          <span>{article.date}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {rest.length === 0 && filtered.length <= 1 && (
            <div className="text-center py-16 text-muted-foreground">
              <Sparkles className="w-8 h-8 mx-auto mb-4 opacity-40" />
              <p className="text-lg font-medium">More articles coming soon!</p>
              <p className="text-sm mt-1">Check back for new content in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <Layers className="h-4 w-4 text-accent" /> Skyler
          </div>
          <p>© 2026 Skyler. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
