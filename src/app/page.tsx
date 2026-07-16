"use client"

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, ChevronDown, ChevronRight, Play, Plus, Search, MoreVertical, Code2, Sparkles, Server, LayoutTemplate, Copy, CheckCircle2, ArrowRight, Mic, Paperclip, Settings, Layers, ImagePlus, FileUp, X, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PublicNavbar } from '@/components/public-navbar'
import { FeaturesSection } from '@/components/features-section'
import { MarketplaceSection } from '@/components/marketplace-section'
import { Footer } from '@/components/footer'
import { ServicesSection } from '@/components/services-section'

const PROMPT_TYPES = [
  { id: "Backend Architecture", name: "Backend Architecture", desc: "Design backend architecture" },
  { id: "SaaS Planner", name: "SaaS Planner", desc: "Plan a SaaS application" },
  { id: "AI Agent Planner", name: "AI Agent Planner", desc: "Plan AI agent systems" },
  { id: "Database Designer", name: "Database Designer", desc: "Design database schemas" },
  { id: "API Designer", name: "API Designer", desc: "Design REST/GraphQL APIs" },
  { id: "Microservice Planner", name: "Microservice Planner", desc: "Plan microservices" },
  { id: "Infrastructure Planner", name: "Infrastructure Planner", desc: "Plan cloud infrastructure" },
  { id: "Security Auditor", name: "Security Auditor", desc: "Audit and plan security" },
  { id: "DevOps Planner", name: "DevOps Planner", desc: "Plan CI/CD & DevOps" },
]

const MODELS = [
  { id: "gpt-4o", name: "GPT-4o" },
  { id: "claude-3-5-sonnet", name: "Claude 3.5 Sonnet" },
  { id: "gemini-1-5-pro", name: "Gemini 1.5 Pro" },
  { id: "basic-model", name: "Basic Model" },
]

const HERO_FEATURE_SUGGESTIONS = [
  [
    { icon: '🔑', label: 'Social Login' },
    { icon: '💳', label: 'Stripe Billing' },
    { icon: '🌙', label: 'Dark Mode' },
    { icon: '📈', label: 'Analytics Dashboard' },
    { icon: '🤖', label: 'AI Chatbot' },
  ],
  [
    { icon: '🔔', label: 'Push Notifications' },
    { icon: '⌨️', label: 'Command Palette' },
    { icon: '📁', label: 'File Uploads' },
    { icon: '🛡️', label: 'Role-Based Access' },
    { icon: '⭐', label: 'Social Proof' },
  ],
  [
    { icon: '📡', label: 'Offline Mode' },
    { icon: '🎯', label: 'Onboarding Tour' },
    { icon: '📧', label: 'Email System' },
    { icon: '🔍', label: 'Smart Search' },
    { icon: '👥', label: 'Real-Time Collab' },
  ],
]

