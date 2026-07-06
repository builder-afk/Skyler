"use client"

import React, { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Bot, Phone, Globe2, BrainCircuit, Blocks, Clock, MessageSquareHeart,
  Building2, ChevronRight, ChevronLeft, Check, Upload, Mic, Languages,
  Calendar, Mail, MessageSquare, ShoppingBag, Database, Settings2,
  Sparkles, Layers, ArrowLeft, Rocket, FileText, Plus, X, Volume2
} from "lucide-react"

// ── Step Definitions ─────────────────────────────────────────────
const STEPS = [
  { id: 1, label: "Business Info", icon: Building2 },
  { id: 2, label: "Receptionist Persona", icon: Bot },
  { id: 3, label: "Voice & Language", icon: Languages },
  { id: 4, label: "Knowledge Base", icon: Database },
  { id: 5, label: "Integrations", icon: Blocks },
  { id: 6, label: "Actions & Tools", icon: Settings2 },
  { id: 7, label: "Review & Deploy", icon: Rocket },
]

const INDUSTRIES = [
  "Healthcare / Clinic", "Real Estate", "E-Commerce", "Restaurant / Hotel",
  "Education", "Finance / Insurance", "Legal", "SaaS / Tech",
  "Salon / Spa", "Automobile", "Travel / Tourism", "Other"
]

const VOICES = [
  { id: "sophia", name: "Sophia", desc: "Warm, professional female voice", gender: "Female" },
  { id: "james", name: "James", desc: "Confident, clear male voice", gender: "Male" },
  { id: "aria", name: "Aria", desc: "Friendly, energetic female voice", gender: "Female" },
  { id: "aiden", name: "Aiden", desc: "Calm, reassuring male voice", gender: "Male" },
]

const LANGUAGES = [
  "English", "Hindi", "Spanish", "French", "German", "Portuguese",
  "Arabic", "Mandarin", "Japanese", "Korean", "Italian", "Dutch"
]

const INTEGRATIONS = [
  { id: "crm", name: "CRM", desc: "HubSpot, Salesforce, Zoho", icon: ShoppingBag },
  { id: "calendar", name: "Calendar", desc: "Google Calendar, Calendly", icon: Calendar },
  { id: "whatsapp", name: "WhatsApp", desc: "Send follow-ups & updates", icon: MessageSquare },
  { id: "email", name: "Email", desc: "Gmail, Outlook, SMTP", icon: Mail },
  { id: "phone", name: "Telephony", desc: "Twilio, Exotel, SIP", icon: Phone },
  { id: "database", name: "Database", desc: "PostgreSQL, Supabase", icon: Database },
]

const ACTIONS = [
  { id: "book_appointment", label: "Book Appointments", desc: "Schedule meetings and appointments automatically" },
  { id: "qualify_leads", label: "Qualify Leads", desc: "Ask qualifying questions and score leads" },
  { id: "answer_faqs", label: "Answer FAQs", desc: "Respond to common customer questions" },
  { id: "transfer_call", label: "Transfer Calls", desc: "Route to the right department or human agent" },
  { id: "send_followup", label: "Send Follow-ups", desc: "Email or WhatsApp follow-up messages" },
  { id: "update_crm", label: "Update CRM", desc: "Log interactions and update lead status" },
  { id: "collect_payment", label: "Collect Payments", desc: "Process payments via Stripe or Razorpay" },
  { id: "send_confirmation", label: "Send Confirmations", desc: "Booking confirmations via SMS/Email" },
]

