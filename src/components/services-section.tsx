"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
import { 
  Bot, 
  Workflow, 
  Globe2, 
  BrainCircuit, 
  Blocks, 
  Clock, 
  MessageSquareHeart, 
  TrendingUp, 
  Sparkles
} from 'lucide-react'

const SERVICES = [
  {
    icon: <Bot className="w-6 h-6 text-emerald-400" />,
    title: "Complete AI OS",
    description: "Designing a comprehensive AI Operating System that serves as the intelligence layer for your entire business.",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "group-hover:border-emerald-500/50"
  },
  {
    icon: <Workflow className="w-6 h-6 text-blue-400" />,
    title: "Workflow Automation",
    description: "Automating repetitive workflows across departments to drastically reduce manual labor and operational costs.",
    color: "from-blue-500/20 to-blue-500/5",
    border: "group-hover:border-blue-500/50"
  },
  {
    icon: <Globe2 className="w-6 h-6 text-indigo-400" />,
    title: "Multilingual Voice AI",
    description: "Building personalized Voice AI Assistants capable of natural, human-like conversations across multiple languages.",
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "group-hover:border-indigo-500/50"
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
    title: "Context-Aware Agents",
    description: "Creating AI agents that deeply understand customer history, preferences, and complex business context.",
    color: "from-purple-500/20 to-purple-500/5",
    border: "group-hover:border-purple-500/50"
  },
  {
    icon: <Blocks className="w-6 h-6 text-pink-400" />,
    title: "Seamless Integration",
    description: "Connecting AI with your existing CRM, ERP, booking systems, WhatsApp, websites, and internal software.",
    color: "from-pink-500/20 to-pink-500/5",
    border: "group-hover:border-pink-500/50"
  },
  {
    icon: <Clock className="w-6 h-6 text-rose-400" />,
    title: "24/7 Operations",
    description: "Providing round-the-clock customer support, lead qualification, appointment scheduling, and sales automation.",
    color: "from-rose-500/20 to-rose-500/5",
    border: "group-hover:border-rose-500/50"
  },
  {
    icon: <MessageSquareHeart className="w-6 h-6 text-orange-400" />,
    title: "Personalized Care",
    description: "Delivering tailored recommendations and conversations that increase customer satisfaction, loyalty, and retention.",
    color: "from-orange-500/20 to-orange-500/5",
    border: "group-hover:border-orange-500/50"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-amber-400" />,
    title: "Continuous Learning",
    description: "Systems that continuously learn from every interaction to improve automation and customer experience over time.",
    color: "from-amber-500/20 to-amber-500/5",
    border: "group-hover:border-amber-500/50"
  }
]

