"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Wand2, LayoutTemplate, Workflow, Sparkles, Database, Mail, BarChart } from 'lucide-react'

const features = [
  {
    title: "Instant Web Generation",
    description: "Generate beautiful, responsive UI structures and boilerplate logic from a single text prompt using our advanced AI generation engine.",
    icon: <Wand2 className="w-5 h-5 text-purple-500" />,
    className: "md:col-span-2 bg-gradient-to-br from-background via-background to-purple-900/10",
    visual: (
      <div className="mt-6 flex gap-2 overflow-hidden h-24 sm:h-32 mask-image-bottom">
        <div className="w-full bg-secondary/50 rounded-t-xl border border-border flex flex-col pt-3 px-4 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="space-y-2">
            <div className="w-3/4 h-2 bg-foreground/10 rounded-full"></div>
            <div className="w-1/2 h-2 bg-foreground/10 rounded-full"></div>
            <div className="w-5/6 h-2 bg-foreground/10 rounded-full"></div>
            <div className="flex gap-2 mt-4">
               <div className="w-8 h-8 rounded bg-purple-500/20"></div>
               <div className="w-8 h-8 rounded bg-blue-500/20"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "150+ Templates",
    description: "Jumpstart your development with beautifully crafted, accessible React templates from Legal UI to complex dashboards.",
    icon: <LayoutTemplate className="w-5 h-5 text-blue-500" />,
    className: "md:col-span-1 bg-gradient-to-br from-background to-blue-900/10",
    visual: (
      <div className="mt-6 grid grid-cols-2 gap-2 mask-image-bottom h-24 sm:h-32">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-secondary/40 rounded-lg p-2 border border-border/50">
             <div className="w-full h-8 bg-foreground/5 rounded mb-2"></div>
             <div className="w-2/3 h-1.5 bg-foreground/10 rounded"></div>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Deep Integrations",
    description: "Seamlessly push your prototypes, connect your workflows with HubSpot, Twitter, Outlook, and Google Workspace.",
    icon: <Database className="w-5 h-5 text-orange-500" />,
    className: "md:col-span-1 bg-gradient-to-br from-background to-orange-900/10",
    visual: (
      <div className="mt-8 flex justify-center items-center relative h-24 sm:h-32">
        <div className="absolute inset-0 bg-transparent flex justify-center items-center">
           <div className="w-16 h-16 rounded-full border border-dashed border-orange-500/30 animate-[spin_8s_linear_infinite]"></div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
           <div className="w-24 h-24 rounded-full border border-dashed border-orange-500/20 animate-[spin_12s_linear_infinite_reverse]"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-3 relative z-10 w-full px-4">
           <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center"><BarChart className="w-4 h-4 text-orange-500" /></div>
           <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center"><Mail className="w-4 h-4 text-blue-500" /></div>
           <div className="w-8 h-8 rounded-lg bg-foreground/10 border border-foreground/20 flex items-center justify-center"><span className="text-[12px] font-bold">𝕏</span></div>
        </div>
      </div>
    )
  },
  {
    title: "Automated Workflows",
    description: "Construct powerful, multi-step operations connecting generative AI with your daily tools, all with zero-configuration.",
    icon: <Workflow className="w-5 h-5 text-emerald-500" />,
    className: "md:col-span-2 bg-gradient-to-br from-background via-background to-emerald-900/10",
    visual: (
      <div className="mt-6 relative h-24 sm:h-32 w-full mask-image-bottom pl-4 pr-10">
        <div className="flex items-center">
           <div className="w-20 pl-2 pr-4 py-2 bg-secondary rounded-lg border border-border shadow-sm text-xs font-semibold flex items-center gap-2 z-10 relative">
             <Mail className="w-3 h-3"/> Trigger
           </div>
           <div className="flex-1 h-px bg-emerald-500/40 relative">
             <div className="absolute w-2 h-2 rounded-full bg-emerald-400 left-1/2 -top-1 blur-[1px]"></div>
           </div>
           <div className="w-24 px-3 py-2 bg-secondary rounded-lg border border-border shadow-sm text-xs font-semibold flex items-center gap-2 z-10 relative">
             <Sparkles className="w-3 h-3 text-emerald-500"/> Extract AI
           </div>
           <div className="w-8 h-px bg-emerald-500/40"></div>
           <div className="w-20 px-3 py-2 bg-secondary rounded-lg border border-border shadow-sm text-xs font-semibold flex items-center gap-2 z-10 relative">
             <Database className="w-3 h-3"/> Store
           </div>
        </div>
        
        {/* Decorative lines below */}
        <div className="absolute left-10 top-12 w-px h-16 bg-border"></div>
        <div className="absolute left-10 top-[112px] w-20 h-px bg-border"></div>
        <div className="absolute left-[120px] top-[100px] px-3 py-2 bg-secondary/50 rounded-lg border border-border/50 text-[10px] text-muted-foreground">Alert User</div>
      </div>
    )
  }
]

export function FeaturesSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 font-body">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4 opacity-80">Capabilities</h2>
        <h3 className="text-3xl md:text-5xl font-display font-bold max-w-2xl mb-4 leading-tight">
          Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">build faster</span>.
        </h3>
        <p className="text-muted-foreground text-lg max-w-xl">
          Discover a complete ecosystem of generative tools, UI templates, and automation protocols right out of the box.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
        {features.map((feature, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            key={i}
            className={`rounded-[32px] p-6 lg:p-8 flex flex-col relative overflow-hidden border border-border shadow-sm group hover:border-foreground/20 transition-colors ${feature.className}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-background border border-border flex items-center justify-center shadow-sm">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold tracking-tight">{feature.title}</h4>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              {feature.description}
            </p>

            <div className="mt-auto pointer-events-none transform group-hover:-translate-y-1 transition-transform duration-500">
              {feature.visual}
            </div>
            
            <style jsx>{`
              .mask-image-bottom {
                mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
              }
            `}</style>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
