"use client"

import React, { useState } from 'react'
import { Check, Zap, Bot, Globe2, BrainCircuit, Building2, Sparkles, ArrowRight, MessageSquare, Mic, Video, Workflow, Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

const tiers = [
  {
    id: "starter",
    name: "AI Visible",
    badge: "Starter",
    color: "emerald",
    icon: Sparkles,
    forText: "Local businesses, clinics, salons, single-location retail, solo professionals",
    originalPrice: "₹18,749",
    price: "₹14,999",
    period: "/month",
    setup: "₹9,999 one-time setup",
    buttonText: "Get Started",
    buttonVariant: "secondary" as const,
    isPopular: false,
    packageTitle: "WHAT'S INCLUDED",
    features: [
      "AI Visibility audit — how ChatGPT / Gemini / Perplexity currently describe your brand",
      "AEO + GEO optimization for 1 website (up to 15 pages)",
      "Google Business Profile + schema markup optimization",
      "4 AI-optimized content pieces / month",
      "Monthly visibility report across AI assistants",
    ],
  },
  {
    id: "growth",
    name: "AI Growth",
    badge: "Most Popular",
    color: "blue",
    icon: Bot,
    forText: "Growing D2C brands, real estate, coaching institutes, multi-location businesses",
    originalPrice: "₹49,999",
    price: "₹39,999",
    period: "/month",
    setup: "₹24,999 one-time setup",
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    isPopular: true,
    packageTitle: "EVERYTHING IN STARTER, PLUS",
    features: [
      "Full SEO + AEO + GEO program (up to 50 pages, competitor tracking)",
      "1 AI automation workflow (lead capture → CRM → WhatsApp follow-up)",
      "WhatsApp / website chatbot (up to 1,000 conversations / month)",
      "10 content pieces + 4 creative assets / month",
      "Bi-weekly strategy call",
    ],
  },
  {
    id: "scale",
    name: "AI Scale",
    badge: "High Growth",
    color: "purple",
    icon: Globe2,
    forText: "Funded startups, mid-market companies, franchises",
    originalPrice: "₹1,12,499",
    price: "₹89,999",
    period: "/month",
    setup: "₹49,999 one-time setup",
    buttonText: "Talk to Sales",
    buttonVariant: "default" as const,
    isPopular: false,
    packageTitle: "EVERYTHING IN GROWTH, PLUS",
    features: [
      "Multilingual AI voice agent — 1,500 min / month (Hindi + English + 1 regional language)",
      "Up to 3 automation workflows (support, sales, operations)",
      "AI creative production: 15 assets + 4 short videos / month",
      "Dedicated account manager, weekly reporting",
      "Quarterly AI visibility benchmarking vs. top 3 competitors",
    ],
  },
  {
    id: "enterprise",
    name: "AI Enterprise",
    badge: "Enterprise",
    color: "amber",
    icon: Building2,
    forText: "Large enterprises, BFSI, healthcare chains, e-commerce platforms",
    originalPrice: "₹2,50,000+",
    price: "₹2,00,000+",
    period: "/month",
    setup: "Custom setup",
    buttonText: "Book a Call",
    buttonVariant: "default" as const,
    isPopular: false,
    packageTitle: "FULL ENTERPRISE CAPABILITIES",
    features: [
      "Unlimited-scope visibility program across brands & regions",
      "Custom voice agents with CRM / ERP integration, 10+ languages",
      "Dedicated automation engineering pod",
      "SLA-backed support, compliance handling (DPDP Act)",
      "On-premise deployment options where needed",
    ],
  },
]

const addOns = [
  { name: "Voice agent minutes (beyond included)", price: "₹6–9 / min depending on volume", icon: Mic },
  { name: "Extra chatbot conversations", price: "₹2,499 per 1,000", icon: MessageSquare },
  { name: "Additional automation workflow", price: "₹14,999 one-time + ₹2,999 / mo", icon: Workflow },
  { name: "Extra regional language for voice agent", price: "₹9,999 / mo per language", icon: Languages },
  { name: "Video creative (per unit)", price: "₹4,999 – ₹14,999", icon: Video },
]

const levers = [
  { label: "14-day paid pilot", detail: "₹4,999 — adjusted against setup fee if you convert", highlight: true },
  { label: "Annual prepay", detail: "2 months free (~16% off)", highlight: false },
  { label: "Quarterly billing", detail: "5% off monthly rate", highlight: false },
  { label: "Founding customer", detail: "Lock current rates for life — limited to first 20 clients", highlight: true },
]

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; icon: string; glow: string }> = {
  emerald: {
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/20",
    text: "text-emerald-600",
    badge: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    icon: "bg-emerald-500 text-white",
    glow: "shadow-emerald-500/10",
  },
  blue: {
    bg: "bg-blue-500/5",
    border: "border-blue-500/30",
    text: "text-blue-600",
    badge: "bg-blue-500/10 text-blue-700 border-blue-500/20",
    icon: "bg-blue-500 text-white",
    glow: "shadow-blue-500/20",
  },
  purple: {
    bg: "bg-purple-500/5",
    border: "border-purple-500/20",
    text: "text-purple-600",
    badge: "bg-purple-500/10 text-purple-700 border-purple-500/20",
    icon: "bg-purple-500 text-white",
    glow: "shadow-purple-500/10",
  },
  amber: {
    bg: "bg-amber-500/5",
    border: "border-amber-400/20",
    text: "text-amber-600",
    badge: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    icon: "bg-amber-500 text-white",
    glow: "shadow-amber-500/10",
  },
}

