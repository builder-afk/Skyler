"use client"

import React, { useState } from 'react'
import { Check, X, Phone, Bot, Globe2, BrainCircuit, Headphones, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const INCLUDED = <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
const EXCLUDED = <X className="w-4 h-4 text-muted-foreground/30 shrink-0 mt-0.5" />

const pricingPlans = [
  {
    name: "Starter",
    description: "For small businesses getting started with AI automation.",
    price: { USD: "$299", INR: "₹2,999" },
    period: "/ mo",
    buttonText: "Get Started",
    buttonVariant: "secondary" as const,
    highlight: "1 AI Receptionist",
    highlightSub: "Up to 500 calls / month",
    packageTitle: "WHAT'S INCLUDED",
    features: [
      { text: "1 AI Voice Receptionist", included: true },
      { text: "Up to 500 calls / month", included: true },
      { text: "1 Language (English)", included: true },
      { text: "FAQ Answering", included: true },
      { text: "Appointment Booking", included: true },
      { text: "Lead Capture & CRM Update", included: true },
      { text: "Business Hours Routing", included: true },
      { text: "Email Notifications", included: true },
      { text: "Basic Analytics Dashboard", included: true },
      { text: "WhatsApp Follow-ups", included: false },
      { text: "Custom Integrations", included: false },
      { text: "Multi-Agent Collaboration", included: false },
    ],
  },
  {
    name: "Growth",
    nameColor: "text-blue-500",
    borderColor: "border-blue-500/40",
    description: "For growing businesses that need deeper automation.",
    price: { USD: "$799", INR: "₹9,999" },
    period: "/ mo",
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    highlight: "3 AI Agents",
    highlightSub: "Up to 2,000 calls / month",
    packageTitle: "EVERYTHING IN STARTER, PLUS",
    features: [
      { text: "3 AI Agents (Receptionist, Sales, Support)", included: true },
      { text: "Up to 2,000 calls / month", included: true },
      { text: "3 Languages", included: true },
      { text: "Lead Qualification & Scoring", included: true },
      { text: "WhatsApp & SMS Follow-ups", included: true },
      { text: "Calendar + CRM Integration", included: true },
      { text: "Custom Voice & Persona", included: true },
      { text: "Knowledge Base (RAG) — Upload Docs", included: true },
      { text: "Real-Time Analytics", included: true },
      { text: "Call Transfer to Human Agent", included: true },
      { text: "Custom Integrations (API)", included: false },
      { text: "Dedicated Account Manager", included: false },
    ],
  },
  {
    name: "Enterprise",
    nameColor: "text-purple-600",
    isPopular: true,
    borderColor: "border-purple-500",
    description: "For enterprises that want a complete AI Operating System.",
    price: { USD: "$1,999", INR: "₹29,999" },
    period: "/ mo",
    buttonText: "Talk to Sales",
    buttonVariant: "default" as const,
    highlight: "Unlimited AI Agents",
    highlightSub: "Up to 10,000 calls / month",
    packageTitle: "EVERYTHING IN GROWTH, PLUS",
    features: [
      { text: "Unlimited AI Agents", included: true },
      { text: "Up to 10,000 calls / month", included: true },
      { text: "All Languages (12+)", included: true },
      { text: "Full AI Operating System", included: true },
      { text: "Custom Workflow Automation", included: true },
      { text: "ERP, Payment Gateway & CRM Integration", included: true },
      { text: "Emotion Detection & Sentiment Analysis", included: true },
      { text: "Multi-Agent Collaboration", included: true },
      { text: "Autonomous Follow-ups & Sales Automation", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Priority Support & SLA", included: true },
      { text: "On-Premise Deployment Option", included: true },
    ],
  },
  {
    name: "Custom",
    nameColor: "text-amber-500",
    borderColor: "border-amber-400/40",
    description: "Fully tailored AI solution built for your business.",
    price: { USD: "Custom", INR: "Custom" },
    period: "",
    buttonText: "Book a Call",
    buttonVariant: "default" as const,
    highlight: "White-Label Solution",
    highlightSub: "Unlimited everything",
    packageTitle: "BUILD YOUR OWN AI OS",
    features: [
      { text: "Everything in Enterprise", included: true },
      { text: "Unlimited Calls & Agents", included: true },
      { text: "White-Label Branding", included: true },
      { text: "Custom Voice Cloning", included: true },
      { text: "Custom LLM Fine-Tuning", included: true },
      { text: "Dedicated Infrastructure", included: true },
      { text: "Multi-Department AI Workforce", included: true },
      { text: "Computer Use Agents", included: true },
      { text: "Vision-Based Customer Support", included: true },
      { text: "Human Handoff Intelligence", included: true },
      { text: "Cross-Company Memory Layer", included: true },
      { text: "24/7 Engineering Support", included: true },
    ],
  },
]

export function PricingSection() {
  const [currency, setCurrency] = useState<"USD" | "INR">("INR")

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 font-body">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-primary mb-5">
          <Zap className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide uppercase">Pricing</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Plans that scale with your business
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          From a single AI receptionist to a full enterprise AI Operating System. Start small, scale infinitely.
        </p>
        
        <div className="flex items-center justify-center gap-3">
          <span className={`text-sm font-medium ${currency === "USD" ? "text-foreground" : "text-muted-foreground"}`}>USD</span>
          <button 
            onClick={() => setCurrency(currency === "USD" ? "INR" : "USD")}
            className="w-12 h-6 bg-secondary border border-border rounded-full relative flex items-center p-1 transition-colors"
          >
            <div className={`w-4 h-4 bg-primary rounded-full shadow-sm transition-transform ${currency === "INR" ? "translate-x-6" : "translate-x-0"}`} />
          </button>
          <span className={`text-sm font-medium ${currency === "INR" ? "text-foreground" : "text-muted-foreground"}`}>INR</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {pricingPlans.map((plan, i) => (
          <div 
            key={i} 
            className={`relative bg-background rounded-3xl p-6 flex flex-col ${
              plan.borderColor ? "border-2 " + plan.borderColor : "border border-border shadow-sm"
            } ${plan.isPopular ? "shadow-xl shadow-purple-500/10" : ""}`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                Most Popular
              </div>
            )}
            
            <div className="flex flex-col mb-6">
              <h3 className={`text-2xl font-bold ${plan.nameColor || "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
            </div>

            <div className="flex flex-col mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight">{plan.price[currency]}</span>
                {plan.period && <span className="text-muted-foreground font-medium">{plan.period}</span>}
              </div>
            </div>

            <Button 
              variant={plan.buttonVariant || "default"} 
              className={`w-full rounded-full h-11 mb-6 font-semibold text-sm ${
                plan.buttonVariant === "secondary" ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" : ""
              }`}
            >
              {plan.buttonText}
            </Button>

            {/* Highlight Box */}
            <div className={`rounded-xl p-4 mb-6 border ${
              plan.isPopular 
                ? "bg-purple-500/10 border-purple-500/20" 
                : plan.nameColor === "text-amber-500"
                ? "bg-amber-500/10 border-amber-500/20"
                : plan.nameColor === "text-blue-500"
                ? "bg-blue-500/10 border-blue-500/20"
                : "bg-secondary/50 border-border"
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  plan.isPopular ? "bg-purple-500 text-white" : plan.nameColor === "text-amber-500" ? "bg-amber-500 text-white" : plan.nameColor === "text-blue-500" ? "bg-blue-500 text-white" : "bg-primary text-primary-foreground"
                }`}>
                  {plan.name === "Custom" ? <BrainCircuit className="w-5 h-5" /> : plan.name === "Enterprise" ? <Globe2 className="w-5 h-5" /> : plan.name === "Growth" ? <Headphones className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                </div>
                <div>
                  <div className="font-bold text-sm">{plan.highlight}</div>
                  <div className="text-xs text-muted-foreground">{plan.highlightSub}</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col flex-1">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wide font-bold mb-4">
                {plan.packageTitle}
              </div>
              
              <ul className="flex flex-col gap-2.5">
                {plan.features.map((f, idx) => (
                  <li key={idx} className={`flex items-start gap-2 text-[13px] ${!f.included ? "text-muted-foreground/50" : "text-foreground"}`}>
                    {f.included ? INCLUDED : EXCLUDED}
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
