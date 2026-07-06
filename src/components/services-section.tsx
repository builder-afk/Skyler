"use client"

import React from 'react'
import { motion } from 'framer-motion'
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

export function ServicesSection() {
  return (
    <section id="services" className="relative z-10 py-24 md:py-32 overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-primary mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide uppercase">Our Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6"
          >
            The Intelligence Layer for Your Business
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed space-y-6 text-left max-w-2xl mx-auto"
          >
            <p className="text-center">
              We build complete AI Operating Systems helping businesses automate workflows and retain maximum customers by creating personalized multilingual Voice Assistants tailored to their unique needs.
            </p>
            <div className="pt-4 border-t border-border/50">
              <p className="mb-4">
                AI Ad Systems that produce high-converting video ads in record time and AI Automations that replace inefficiency with speed, accuracy, and scale.
              </p>
              <p className="font-semibold text-foreground mb-4">
                The result: More revenue. Less time. No wasted spend.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">🔹</span>
                  <span><strong className="text-foreground font-semibold">AI Ad Production</strong> – Storytelling that converts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">🔹</span>
                  <span><strong className="text-foreground font-semibold">AI Automation Systems</strong> – Tools that save time & scale output.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">🔹</span>
                  <span><strong className="text-foreground font-semibold">Creative + Strategy</strong> – Execution that compounds.</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-border/50">
              <p className="mb-4 font-bold text-foreground text-xl">
                SEO is evolving, AI is the new search.
              </p>
              <p className="mb-4">
                Our AI optimization platform helps your business become discoverable across both search engines and AI-powered answer engines, bridging the gap between SEO and Generative Engine Optimization (GEO).
              </p>
              <p className="font-semibold text-primary">
                Be the answer AI recommends.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-6 rounded-3xl bg-background border border-border shadow-sm hover:border-primary/30 transition-all duration-500 overflow-hidden ${service.border}`}
            >
              {/* Card gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

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
