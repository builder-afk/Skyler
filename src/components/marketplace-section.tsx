"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, TrendingUp, Users, ShoppingBag, ArrowRight, Sparkles, Heart, Download, BadgeDollarSign, Repeat2, Crown, Zap } from 'lucide-react'

const CATEGORIES = [
  { id: 'all', label: 'Trending', icon: '🔥' },
  { id: 'saas', label: 'SaaS', icon: '🚀' },
  { id: 'mobile', label: 'Mobile', icon: '📱' },
  { id: 'ai-ml', label: 'AI / ML', icon: '🤖' },
  { id: 'ecommerce', label: 'E-Commerce', icon: '🛒' },
  { id: 'devtools', label: 'DevTools', icon: '🛠️' },
  { id: 'fintech', label: 'FinTech', icon: '💰' },
  { id: 'design', label: 'Design', icon: '🎨' },
]

const FEATURED_PROMPTS = [
  {
    id: 1,
    title: "Full-Stack SaaS Boilerplate",
    author: "Priya Sharma",
    authorAvatar: "PS",
    avatarColor: "bg-violet-500",
    price: "$12.99",
    rating: 4.9,
    reviews: 342,
    downloads: "2.4k",
    category: "SaaS",
    tags: ["Next.js", "Stripe", "Auth"],
    royalty: "15%",
    remix: true,
    isTrending: true,
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    borderAccent: "border-violet-500/30",
  },
  {
    id: 2,
    title: "AI Chatbot with RAG Pipeline",
    author: "Marcus Chen",
    authorAvatar: "MC",
    avatarColor: "bg-cyan-500",
    price: "$8.99",
    rating: 4.8,
    reviews: 189,
    downloads: "1.8k",
    category: "AI / ML",
    tags: ["LangChain", "Vector DB", "GPT-4"],
    royalty: "12%",
    remix: true,
    isTrending: false,
    gradient: "from-cyan-500/20 via-sky-500/10 to-blue-500/20",
    borderAccent: "border-cyan-500/30",
  },
  {
    id: 3,
    title: "E-Commerce Storefront Kit",
    author: "Sofia Rodriguez",
    authorAvatar: "SR",
    avatarColor: "bg-amber-500",
    price: "$15.99",
    rating: 4.9,
    reviews: 521,
    downloads: "4.1k",
    category: "E-Commerce",
    tags: ["Shopify", "Payments", "Analytics"],
    royalty: "18%",
    remix: false,
    isTrending: true,
    gradient: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
    borderAccent: "border-amber-500/30",
  },
  {
    id: 4,
    title: "Real-Time Trading Dashboard",
    author: "Aditya Kapoor",
    authorAvatar: "AK",
    avatarColor: "bg-emerald-500",
    price: "$19.99",
    rating: 4.7,
    reviews: 156,
    downloads: "980",
    category: "FinTech",
    tags: ["WebSocket", "Charts", "API"],
    royalty: "20%",
    remix: true,
    isTrending: false,
    gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
    borderAccent: "border-emerald-500/30",
  },
]

const STATS = [
  { label: "Active Creators", value: "12,400+", icon: Users },
  { label: "Prompts Listed", value: "48,000+", icon: ShoppingBag },
  { label: "Total Sales", value: "$2.1M+", icon: BadgeDollarSign },
  { label: "Remixes Created", value: "15,800+", icon: Repeat2 },
]

const TOP_CREATORS = [
  { name: "Priya S.", earnings: "$42.8k", avatar: "PS", color: "bg-violet-500", rank: 1 },
  { name: "Marcus C.", earnings: "$38.2k", avatar: "MC", color: "bg-cyan-500", rank: 2 },
  { name: "Sofia R.", earnings: "$35.6k", avatar: "SR", color: "bg-amber-500", rank: 3 },
]