const GEO_STRATEGIES = [
  {
    category: "TECHNICAL ACCESS",
    value: "~0%",
    title: "JS-Rendered Invisibility",
    description: "Content gated behind client-side JavaScript rendering is systematically excluded from generative engine training corpora and real-time retrieval pipelines. Server-side HTML is a prerequisite for indexation.",
    footer: "Myers & Longo, §3, Microsoft '25"
  },
  {
    category: "SCHEMA MARKUP",
    value: "Primary",
    title: "Structured Data Primacy",
    description: "Product feeds and schema markup constitute the foundational data layer for AI-driven commerce. LLMs consume structured metadata as ground-truth inputs for recommendation formulation.",
    footer: "Myers & Longo, §4, Microsoft '25"
  },
  {
    category: "OPTIMIZATION TAXONOMY",
    value: "3-Layer",
    title: "SEO → AEO → GEO Stack",
    description: "Search optimization has stratified into three distinct layers: SEO (click acquisition), AEO (answer engine clarity via enriched data), and GEO (generative credibility via authoritative voice). All three are necessary; none is sufficient alone.",
    footer: "Myers & Longo, §2, Microsoft '25"
  },
  {
    category: "KNOWLEDGE GRAPHS",
    value: "Critical",
    title: "Entity Disambiguation",
    description: "Knowledge graph disambiguation is a prerequisite for AI citation. Brands without clear entity boundaries in Wikidata, Google Knowledge Graph, or equivalent ontologies are systematically deprioritized in response generation.",
    footer: "Derived from both papers"
  },
  {
    category: "CITATION AUTHORITY",
    value: "+40.9%",
    title: "Cite Sources",
    description: "Adding citations from authoritative sources to content produced the highest mean visibility improvement across all nine optimization strategies tested on GEO-bench.",
    footer: "Aggarwal et al., Table 3, KDD '24"
  },
  {
    category: "QUANTITATIVE SIGNALS",
    value: "+37.1%",
    title: "Statistics Integration",
    description: "Embedding quantitative data — figures, percentages, comparative metrics — into content significantly increases the probability of generative engine citation across multiple domains.",
    footer: "Aggarwal et al., §5.2, KDD '24"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="relative z-10 py-24 md:py-32 overflow-hidden w-[calc(100%+2rem)] -ml-4 shrink-0">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Side: Headline & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-primary w-fit shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-widest uppercase">Our Services</span>
            </div>
            
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-normal text-foreground tracking-tight leading-[1.1] ${playfair.className}`}>
              We Help Businesses Grow in the <br /><span className="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">AI-Era</span>.
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mt-4 font-light">
              We build complete AI Operating Systems, helping businesses automate workflows and retain maximum customers by creating personalized multilingual Voice Assistants tailored to their unique needs.
            </p>
          </motion.div>

          {/* Right Side: Interactive Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4 relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-blue-500/20 blur-[100px] -z-10 rounded-full" />
            
            <div className="group relative p-6 md:p-8 rounded-3xl bg-background/40 backdrop-blur-xl border border-border/50 shadow-lg hover:bg-background/60 hover:shadow-xl hover:border-primary/30 transition-all duration-500 overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-2xl">🎥</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">AI Ad Production</h4>
                  <p className="text-muted-foreground leading-relaxed">High-converting video ads produced in record time. Storytelling that converts effortlessly.</p>
                </div>
              </div>
            </div>

            <div className="group relative p-6 md:p-8 rounded-3xl bg-background/40 backdrop-blur-xl border border-border/50 shadow-lg hover:bg-background/60 hover:shadow-xl hover:border-blue-500/30 transition-all duration-500 overflow-hidden cursor-default ml-0 md:ml-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">AI Automation Systems</h4>
                  <p className="text-muted-foreground leading-relaxed">Replace inefficiency with speed, accuracy, and scale. Tools that save time and compound output.</p>
                </div>
              </div>
            </div>

            <div className="group relative p-6 md:p-8 rounded-3xl bg-background/40 backdrop-blur-xl border border-border/50 shadow-lg hover:bg-background/60 hover:shadow-xl hover:border-purple-500/30 transition-all duration-500 overflow-hidden cursor-default ml-0 md:ml-16">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Creative + Strategy</h4>
                  <p className="text-muted-foreground leading-relaxed">The result: More revenue. Less time. No wasted spend. Strategic execution that compounds.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* AI/GEO Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          {/* Card 1 (Hero Intro) - Spans 2 columns */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-8 rounded-3xl bg-background/60 backdrop-blur-xl border border-border/50 shadow-lg flex flex-col justify-center"
          >
            <h3 className={`text-2xl md:text-3xl font-normal text-foreground mb-4 leading-tight ${playfair.className}`}>
              People no longer browse pages of links—they ask AI for answers.
            </h3>
            <p className="text-muted-foreground text-lg mb-4">
              ChatGPT, Gemini, Perplexity, and other AI assistants don’t rank websites. They evaluate entities, verify sources, synthesize information, and recommend the brands they trust.
            </p>
            <p className="text-muted-foreground text-lg">
              That means visibility is no longer determined by keywords alone. It’s driven by structured data, authoritative mentions, semantic relationships, and machine-readable credibility.
            </p>
          </motion.div>

          {/* Card 2 (+40%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-primary/5 backdrop-blur-xl border border-primary/20 shadow-lg flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-5xl md:text-6xl font-extrabold text-primary mb-4 block">+40%</span>
            <span className="text-foreground font-semibold text-lg leading-snug">Visibility improvement from structured AI optimization</span>
          </motion.div>

          {/* Card 3 (62%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-background/60 backdrop-blur-xl border border-border/50 shadow-lg flex flex-col justify-center"
          >
            <span className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 block">62%</span>
            <span className="text-muted-foreground font-medium text-base">of Gen Z and Millennials begin product research with AI assistants</span>
          </motion.div>

          {/* Card 4 (0%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-3xl bg-background/60 backdrop-blur-xl border border-border/50 shadow-lg flex flex-col justify-center"
          >
            <span className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 block">0%</span>
            <span className="text-muted-foreground font-medium text-base">Traditional ad spend directly influences AI recommendations</span>
          </motion.div>

          {/* Card 5 (Warning Callout) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-3xl bg-orange-500/10 backdrop-blur-xl border border-orange-500/20 shadow-lg flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="text-xl font-bold text-orange-500 mb-3 leading-tight">If AI can’t understand your business, it won’t recommend it.</p>
            <p className="text-foreground font-medium">The companies winning tomorrow are optimizing for AI today.</p>
          </motion.div>

          {/* Card 6 (Bottom wide) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-3 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-background/80 to-background/40 backdrop-blur-xl border border-border/50 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <span className="text-sm font-mono tracking-wider text-muted-foreground uppercase mb-2 block">The Modern Visibility Stack</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">3 Layers</h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:gap-6 text-lg md:text-2xl font-bold text-muted-foreground">
              <span className="hover:text-foreground transition-colors">SEO</span>
              <span className="text-primary/50">→</span>
              <span className="hover:text-foreground transition-colors">AEO</span>
              <span className="text-primary/50">→</span>
              <span className="text-primary font-extrabold">GEO</span>
            </div>
          </motion.div>

        </div>

        </div>

        {/* Edge-to-Edge Marquees Container */}
        <div className="relative w-full flex flex-col gap-6 py-10 mt-10">
          {/* First Marquee (Services) */}
          <div className="flex overflow-hidden group">
            <motion.div
              className="flex gap-6 min-w-max pr-6"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
              {[...SERVICES, ...SERVICES].map((service, index) => (
                <div
                  key={`marquee-1-${index}`}
                  className={`group relative p-8 w-[350px] shrink-0 rounded-3xl bg-background/60 dark:bg-background/40 backdrop-blur-2xl border border-border/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] hover:bg-background/80 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] hover:border-primary/50 transition-all duration-500 overflow-hidden ${service.border}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-background/80 backdrop-blur-md border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              className="flex gap-6 min-w-max pr-6"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
              {[...SERVICES, ...SERVICES].map((service, index) => (
                <div
                  key={`marquee-2-${index}`}
                  className={`group relative p-8 w-[350px] shrink-0 rounded-3xl bg-background/60 dark:bg-background/40 backdrop-blur-2xl border border-border/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] hover:bg-background/80 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] hover:border-primary/50 transition-all duration-500 overflow-hidden ${service.border}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-background/80 backdrop-blur-md border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Marquee (GEO Strategies) */}
          <div className="flex overflow-hidden group">
            <motion.div
              className="flex gap-6 min-w-max pr-6"
              animate={{ x: ["-100%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
            >
              {[...GEO_STRATEGIES, ...GEO_STRATEGIES].map((geo, index) => (
                <div
                  key={`geo-1-${index}`}
                  className="group relative flex flex-col p-8 w-[350px] md:w-[400px] shrink-0 rounded-3xl bg-[#0a0a0a]/80 dark:bg-[#0a0a0a]/90 backdrop-blur-2xl border border-border/40 dark:border-white/10 shadow-xl hover:border-lime-500/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono tracking-wider text-muted-foreground/80 uppercase bg-white/5 px-2 py-1 rounded">
                        {geo.category}
                      </span>
                      <span className="text-lg font-mono font-semibold text-lime-400">
                        {geo.value}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-serif text-white mb-4 leading-tight">
                      {geo.title}
                    </h3>
                    
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
                      {geo.description}
                    </p>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-[10px] font-mono italic text-zinc-500">
                        {geo.footer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              className="flex gap-6 min-w-max pr-6"
              animate={{ x: ["-100%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
            >
              {[...GEO_STRATEGIES, ...GEO_STRATEGIES].map((geo, index) => (
                <div
                  key={`geo-2-${index}`}
                  className="group relative flex flex-col p-8 w-[350px] md:w-[400px] shrink-0 rounded-3xl bg-[#0a0a0a]/80 dark:bg-[#0a0a0a]/90 backdrop-blur-2xl border border-border/40 dark:border-white/10 shadow-xl hover:border-lime-500/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono tracking-wider text-muted-foreground/80 uppercase bg-white/5 px-2 py-1 rounded">
                        {geo.category}
                      </span>
                      <span className="text-lg font-mono font-semibold text-lime-400">
                        {geo.value}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-serif text-white mb-4 leading-tight">
                      {geo.title}
                    </h3>
                    
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
                      {geo.description}
                    </p>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-[10px] font-mono italic text-zinc-500">
                        {geo.footer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 border border-primary/20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to automate your operations?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Deploy an intelligent digital workforce capable of handling customer interactions and complex business processes with minimal human intervention.
          </p>
          <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform shadow-lg">
            Book a Strategy Call
          </button>
        </motion.div>
      </div>
    </section>
  )
}
// force rebuild
// force rebuild 2