export function PricingSection() {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null)

  return (
    <section id="pricing" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 font-body">

      {/* ─── Header ─── */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-primary mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide uppercase">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-foreground mb-5 leading-tight">
            Plans built for every stage
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From AI visibility for local businesses to full enterprise automation.
            Start where you are — scale when you&apos;re ready.
          </p>
        </motion.div>
      </div>

      {/* ─── Tier Cards ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-20">
        {tiers.map((tier, i) => {
          const c = colorMap[tier.color]
          const Icon = tier.icon
          const isHovered = hoveredTier === tier.id

          return (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredTier(tier.id)}
              onMouseLeave={() => setHoveredTier(null)}
              className={`
                relative flex flex-col rounded-2xl p-6 transition-all duration-300 cursor-default
                ${tier.isPopular
                  ? `border-2 ${c.border} shadow-xl ${c.glow}`
                  : `border border-border/60 shadow-sm hover:shadow-lg`
                }
                ${isHovered ? 'scale-[1.02]' : 'scale-100'}
                bg-background
              `}
            >
              {/* Popular badge */}
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase">
                  Most Popular
                </div>
              )}

              {/* Tier header */}
              <div className="mb-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${c.icon}`}>
                    <Icon className="w-[18px] h-[18px]" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${c.text}`}>{tier.name}</h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tier.forText}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-muted-foreground line-through">{tier.originalPrice}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded-full">20% off</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold tracking-tight text-foreground">{tier.price}</span>
                </div>
              </div>

              {/* CTA */}
              <Link href="/contact" className="w-full">
                <Button
                  variant={tier.buttonVariant}
                  className={`w-full rounded-full h-10 mt-5 mb-6 font-semibold text-sm transition-all ${
                    tier.isPopular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20'
                      : tier.buttonVariant === 'secondary'
                      ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      : ''
                  }`}
                >
                  {tier.buttonText}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>

              {/* Divider */}
              <div className="border-t border-border/50 mb-5" />

              {/* Features */}
              <div className="flex flex-col flex-1">
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-4">
                  {tier.packageTitle}
                </div>
                <ul className="flex flex-col gap-3">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13px] text-foreground leading-snug">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* ─── Add-Ons Section ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Usage-Based Add-Ons</h3>
          <p className="text-sm text-muted-foreground">Available on any tier — scale specific capabilities as you grow</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {addOns.map((addon, i) => {
            const AddonIcon = addon.icon
            return (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <AddonIcon className="w-[18px] h-[18px] text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground leading-snug">{addon.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{addon.price}</p>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* ─── Pricing Levers ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-3xl mx-auto"
      >
        <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-secondary/40 via-background to-accent/5 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
              <BrainCircuit className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground">Smart Savings</h4>
              <p className="text-xs text-muted-foreground">Ways to reduce your cost without discounting the retainer</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {levers.map((lever, i) => (
              <div
                key={i}
                className={`flex flex-col gap-1 p-4 rounded-xl border transition-colors ${
                  lever.highlight
                    ? 'border-accent/30 bg-accent/5'
                    : 'border-border/40 bg-background/60'
                }`}
              >
                <span className="text-sm font-semibold text-foreground">{lever.label}</span>
                <span className="text-xs text-muted-foreground leading-relaxed">{lever.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