// ── Main Component ───────────────────────────────────────────────
function BuildReceptionistContent() {
  const searchParams = useSearchParams()
  const initialDesc = searchParams.get("desc") || ""

  const [currentStep, setCurrentStep] = useState(1)

  // Step 1 — Business Info
  const [businessName, setBusinessName] = useState("")
  const [industry, setIndustry] = useState("")
  const [businessDesc, setBusinessDesc] = useState(initialDesc)

  // Step 2 — Persona
  const [receptionistName, setReceptionistName] = useState("")
  const [greeting, setGreeting] = useState("")
  const [personality, setPersonality] = useState("professional")

  // Step 3 — Voice & Language
  const [selectedVoice, setSelectedVoice] = useState("sophia")
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["English"])

  // Step 4 — Knowledge Base
  const [knowledgeFiles, setKnowledgeFiles] = useState<string[]>([])
  const [faqEntries, setFaqEntries] = useState<{ q: string; a: string }[]>([{ q: "", a: "" }])

  // Step 5 — Integrations
  const [activeIntegrations, setActiveIntegrations] = useState<string[]>([])

  // Step 6 — Actions
  const [activeActions, setActiveActions] = useState<string[]>(["book_appointment", "answer_faqs", "qualify_leads"])

  const next = () => setCurrentStep((prev) => Math.min(prev + 1, 7))
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  const toggleLanguage = (lang: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    )
  }

  const toggleIntegration = (id: string) => {
    setActiveIntegrations((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const toggleAction = (id: string) => {
    setActiveActions((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    )
  }

  const addFaqEntry = () => setFaqEntries((prev) => [...prev, { q: "", a: "" }])
  const removeFaqEntry = (idx: number) => setFaqEntries((prev) => prev.filter((_, i) => i !== idx))
  const updateFaq = (idx: number, field: "q" | "a", value: string) => {
    setFaqEntries((prev) => prev.map((entry, i) => (i === idx ? { ...entry, [field]: value } : entry)))
  }

  // ── Render ─────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <Layers className="w-5 h-5 text-primary" />
            <span className="font-bold text-foreground">Skyler</span>
          </Link>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">AI Receptionist Builder</span>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Step Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              const isActive = currentStep === step.id
              const isCompleted = currentStep > step.id
              return (
                <React.Fragment key={step.id}>
                  <button
                    onClick={() => isCompleted && setCurrentStep(step.id)}
                    className={`flex flex-col items-center gap-1.5 transition-all ${isActive ? "scale-105" : ""} ${isCompleted ? "cursor-pointer" : "cursor-default"}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                      isCompleted
                        ? "bg-primary text-primary-foreground border-primary"
                        : isActive
                        ? "bg-primary/10 text-primary border-primary/40 shadow-md shadow-primary/10"
                        : "bg-secondary/50 text-muted-foreground border-border"
                    }`}>
                      {isCompleted ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                    </div>
                    <span className={`text-[10px] font-medium hidden sm:block ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                      {step.label}
                    </span>
                  </button>
                  {i < STEPS.length - 1 && (
                    <div className={`flex-1 h-px mx-2 transition-colors duration-300 ${currentStep > step.id ? "bg-primary" : "bg-border"}`} />
                  )}
                </React.Fragment>
              )
            })}
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* ─── STEP 1: Business Info ─── */}
            {currentStep === 1 && (
              <div className="max-w-2xl mx-auto space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-2">Tell us about your business</h2>
                  <p className="text-muted-foreground">We&apos;ll use this to tailor your AI Receptionist to your exact needs.</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Business Name</label>
                    <input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Skyline Dental Clinic"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Industry</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {INDUSTRIES.map((ind) => (
                        <button
                          key={ind}
                          onClick={() => setIndustry(ind)}
                          className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                            industry === ind
                              ? "bg-primary/10 border-primary/40 text-primary"
                              : "bg-secondary/30 border-border hover:border-foreground/20 text-foreground"
                          }`}
                        >
                          {ind}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Describe what your business does</label>
                    <textarea
                      value={businessDesc}
                      onChange={(e) => setBusinessDesc(e.target.value)}
                      rows={4}
                      placeholder="e.g. We are a dental clinic in Mumbai offering teeth cleaning, implants, and cosmetic dentistry. We want an AI receptionist to handle appointment bookings, answer patient queries about pricing, and follow up with patients after their visits."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ─── STEP 2: Receptionist Persona ─── */}
            {currentStep === 2 && (
              <div className="max-w-2xl mx-auto space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-2">Design your receptionist&apos;s persona</h2>
                  <p className="text-muted-foreground">Give your AI receptionist a name, greeting, and personality style.</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Receptionist Name</label>
                    <input
                      type="text"
                      value={receptionistName}
                      onChange={(e) => setReceptionistName(e.target.value)}
                      placeholder="e.g. Maya, Alex, Priya"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Opening Greeting</label>
                    <textarea
                      value={greeting}
                      onChange={(e) => setGreeting(e.target.value)}
                      rows={2}
                      placeholder={`e.g. "Hi! Thank you for calling ${businessName || "our office"}. I'm ${receptionistName || "your AI assistant"}. How can I help you today?"`}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">Personality Style</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: "professional", label: "Professional", desc: "Formal, courteous, business-like" },
                        { id: "friendly", label: "Friendly", desc: "Warm, casual, conversational" },
                        { id: "concise", label: "Concise", desc: "Direct, efficient, to-the-point" },
                      ].map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setPersonality(p.id)}
                          className={`p-4 rounded-2xl border text-left transition-all ${
                            personality === p.id
                              ? "bg-primary/10 border-primary/40 shadow-md shadow-primary/5"
                              : "bg-secondary/20 border-border hover:border-foreground/20"
                          }`}
                        >
                          <span className={`text-sm font-semibold ${personality === p.id ? "text-primary" : "text-foreground"}`}>{p.label}</span>
                          <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─── STEP 3: Voice & Language ─── */}
            {currentStep === 3 && (
              <div className="max-w-2xl mx-auto space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-2">Choose voice &amp; languages</h2>
                  <p className="text-muted-foreground">Select how your receptionist sounds and which languages it speaks.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-3 block">Voice</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {VOICES.map((v) => (
                        <button
                          key={v.id}
                          onClick={() => setSelectedVoice(v.id)}
                          className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-4 ${
                            selectedVoice === v.id
                              ? "bg-primary/10 border-primary/40 shadow-md shadow-primary/5"
                              : "bg-secondary/20 border-border hover:border-foreground/20"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedVoice === v.id ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                            <Volume2 className="w-4 h-4" />
                          </div>
                          <div>
                            <span className={`text-sm font-semibold ${selectedVoice === v.id ? "text-primary" : "text-foreground"}`}>{v.name}</span>
                            <p className="text-xs text-muted-foreground">{v.desc}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">Languages (select multiple)</label>
                    <div className="flex flex-wrap gap-2">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => toggleLanguage(lang)}
                          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                            selectedLanguages.includes(lang)
                              ? "bg-primary/10 border-primary/40 text-primary"
                              : "bg-secondary/30 border-border text-foreground hover:border-foreground/20"
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─── STEP 4: Knowledge Base ─── */}
            {currentStep === 4 && (
              <div className="max-w-2xl mx-auto space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-2">Train your receptionist</h2>
                  <p className="text-muted-foreground">Upload documents and add FAQs so your receptionist can answer accurately.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-3 block">Upload Documents</label>
                    <p className="text-xs text-muted-foreground mb-3">Brochures, price lists, policies, menus — anything your receptionist should know.</p>
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-2xl cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-all">
                      <Upload className="w-6 h-6 text-muted-foreground mb-2" />
                      <span className="text-sm text-muted-foreground">Drop files here or click to upload</span>
                      <span className="text-xs text-muted-foreground/60 mt-1">PDF, DOCX, TXT, CSV — up to 10MB</span>
                      <input type="file" className="hidden" multiple onChange={(e) => {
                        if (e.target.files) {
                          setKnowledgeFiles(prev => [...prev, ...Array.from(e.target.files!).map(f => f.name)])
                        }
                      }} />
                    </label>
                    {knowledgeFiles.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {knowledgeFiles.map((f, i) => (
                          <span key={i} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-secondary border border-border">
                            <FileText className="w-3 h-3" /> {f}
                            <button onClick={() => setKnowledgeFiles(prev => prev.filter((_, idx) => idx !== i))} className="text-muted-foreground hover:text-destructive ml-1"><X className="w-3 h-3" /></button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">FAQs</label>
                    <div className="space-y-3">
                      {faqEntries.map((entry, idx) => (
                        <div key={idx} className="flex gap-2 items-start">
                          <div className="flex-1 space-y-2">
                            <input
                              type="text"
                              value={entry.q}
                              onChange={(e) => updateFaq(idx, "q", e.target.value)}
                              placeholder="Question"
                              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                            />
                            <input
                              type="text"
                              value={entry.a}
                              onChange={(e) => updateFaq(idx, "a", e.target.value)}
                              placeholder="Answer"
                              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                            />
                          </div>
                          {faqEntries.length > 1 && (
                            <button onClick={() => removeFaqEntry(idx)} className="mt-2 text-muted-foreground hover:text-destructive"><X className="w-4 h-4" /></button>
                          )}
                        </div>
                      ))}
                    </div>
                    <button onClick={addFaqEntry} className="mt-3 flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium">
                      <Plus className="w-4 h-4" /> Add FAQ
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ─── STEP 5: Integrations ─── */}
            {currentStep === 5 && (
              <div className="max-w-2xl mx-auto space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-2">Connect your tools</h2>
                  <p className="text-muted-foreground">Select the platforms your AI Receptionist should integrate with.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {INTEGRATIONS.map((integ) => {
                    const Icon = integ.icon
                    const isActive = activeIntegrations.includes(integ.id)
                    return (
                      <button
                        key={integ.id}
                        onClick={() => toggleIntegration(integ.id)}
                        className={`p-5 rounded-2xl border text-left transition-all flex items-start gap-4 ${
                          isActive
                            ? "bg-primary/10 border-primary/40 shadow-md shadow-primary/5"
                            : "bg-secondary/20 border-border hover:border-foreground/20"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isActive ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className={`text-sm font-semibold ${isActive ? "text-primary" : "text-foreground"}`}>{integ.name}</span>
                          <p className="text-xs text-muted-foreground mt-0.5">{integ.desc}</p>
                        </div>
                        {isActive && <Check className="w-4 h-4 text-primary ml-auto mt-1 shrink-0" />}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* ─── STEP 6: Actions & Tools ─── */}
            {currentStep === 6 && (
              <div className="max-w-2xl mx-auto space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-2">Define capabilities</h2>
                  <p className="text-muted-foreground">Choose what actions your AI Receptionist can perform autonomously.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ACTIONS.map((action) => {
                    const isActive = activeActions.includes(action.id)
                    return (
                      <button
                        key={action.id}
                        onClick={() => toggleAction(action.id)}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          isActive
                            ? "bg-primary/10 border-primary/40"
                            : "bg-secondary/20 border-border hover:border-foreground/20"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${isActive ? "bg-primary border-primary" : "border-border"}`}>
                            {isActive && <Check className="w-3 h-3 text-primary-foreground" />}
                          </div>
                          <span className={`text-sm font-semibold ${isActive ? "text-primary" : "text-foreground"}`}>{action.label}</span>
                        </div>
                        <p className="text-xs text-muted-foreground ml-7">{action.desc}</p>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* ─── STEP 7: Review & Deploy ─── */}
            {currentStep === 7 && (
              <div className="max-w-2xl mx-auto space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-2">Review your AI Receptionist</h2>
                  <p className="text-muted-foreground">Here&apos;s a summary of everything. When you&apos;re ready, deploy it.</p>
                </div>

                <div className="space-y-4">
                  {/* Summary Cards */}
                  {[
                    { label: "Business", value: `${businessName || "—"} · ${industry || "—"}` },
                    { label: "Receptionist", value: `${receptionistName || "—"} · ${personality}` },
                    { label: "Greeting", value: greeting || "Default greeting" },
                    { label: "Voice", value: VOICES.find(v => v.id === selectedVoice)?.name || "—" },
                    { label: "Languages", value: selectedLanguages.join(", ") || "—" },
                    { label: "Knowledge Files", value: knowledgeFiles.length > 0 ? knowledgeFiles.join(", ") : "None uploaded" },
                    { label: "FAQs", value: `${faqEntries.filter(e => e.q && e.a).length} entries` },
                    { label: "Integrations", value: activeIntegrations.length > 0 ? activeIntegrations.map(id => INTEGRATIONS.find(i => i.id === id)?.name).join(", ") : "None" },
                    { label: "Actions", value: activeActions.map(id => ACTIONS.find(a => a.id === id)?.label).join(", ") || "None" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start justify-between p-4 rounded-xl bg-secondary/20 border border-border">
                      <span className="text-sm font-medium text-muted-foreground w-32 shrink-0">{item.label}</span>
                      <span className="text-sm text-foreground text-right">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 border border-primary/20 text-center">
                  <Rocket className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Ready to go live?</h3>
                  <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto">
                    Your AI Receptionist will be deployed and ready to handle calls, book appointments, qualify leads, and more.
                  </p>
                  <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform shadow-lg">
                    Deploy AI Receptionist
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="max-w-2xl mx-auto flex items-center justify-between mt-12 pt-8 border-t border-border">
          <button
            onClick={prev}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-border hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          {currentStep < 7 ? (
            <button
              onClick={next}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            >
              Continue <ChevronRight className="w-4 h-4" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default function BuildReceptionistPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-muted-foreground">Loading builder...</div>
      </div>
    }>
      <BuildReceptionistContent />
    </Suspense>
  )
}
