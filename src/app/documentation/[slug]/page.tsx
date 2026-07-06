"use client"

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, User, Layers, ArrowRight } from 'lucide-react'
import { getArticleBySlug, blogArticles } from '@/lib/blog-data'
import { PublicNavbar } from '@/components/public-navbar'

export default function ArticlePage() {
  const params = useParams()
  const slug = params?.slug as string
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center font-body">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/documentation" className="text-accent hover:underline font-medium">
            ← Back to Documentation
          </Link>
        </div>
      </div>
    )
  }

  // Get related articles (same category, excluding current)
  const related = blogArticles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2)
  
  // If not enough related in same category, fill from other articles
  const additionalRelated = related.length < 2
    ? blogArticles.filter((a) => a.slug !== article.slug && !related.includes(a)).slice(0, 2 - related.length)
    : []
  const allRelated = [...related, ...additionalRelated]

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <PublicNavbar className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40" />

      {/* Gradient header bar */}
      <div className={`h-2 bg-gradient-to-r ${article.coverGradient}`} />

      {/* Back link */}
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/documentation" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </motion.div>
      </div>

      {/* Article Header */}
      <article className="max-w-3xl mx-auto px-4 pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 bg-gradient-to-r ${article.coverGradient} text-white`}>
            {article.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-display leading-[1.05] tracking-tight mb-6">
            {article.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {article.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border/40">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span className="font-medium text-foreground">{article.author}</span>
              <span className="text-muted-foreground/60">·</span>
              <span>{article.authorRole}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {article.readTime}
            </span>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="pt-10"
        >
          {article.content.map((block, i) => {
            // Headings
            if (block.startsWith("### ")) {
              return (
                <h3 key={i} className="text-lg font-bold tracking-tight mt-10 mb-3 text-foreground">
                  {block.replace("### ", "")}
                </h3>
              )
            }
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-display font-bold tracking-tight mt-12 mb-4 text-foreground border-b border-border/30 pb-3">
                  {block.replace("## ", "")}
                </h2>
              )
            }

            // Code blocks
            if (block.startsWith("```")) {
              const lines = block.split("\n")
              const lang = lines[0].replace("```", "")
              const code = lines.slice(1, -1).join("\n")
              return (
                <div key={i} className="my-6 rounded-xl overflow-hidden border border-border bg-[#1a1a2e] shadow-lg">
                  {lang && (
                    <div className="px-4 py-2 text-[11px] font-mono text-gray-400 border-b border-white/10 bg-white/5 uppercase tracking-wider">
                      {lang}
                    </div>
                  )}
                  <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto text-gray-200">
                    <code>{code}</code>
                  </pre>
                </div>
              )
            }

            // Bold/emphasized paragraphs with newlines (step lists)
            if (block.includes("\n")) {
              return (
                <div key={i} className="my-4 space-y-2">
                  {block.split("\n").map((line, j) => (
                    <p key={j} className="text-base leading-relaxed text-foreground/85"
                      dangerouslySetInnerHTML={{
                        __html: line
                          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em>$1</em>')
                          .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-secondary text-sm font-mono text-accent">$1</code>')
                          .replace(/^- (.*)/, '• $1')
                      }}
                    />
                  ))}
                </div>
              )
            }

            // Table blocks
            if (block.includes("|") && block.includes("---")) {
              const rows = block.split("\n").filter(r => r.trim() && !r.includes("---"))
              const headers = rows[0]?.split("|").filter(Boolean).map(h => h.trim())
              const dataRows = rows.slice(1).map(r => r.split("|").filter(Boolean).map(c => c.trim()))

              return (
                <div key={i} className="my-8 overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead className="bg-secondary/60">
                      <tr>
                        {headers?.map((h, hi) => (
                          <th key={hi} className="px-4 py-3 text-left font-semibold text-foreground">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {dataRows.map((row, ri) => (
                        <tr key={ri} className="border-t border-border/40">
                          {row.map((cell, ci) => (
                            <td key={ci} className="px-4 py-3 text-muted-foreground">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            }

            // Regular paragraphs
            return (
              <p key={i} className="text-base leading-[1.8] text-foreground/85 mb-5"
                dangerouslySetInnerHTML={{
                  __html: block
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                    .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-secondary text-sm font-mono text-accent">$1</code>')
                    .replace(/^- (.*)/, '• $1')
                }}
              />
            )
          })}
        </motion.div>
      </article>

      {/* Related Articles */}
      {allRelated.length > 0 && (
        <section className="border-t border-border/40 bg-secondary/20 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold tracking-tight mb-8">Continue Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allRelated.map((rel) => (
                <Link key={rel.slug} href={`/documentation/${rel.slug}`} className="block group">
                  <div className="rounded-2xl border border-border bg-background hover:border-foreground/20 hover:shadow-md transition-all duration-300 overflow-hidden">
                    <div className={`h-1.5 bg-gradient-to-r ${rel.coverGradient}`} />
                    <div className="p-5">
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                        {rel.category}
                      </span>
                      <h3 className="text-base font-bold tracking-tight mt-2 mb-2 group-hover:text-accent transition-colors leading-snug">
                        {rel.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {rel.readTime}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