export default function LandingPage() {
  const [promptType, setPromptType] = useState("Backend Architecture")
  const [selectedModel, setSelectedModel] = useState("Claude 3.5 Sonnet")
  const [attachments, setAttachments] = useState<{name: string, type: string}[]>([])
  const [heroSuggestionIdx, setHeroSuggestionIdx] = useState(0)
  const [promptText, setPromptText] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSuggestionIdx(prev => (prev + 1) % HERO_FEATURE_SUGGESTIONS.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setAttachments(prev => [...prev, { name: file.name, type }])
      e.target.value = ''
    }
  }

  const removeAttachment = (indexToRemove: number) => {
    setAttachments(prev => prev.filter((_, index) => index !== indexToRemove))
  }

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden relative font-body text-foreground">
      {/* Hero Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4" type="video/mp4" />
      </video>

      {/* Navbar - Needs z-50 to be above video */}
      <PublicNavbar />

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center w-full flex-1 pt-12 md:pt-20 px-4">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground font-body mb-6 backdrop-blur-sm"
        >
          Empowering Modern Businesses 🚀
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-display text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-tight text-foreground max-w-4xl"
        >
          We Help Businesses Grow in the <span className="italic text-accent">AI-Era</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-center text-base md:text-lg text-muted-foreground max-w-[650px] leading-relaxed font-body"
        >
          Getting them built with personalized AI agents for CRM. Automate repetitive workflows, connect your existing tools, and deliver exceptional customer experiences with zero hassle.
        </motion.p>

        {/* Interactive Prompt Box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 w-full max-w-3xl relative"
        >
          <div className="rounded-2xl bg-background/80 backdrop-blur-xl border border-border/60 shadow-2xl overflow-hidden p-2">
            <textarea 
              className="w-full bg-transparent border-0 focus:ring-0 p-4 min-h-[140px] outline-none text-foreground text-base border-none resize-none placeholder:text-muted-foreground/60 transition-colors pb-2"
              placeholder="Describe your business and what you want your CRM AI agent to automate... (e.g. 'I run a dental clinic and need a voice assistant to schedule appointments and follow up with patients.')"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey && promptText.trim()) {
                  e.preventDefault()
                  router.push(`/architecture-plan?idea=${encodeURIComponent(promptText.trim())}`)
                }
              }}
            />
            
            {attachments.length > 0 && (
              <div className="flex flex-wrap gap-2 px-4 pb-3">
                {attachments.map((file, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 bg-secondary text-secondary-foreground text-[11px] font-medium px-2 py-1 rounded-md border border-border">
                    {file.type === 'image' ? <ImagePlus className="w-3 h-3 text-muted-foreground" /> : <FileUp className="w-3 h-3 text-muted-foreground" />}
                    <span className="max-w-[120px] truncate">{file.name}</span>
                    <button onClick={() => removeAttachment(idx)} className="hover:text-destructive transition-colors ml-0.5" aria-label="Remove attachment">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Hidden file inputs */}
            <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => handleFileUpload(e, 'file')} />
            <input type="file" accept="image/*" ref={imageInputRef} className="hidden" onChange={(e) => handleFileUpload(e, 'image')} />

            <div className="flex items-center justify-between px-3 pb-2 pt-2 border-t border-border/30">
              <div className="flex items-center gap-4 text-muted-foreground w-full">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1.5 text-xs font-medium hover:text-foreground transition-colors text-foreground px-1 py-1.5 rounded-full outline-none focus:outline-none focus:ring-0">
                    Prompt type: {promptType}
                    <Sparkles className="w-3.5 h-3.5 ml-1 text-accent" />
                    <ChevronDown className="w-3 h-3 text-muted-foreground ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[280px] p-1.5 rounded-xl border border-border shadow-md bg-background/95 backdrop-blur-md">
                    {PROMPT_TYPES.map(pt => (
                      <DropdownMenuItem 
                        key={pt.id} 
                        onClick={() => setPromptType(pt.id)}
                        className="flex flex-col items-start gap-0.5 rounded-lg py-2 px-3 cursor-pointer focus:bg-secondary"
                      >
                        <span className="text-sm font-semibold text-foreground">
                          {pt.name}{' '}
                          {pt.desc && <span className="font-normal text-muted-foreground">{pt.desc}</span>}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="flex flex-1 items-center gap-3 justify-end sm:justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground transition-colors text-xs font-medium outline-none focus:outline-none focus:ring-0">
                      {selectedModel} <ChevronDown className="w-3 h-3" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px] p-1.5 rounded-xl border border-border shadow-md bg-background/95 backdrop-blur-md">
                      {MODELS.map(m => (
                        <DropdownMenuItem 
                          key={m.id} 
                          onClick={() => setSelectedModel(m.name)}
                          className="flex items-center gap-2 rounded-lg py-2 px-3 cursor-pointer focus:bg-secondary"
                        >
                          <span className="text-sm font-medium text-foreground">{m.name}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <div className="h-4 w-px bg-border/60 mx-1" />

                  <button 
                    onClick={() => imageInputRef.current?.click()} 
                    className="hover:text-foreground transition-colors text-muted-foreground"
                    title="Upload Image"
                  >
                    <ImagePlus className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => fileInputRef.current?.click()} 
                    className="hover:text-foreground transition-colors text-muted-foreground"
                    title="Upload File"
                  >
                    <FileUp className="w-4 h-4" />
                  </button>
                  <button 
                    className="hover:text-foreground transition-colors text-muted-foreground"
                    title="Voice Input"
                  >
                    <Mic className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button 
                onClick={() => {
                  if (promptText.trim()) {
                    router.push(`/architecture-plan?idea=${encodeURIComponent(promptText.trim())}`)
                  }
                }}
                className="ml-4 bg-foreground text-background hover:bg-foreground/90 flex items-center justify-center w-8 h-8 rounded-full transition-transform active:scale-95 shadow-sm shrink-0"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 mt-6">
             <div className="flex bg-secondary/40 backdrop-blur-sm border border-border/30 rounded-full p-1 shadow-sm">
                <button className="text-xs font-medium px-6 py-2 bg-background text-foreground rounded-full shadow-sm flex items-center gap-2 border border-border/50">
                  <Copy className="w-3.5 h-3.5"/> Prompt
                </button>
                <button className="text-xs font-medium px-6 py-2 text-muted-foreground hover:text-foreground rounded-full transition-colors flex items-center gap-2">
                  <LayoutTemplate className="w-3.5 h-3.5" /> Template
                  <span className="bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ml-1">New</span>
                </button>
                <button className="text-xs font-medium px-6 py-2 text-muted-foreground hover:text-foreground rounded-full transition-colors flex items-center gap-2">
                  <Server className="w-3.5 h-3.5" /> Agent
                </button>
             </div>
             
             {/* Feature Suggestion Chips */}
             <div className="relative h-8 overflow-hidden w-full max-w-xl">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={heroSuggestionIdx}
                   initial={{ opacity: 0, y: 12 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -12 }}
                   transition={{ duration: 0.4 }}
                   className="flex items-center justify-center gap-2 absolute inset-0"
                 >
                   <Lightbulb className="w-3 h-3 text-amber-500 shrink-0" />
                   {HERO_FEATURE_SUGGESTIONS[heroSuggestionIdx].map((feat, i) => (
                     <span
                       key={i}
                       className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-background/60 backdrop-blur-sm text-muted-foreground border border-border/40 hover:border-accent/40 hover:text-foreground transition-all cursor-default whitespace-nowrap flex items-center gap-1"
                     >
                       <span className="text-xs">{feat.icon}</span> {feat.label}
                     </span>
                   ))}
                 </motion.div>
               </AnimatePresence>
             </div>

             <div className="text-xs flex items-center gap-2 text-muted-foreground bg-background/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-border/40">
                <Sparkles className="w-3 h-3 text-accent" /> 3 prompts remaining <span className="opacity-40">•</span> <Link href="/login" className="text-primary hover:underline font-medium">Sign in to save your prompts</Link>
             </div>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 w-full max-w-5xl"
        >
          <div 
            className="rounded-2xl overflow-hidden p-3 md:p-4" 
            style={{ 
              background: 'rgba(255, 255, 255, 0.4)', 
              border: '1px solid rgba(255, 255, 255, 0.5)', 
              boxShadow: 'var(--shadow-dashboard)',
              backdropFilter: 'blur(8px)'
            }}
          >
            {/* Dashboard Internals */}
            <div className="bg-background rounded-xl overflow-hidden flex flex-col text-[11px] select-none pointer-events-none font-body border border-border/50 shadow-sm h-[600px]">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-border/40 px-4 py-2 bg-background">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded flex items-center justify-center font-bold text-xs bg-primary text-primary-foreground"><Layers className="h-3 w-3" /></div>
                  <span className="font-semibold text-sm text-foreground">Skyler</span>
                  <ChevronDown className="h-3 w-3 text-muted-foreground ml-1" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/50 rounded-md border border-border/50 text-muted-foreground w-64 justify-between">
                  <div className="flex items-center gap-2">
                    <Search className="h-3 w-3" />
                    <span>Search prompts...</span>
                  </div>
                  <kbd className="font-sans text-[9px] bg-background border border-border rounded px-1">⌘K</kbd>
                </div>
                <div className="flex items-center gap-3">
                  <button className="bg-accent text-accent-foreground px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5">
                    <Copy className="h-3 w-3"/> Export All
                  </button>
                  <Bell className="h-4 w-4 text-muted-foreground" />
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary font-semibold flex items-center justify-center text-[10px]">KV</div>
                </div>
              </div>

              {/* Body: Sidebar + Main */}
              <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-48 border-r border-border/40 bg-background flex flex-col py-3 px-2 gap-0.5">
                  <div className="px-2 py-1.5 rounded-md text-muted-foreground flex items-center justify-between">
                    Dashboard
                  </div>
                  <div className="px-2 py-1.5 rounded-md bg-secondary/80 text-foreground font-medium flex items-center justify-between">
                    Active Projects
                    <span className="bg-primary text-primary-foreground text-[8px] px-1.5 py-0.5 rounded-full font-bold">1</span>
                  </div>
                  <div className="px-2 py-1.5 flex items-center text-muted-foreground">My Prompts</div>
                  <div className="px-2 py-1.5 flex items-center justify-between text-muted-foreground">
                    Tech Stacks <ChevronRight className="h-3 w-3" />
                  </div>
                  <div className="px-2 py-1.5 flex items-center justify-between text-muted-foreground">
                    Templates <ChevronRight className="h-3 w-3" />
                  </div>

                  <div className="px-2 pt-4 pb-1 text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">Configuration</div>
                  <div className="px-2 py-1.5 flex items-center text-muted-foreground">Context Variables</div>
                  <div className="px-2 py-1.5 flex items-center text-muted-foreground">API Keys</div>
                  <div className="px-2 py-1.5 flex items-center text-muted-foreground">Integrations</div>
                  <div className="px-2 py-1.5 flex items-center text-muted-foreground">Settings</div>
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-secondary/30 p-6 flex flex-col gap-5 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-foreground tracking-tight">Project: SaaS Analytics Tool</h2>
                    <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded-full text-[10px] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3"/> Prompt Ready
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 text-[10px]">
                    <button className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full font-medium flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3"/> Enhance Context
                    </button>
                    <button className="bg-background border border-border px-4 py-1.5 rounded-full font-medium shadow-sm text-foreground flex items-center gap-1.5">
                      <Server className="h-3 w-3 text-muted-foreground"/> Database Schema
                    </button>
                    <button className="bg-background border border-border px-4 py-1.5 rounded-full font-medium shadow-sm text-foreground flex items-center gap-1.5">
                      <LayoutTemplate className="h-3 w-3 text-muted-foreground"/> Frontend UI
                    </button>
                    <button className="bg-background border border-border px-4 py-1.5 rounded-full font-medium shadow-sm text-foreground flex items-center gap-1.5">
                      <Code2 className="h-3 w-3 text-muted-foreground"/> API Routes
                    </button>
                    <span className="text-muted-foreground ml-auto hover:text-foreground cursor-pointer flex items-center gap-1">
                      <Plus className="h-3 w-3"/> Add Requirement
                    </span>
                  </div>

                  {/* Cards Row */}
                  <div className="flex flex-row gap-4 h-[120px]">
                    {/* Progress Card */}
                    <div className="flex-1 rounded-xl bg-background border border-border shadow-sm p-4 flex flex-col relative overflow-hidden">
                      <div className="flex items-center justify-between text-muted-foreground mb-1">
                        Prompt Completeness
                        <div className="text-xs font-bold text-accent">95%</div>
                      </div>
                      <div className="w-full bg-secondary h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-accent h-full w-[95%] rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-2 mt-4 text-[10px] text-muted-foreground flex-wrap">
                        <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-green-500"/> Core Logic</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-green-500"/> Database</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-green-500"/> UI/UX</span>
                      </div>
                    </div>

                    {/* Stack Card */}
                    <div className="flex-1 rounded-xl bg-background border border-border shadow-sm p-4 flex flex-col">
                      <div className="flex items-center justify-between mb-2 text-muted-foreground border-b border-border/40 pb-2">
                        <span className="font-medium text-foreground">Selected Stack</span>
                        <span className="text-[10px] text-accent font-medium hover:underline cursor-pointer">Edit Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md font-medium text-[10px]">Next.js 14</span>
                        <span className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md font-medium text-[10px]">Supabase</span>
                        <span className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md font-medium text-[10px]">Tailwind CSS</span>
                        <span className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md font-medium text-[10px]">TypeScript</span>
                        <span className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md font-medium text-[10px]">Framer Motion</span>
                      </div>
                    </div>
                  </div>

                  {/* Code Snippet Editor View */}
                  <div className="rounded-xl bg-background border border-border shadow-sm flex flex-col flex-1 overflow-hidden relative">
                    <div className="bg-muted/40 px-4 py-2 border-b border-border flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Code2 className="h-3 w-3 text-muted-foreground" />
                        <span className="font-semibold text-xs text-foreground tracking-tight">cursor_prompt.md</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground cursor-pointer hover:text-foreground">
                        <Copy className="h-3 w-3" />
                        <span>Copy Block</span>
                      </div>
                    </div>
                    <div className="p-4 font-mono text-[10px] leading-relaxed text-muted-foreground overflow-y-auto">
                      <span className="text-accent"># Project Objective</span><br/>
                      <span className="text-foreground">You are an expert AI software engineer. Your objective is to build a full-stack SaaS Analytics platform using the Next.js App Router, Supabase, and Tailwind CSS.</span><br/><br/>
                      
                      <span className="text-accent">## 1. Database Schema (Supabase)</span><br/>
                      <span className="text-foreground">- Tables: users, events, sessions, active_visitors</span><br/>
                      <span className="text-foreground">- RLS Policies: Users can only read/write their own organization&apos;s tracking data.</span><br/><br/>

                      <span className="text-accent">## 2. Authentication & Middleware</span><br/>
                      <span className="text-white">import</span> <span className="text-pink-400">{`{ createServerClient }`}</span> <span className="text-white">from</span> <span className="text-green-400">&apos;@supabase/ssr&apos;</span><br/>
                      <span className="text-white">export async function</span> <span className="text-yellow-200">middleware</span><span className="text-white">(request: NextRequest) {`{`}</span><br/>
                      <span className="pl-4 text-muted-foreground">{`// ... Supabase Auth implementation`}</span><br/>
                      <span className="text-white">{`}`}</span><br/>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <ServicesSection />
        
        <FeaturesSection />
        
        <MarketplaceSection />
      </main>
      
      <Footer />
    </div>
  )
}
// force rebuild turbopack cache