export function MarketplaceSection() {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 font-body">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur-sm px-4 py-1.5 text-sm text-muted-foreground mb-6"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-accent" />
          Community Marketplace
          <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Live</span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-display font-bold max-w-3xl mb-4 leading-tight"
        >
          Trade, Remix & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500">Monetize</span> Your Prompts
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl"
        >
          A creator-first economy where every prompt is a product. Earn royalties on sales, remix community hits, and discover battle-tested prompts across app-building niches.
        </motion.p>
      </div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="relative rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-5 flex flex-col items-center text-center gap-2 group hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
          >
            <stat.icon className="w-5 h-5 text-accent mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold tracking-tight">{stat.value}</span>
            <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
              activeCategory === cat.id
                ? 'bg-foreground text-background border-foreground shadow-lg'
                : 'bg-background text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground'
            }`}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Featured Prompts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {FEATURED_PROMPTS.map((prompt, i) => (
          <motion.div
            key={prompt.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group relative rounded-[24px] border ${prompt.borderAccent} bg-gradient-to-br ${prompt.gradient} p-6 flex flex-col gap-4 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 cursor-pointer hover:-translate-y-1`}
          >
            {/* Top row: Author + Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-full ${prompt.avatarColor} text-white text-xs font-bold flex items-center justify-center shadow-sm`}>
                  {prompt.authorAvatar}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-foreground">{prompt.author}</span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Crown className="w-2.5 h-2.5 text-amber-500" /> Top Creator
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {prompt.isTrending && (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    <TrendingUp className="w-2.5 h-2.5" /> Trending
                  </span>
                )}
                {prompt.remix && (
                  <span className="flex items-center gap-1 text-[10px] font-medium text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
                    <Repeat2 className="w-2.5 h-2.5" /> Remixable
                  </span>
                )}
              </div>
            </div>

            {/* Title + Category */}
            <div>
              <h4 className="text-lg font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">{prompt.title}</h4>
              <span className="text-xs text-muted-foreground">{prompt.category}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {prompt.tags.map((tag, idx) => (
                <span key={idx} className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-background/80 backdrop-blur-sm border border-border/60 text-foreground/80">
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom row: Rating, Downloads, Royalty, Price */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/40">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-foreground">{prompt.rating}</span>
                  <span className="text-[10px]">({prompt.reviews})</span>
                </span>
                <span className="flex items-center gap-1">
                  <Download className="w-3 h-3" /> {prompt.downloads}
                </span>
                <span className="flex items-center gap-1 text-emerald-600">
                  <BadgeDollarSign className="w-3 h-3" /> {prompt.royalty} royalty
                </span>
              </div>
              <span className="text-lg font-bold text-foreground">{prompt.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom: Creators Leaderboard + CTA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top Creators Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-1 rounded-[24px] border border-border bg-background p-6 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-5">
            <Crown className="w-5 h-5 text-amber-500" />
            <h4 className="text-base font-bold tracking-tight">Top Creators</h4>
          </div>
          <div className="flex flex-col gap-3">
            {TOP_CREATORS.map((c) => (
              <div key={c.rank} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40 border border-border/40 hover:border-accent/30 transition-colors">
                <span className="text-sm font-bold text-muted-foreground w-5">#{c.rank}</span>
                <div className={`w-8 h-8 rounded-full ${c.color} text-white text-xs font-bold flex items-center justify-center`}>
                  {c.avatar}
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-sm font-semibold">{c.name}</span>
                  <span className="text-[10px] text-emerald-600 font-medium">{c.earnings} earned</span>
                </div>
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 rounded-[24px] border border-border bg-gradient-to-br from-accent/5 via-background to-emerald-500/5 p-8 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 opacity-10">
            <Sparkles className="w-32 h-32 text-accent" />
          </div>

          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-3 leading-tight">
              Become a <span className="italic">Prompt Creator</span>
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mb-6">
              List your battle-tested prompts, earn royalties on every sale and remix, and build your reputation in the fastest-growing creator economy for developers.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: BadgeDollarSign, text: "Earn up to 20% royalties" },
                { icon: Repeat2, text: "Enable prompt remixing" },
                { icon: Zap, text: "Instant payouts" },
              ].map((perk, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-medium text-foreground bg-background/80 backdrop-blur-sm border border-border/60 rounded-full px-3.5 py-2 shadow-sm">
                  <perk.icon className="w-3.5 h-3.5 text-accent" />
                  {perk.text}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 relative z-10">
            <Link
              href="/marketplace"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors shadow-lg"
            >
              Explore Marketplace <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/marketplace"
              className="inline-flex items-center justify-center gap-2 bg-background border border-border px-6 py-3 rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Start Selling <BadgeDollarSign className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
