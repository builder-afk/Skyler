"use client"

import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Star, TrendingUp, Users, ShoppingBag, Search, Heart, Download, Bookmark,
  BadgeDollarSign, Repeat2, Crown, Sparkles, Tag, ChevronDown,
  Award, BarChart3, Plus, X, Check, ArrowRight, ArrowLeft,
  Package, FileText, Folder, Trash2, DollarSign
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

/* ════════════════════════════════════════════════════════════════════
   TYPES
   ════════════════════════════════════════════════════════════════════ */

interface SavedItem {
  id: string
  type: 'project' | 'prompt'
  title: string
  description: string
  stack?: string
  category: string
  createdAt: string
}

interface MarketplaceListing {
  id: string
  sourceItemId: string
  title: string
  description: string
  author: string
  avatar: string
  avatarColor: string
  category: string
  tags: string[]
  price: string
  royaltyPercent: number
  status: 'draft' | 'published'
  downloads: number
  earnings: number
  rating: number
  reviews: number
  saves: number
  remixCount: number
  isTrending: boolean
  isVerified: boolean
  gradient: string
  createdAt: string
}

/* ════════════════════════════════════════════════════════════════════
   CONSTANTS & MOCK DATA
   ════════════════════════════════════════════════════════════════════ */

const CATEGORIES = [
  { id: 'all', label: 'All Prompts', icon: '✨', count: 48200 },
  { id: 'saas', label: 'SaaS', icon: '🚀', count: 8400 },
  { id: 'mobile', label: 'Mobile Apps', icon: '📱', count: 6200 },
  { id: 'ai-ml', label: 'AI / ML', icon: '🤖', count: 9800 },
  { id: 'ecommerce', label: 'E-Commerce', icon: '🛒', count: 5100 },
  { id: 'devtools', label: 'DevTools', icon: '🛠️', count: 4300 },
  { id: 'fintech', label: 'FinTech', icon: '💰', count: 3900 },
  { id: 'design', label: 'Design Systems', icon: '🎨', count: 4700 },
  { id: 'api', label: 'APIs & Backend', icon: '⚡', count: 5800 },
]

const CATEGORY_OPTIONS = [
  'SaaS', 'Mobile Apps', 'AI / ML', 'E-Commerce', 'DevTools', 'FinTech', 'Design Systems', 'APIs & Backend'
]

const TAG_OPTIONS = [
  'Next.js', 'React', 'Supabase', 'Stripe', 'Tailwind', 'GPT-4', 'LangChain', 'Pinecone',
  'React Native', 'Expo', 'Firebase', 'Node.js', 'Python', 'FastAPI', 'D3.js', 'WebSocket',
  'Figma', 'Storybook', 'tRPC', 'Drizzle ORM', 'Redis', 'JWT', 'Shopify API', 'Analytics'
]

const SORT_OPTIONS = ['Trending', 'Newest', 'Top Rated', 'Best Selling', 'Most Remixed']

const GRADIENTS = [
  'from-violet-500/10 to-fuchsia-500/10',
  'from-cyan-500/10 to-blue-500/10',
  'from-amber-500/10 to-orange-500/10',
  'from-emerald-500/10 to-teal-500/10',
  'from-pink-500/10 to-rose-500/10',
  'from-indigo-500/10 to-violet-500/10',
  'from-sky-500/10 to-blue-500/10',
  'from-rose-500/10 to-pink-500/10',
]

const AVATAR_COLORS = [
  'bg-violet-500', 'bg-cyan-500', 'bg-amber-500', 'bg-emerald-500',
  'bg-pink-500', 'bg-indigo-500', 'bg-sky-500', 'bg-rose-500'
]

// Community prompts (existing data)
const COMMUNITY_PROMPTS: MarketplaceListing[] = [
  { id: 'c1', sourceItemId: '', title: "Full-Stack SaaS Boilerplate", description: "Complete Next.js 14 SaaS with auth, billing, dashboards, and multi-tenancy. Production-ready.", author: "Priya Sharma", avatar: "PS", avatarColor: "bg-violet-500", price: "$12.99", category: "SaaS", tags: ["Next.js", "Stripe", "Supabase"], royaltyPercent: 15, rating: 4.9, reviews: 342, downloads: 2412, saves: 891, remixCount: 67, isTrending: true, isVerified: true, gradient: "from-violet-500/10 to-fuchsia-500/10", status: 'published', earnings: 0, createdAt: '2024-01-15' },
  { id: 'c2', sourceItemId: '', title: "AI Chatbot with RAG Pipeline", description: "Enterprise-grade chatbot with retrieval-augmented generation, memory, and custom knowledge bases.", author: "Marcus Chen", avatar: "MC", avatarColor: "bg-cyan-500", price: "$8.99", category: "AI / ML", tags: ["LangChain", "Pinecone", "GPT-4"], royaltyPercent: 12, rating: 4.8, reviews: 189, downloads: 1823, saves: 445, remixCount: 34, isTrending: true, isVerified: true, gradient: "from-cyan-500/10 to-blue-500/10", status: 'published', earnings: 0, createdAt: '2024-02-03' },
  { id: 'c3', sourceItemId: '', title: "E-Commerce Storefront Kit", description: "Headless commerce with cart, checkout, inventory management, and payment processing.", author: "Sofia Rodriguez", avatar: "SR", avatarColor: "bg-amber-500", price: "$15.99", category: "E-Commerce", tags: ["Shopify API", "Stripe", "Analytics"], royaltyPercent: 18, rating: 4.9, reviews: 521, downloads: 4102, saves: 1203, remixCount: 89, isTrending: false, isVerified: true, gradient: "from-amber-500/10 to-orange-500/10", status: 'published', earnings: 0, createdAt: '2024-01-22' },
  { id: 'c4', sourceItemId: '', title: "Real-Time Trading Dashboard", description: "Live WebSocket feeds, candlestick charts, order books, and portfolio tracking.", author: "Aditya Kapoor", avatar: "AK", avatarColor: "bg-emerald-500", price: "$19.99", category: "FinTech", tags: ["WebSocket", "D3.js", "REST API"], royaltyPercent: 20, rating: 4.7, reviews: 156, downloads: 980, saves: 312, remixCount: 22, isTrending: false, isVerified: false, gradient: "from-emerald-500/10 to-teal-500/10", status: 'published', earnings: 0, createdAt: '2024-03-10' },
  { id: 'c5', sourceItemId: '', title: "Design System Generator", description: "Auto-generate tokens, components, and documentation from a brand config file.", author: "Elena Volkov", avatar: "EV", avatarColor: "bg-pink-500", price: "$6.99", category: "Design Systems", tags: ["Figma", "Tokens", "Storybook"], royaltyPercent: 10, rating: 4.6, reviews: 98, downloads: 756, saves: 234, remixCount: 41, isTrending: false, isVerified: true, gradient: "from-pink-500/10 to-rose-500/10", status: 'published', earnings: 0, createdAt: '2024-02-18' },
  { id: 'c6', sourceItemId: '', title: "CLI Tool Builder Framework", description: "Scaffold production CLI tools with arg parsing, plugins, interactive prompts, and auto-updates.", author: "Jake Morrison", avatar: "JM", avatarColor: "bg-indigo-500", price: "$9.99", category: "DevTools", tags: ["Node.js", "Commander", "Ink"], royaltyPercent: 14, rating: 4.8, reviews: 203, downloads: 1450, saves: 567, remixCount: 55, isTrending: true, isVerified: true, gradient: "from-indigo-500/10 to-violet-500/10", status: 'published', earnings: 0, createdAt: '2024-01-30' },
  { id: 'c7', sourceItemId: '', title: "Multi-Tenant API Gateway", description: "Rate-limited API gateway with tenant isolation, JWT auth, and usage analytics.", author: "Ravi Patel", avatar: "RP", avatarColor: "bg-sky-500", price: "$14.99", category: "APIs & Backend", tags: ["Express", "Redis", "JWT"], royaltyPercent: 16, rating: 4.7, reviews: 127, downloads: 890, saves: 278, remixCount: 18, isTrending: false, isVerified: false, gradient: "from-sky-500/10 to-blue-500/10", status: 'published', earnings: 0, createdAt: '2024-03-05' },
  { id: 'c8', sourceItemId: '', title: "React Native Social App", description: "Instagram-style social feed with stories, DMs, notifications, and media upload.", author: "Lina Park", avatar: "LP", avatarColor: "bg-rose-500", price: "$11.99", category: "Mobile Apps", tags: ["React Native", "Firebase", "Expo"], royaltyPercent: 15, rating: 4.8, reviews: 274, downloads: 2100, saves: 789, remixCount: 43, isTrending: true, isVerified: true, gradient: "from-rose-500/10 to-pink-500/10", status: 'published', earnings: 0, createdAt: '2024-02-12' },
]

const TOP_CREATORS = [
  { name: "Priya Sharma", avatar: "PS", color: "bg-violet-500", earnings: "$42.8k", sales: 2412, prompts: 24, rank: 1 },
  { name: "Marcus Chen", avatar: "MC", color: "bg-cyan-500", earnings: "$38.2k", sales: 1823, prompts: 18, rank: 2 },
  { name: "Sofia Rodriguez", avatar: "SR", color: "bg-amber-500", earnings: "$35.6k", sales: 4102, prompts: 31, rank: 3 },
  { name: "Jake Morrison", avatar: "JM", color: "bg-indigo-500", earnings: "$28.1k", sales: 1450, prompts: 15, rank: 4 },
  { name: "Lina Park", avatar: "LP", color: "bg-rose-500", earnings: "$24.9k", sales: 2100, prompts: 20, rank: 5 },
]

// Mock saved items (user's projects & prompts)
const MOCK_SAVED_ITEMS: SavedItem[] = [
  { id: 's1', type: 'project', title: 'AI Content Writer SaaS', description: 'A SaaS platform that generates blog posts, social media content, and marketing copy using GPT-4.', stack: 'Next.js + Supabase', category: 'SaaS', createdAt: '2024-03-15' },
  { id: 's2', type: 'project', title: 'Fitness Tracker Mobile App', description: 'React Native app with workout tracking, nutrition logging, progress photos, and social challenges.', stack: 'React Native + Firebase', category: 'Mobile Apps', createdAt: '2024-03-10' },
  { id: 's3', type: 'prompt', title: 'E-Commerce Product Recommender', description: 'ML-powered product recommendation engine using collaborative filtering and content-based approaches.', category: 'AI / ML', createdAt: '2024-03-08' },
  { id: 's4', type: 'project', title: 'Team Project Manager', description: 'Kanban-style project management tool with real-time collaboration, Gantt charts, and time tracking.', stack: 'Next.js + Prisma', category: 'SaaS', createdAt: '2024-03-05' },
  { id: 's5', type: 'prompt', title: 'REST API Scaffolder', description: 'Generate a full REST API with CRUD endpoints, validation, auth middleware, and OpenAPI docs from a schema file.', category: 'APIs & Backend', createdAt: '2024-03-01' },
  { id: 's6', type: 'prompt', title: 'Landing Page Copy Generator', description: 'Create compelling landing page copy with hero sections, feature highlights, testimonials, and CTAs.', category: 'Design Systems', createdAt: '2024-02-28' },
  { id: 's7', type: 'project', title: 'Personal Finance Dashboard', description: 'Track expenses, budgets, investments, and net worth with beautiful charts and bank integrations.', stack: 'Next.js + Plaid', category: 'FinTech', createdAt: '2024-02-25' },
  { id: 's8', type: 'prompt', title: 'Automated Testing Suite Generator', description: 'Generate comprehensive unit, integration, and E2E tests for any codebase with coverage reports.', category: 'DevTools', createdAt: '2024-02-20' },
]

/* ════════════════════════════════════════════════════════════════════
   LISTING FORM STATE
   ════════════════════════════════════════════════════════════════════ */

interface ListingFormState {
  sourceItem: SavedItem | null
  title: string
  description: string
  category: string
  tags: string[]
  price: string
  royaltyPercent: number
}

const INITIAL_FORM: ListingFormState = {
  sourceItem: null,
  title: '',
  description: '',
  category: '',
  tags: [],
  price: '',
  royaltyPercent: 15,
}

/* ════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ════════════════════════════════════════════════════════════════════ */

export default function MarketplacePage() {
  // View state
  const [activeTab, setActiveTab] = useState<'discover' | 'my-listings'>('discover')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeSort, setActiveSort] = useState('Trending')
  const [searchQuery, setSearchQuery] = useState('')
  const [likedPrompts, setLikedPrompts] = useState<string[]>([])
  const [savedPrompts, setSavedPrompts] = useState<string[]>([])

  // Create listing modal
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [createStep, setCreateStep] = useState(1) // 1=Select, 2=Configure, 3=Review
  const [form, setForm] = useState<ListingFormState>(INITIAL_FORM)

  // User's published listings (local state)
  const [myListings, setMyListings] = useState<MarketplaceListing[]>([])

  const toggleLike = (id: string) => {
    setLikedPrompts(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  const toggleSave = (id: string) => {
    setSavedPrompts(prev => {
      const isSaved = prev.includes(id)
      toast.success(isSaved ? "Removed from saved" : "Saved to your library")
      return isSaved ? prev.filter(pId => pId !== id) : [...prev, id]
    })
  }

  // Open the create modal
  const openCreateModal = useCallback(() => {
    setForm(INITIAL_FORM)
    setCreateStep(1)
    setShowCreateModal(true)
  }, [])

  // Select a source item (step 1 → step 2)
  const selectSource = useCallback((item: SavedItem) => {
    setForm(prev => ({
      ...prev,
      sourceItem: item,
      title: item.title,
      description: item.description,
      category: item.category,
    }))
    setCreateStep(2)
  }, [])

  // Toggle a tag
  const toggleTag = useCallback((tag: string) => {
    setForm(prev => ({
      ...prev,
      tags: prev.tags.includes(tag) ? prev.tags.filter(t => t !== tag) : prev.tags.length < 5 ? [...prev.tags, tag] : prev.tags,
    }))
  }, [])

  // Publish the listing (step 3 → done)
  const publishListing = useCallback(() => {
    const newListing: MarketplaceListing = {
      id: `my-${Date.now()}`,
      sourceItemId: form.sourceItem?.id ?? '',
      title: form.title,
      description: form.description,
      author: 'You',
      avatar: 'YO',
      avatarColor: AVATAR_COLORS[myListings.length % AVATAR_COLORS.length],
      category: form.category,
      tags: form.tags,
      price: `$${form.price}`,
      royaltyPercent: form.royaltyPercent,
      status: 'published',
      downloads: 0,
      earnings: 0,
      rating: 0,
      reviews: 0,
      saves: 0,
      remixCount: 0,
      isTrending: false,
      isVerified: false,
      gradient: GRADIENTS[myListings.length % GRADIENTS.length],
      createdAt: new Date().toISOString().slice(0, 10),
    }
    setMyListings(prev => [newListing, ...prev])
    setShowCreateModal(false)
    setActiveTab('my-listings')
  }, [form, myListings.length])

  // Remove a listing
  const removeListing = useCallback((id: string) => {
    setMyListings(prev => prev.filter(l => l.id !== id))
  }, [])

  // Check if form step 2 is valid
  const isStep2Valid = form.title.trim() && form.description.trim() && form.category && form.tags.length > 0 && form.price && parseFloat(form.price) > 0

  // Map category id → label for filtering
  const CATEGORY_ID_TO_LABEL: Record<string, string> = Object.fromEntries(
    CATEGORIES.filter(c => c.id !== 'all').map(c => [c.id, c.label])
  )

  // Filter prompts by active category + search query
  const filteredPrompts = COMMUNITY_PROMPTS.filter(prompt => {
    // Category filter
    if (activeCategory !== 'all') {
      const selectedLabel = CATEGORY_ID_TO_LABEL[activeCategory]
      if (selectedLabel && prompt.category !== selectedLabel) return false
    }
    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      const matchesTitle = prompt.title.toLowerCase().includes(q)
      const matchesDesc = prompt.description.toLowerCase().includes(q)
      const matchesAuthor = prompt.author.toLowerCase().includes(q)
      const matchesTags = prompt.tags.some(t => t.toLowerCase().includes(q))
      if (!matchesTitle && !matchesDesc && !matchesAuthor && !matchesTags) return false
    }
    return true
  }).sort((a, b) => {
    switch (activeSort) {
      case 'Trending':
        // Trending items first, then by downloads
        if (a.isTrending !== b.isTrending) return a.isTrending ? -1 : 1
        return b.downloads - a.downloads
      case 'Newest':
        return b.createdAt.localeCompare(a.createdAt)
      case 'Top Rated':
        if (b.rating !== a.rating) return b.rating - a.rating
        return b.reviews - a.reviews
      case 'Best Selling':
        return b.downloads - a.downloads
      case 'Most Remixed':
        return b.remixCount - a.remixCount
      default:
        return 0
    }
  })

  return (
    <div className="flex-1 -m-8 flex flex-col bg-secondary/20">

      {/* ──────────── HERO BANNER ──────────── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-background to-emerald-500/10 border-b border-border">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 px-8 py-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-accent">Prompt Marketplace</span>
                <span className="bg-emerald-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold uppercase">Live</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-2">
                Discover & Trade <span className="italic">Prompts</span>
              </h1>
              <p className="text-muted-foreground text-sm max-w-lg">
                Browse battle-tested prompts from top creators. Buy, remix, and earn royalties in the developer creator economy.
              </p>
            </div>
            <div className="flex gap-3">
              <Button onClick={openCreateModal} variant="default" className="rounded-full font-semibold shadow-lg gap-2">
                <BadgeDollarSign className="w-4 h-4" /> Start Selling
              </Button>
              <Button onClick={() => setActiveTab('my-listings')} variant="outline" className="rounded-full font-medium gap-2">
                <Package className="w-4 h-4" /> My Listings
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {[
              { icon: ShoppingBag, label: "Total Prompts", value: "48,200+" },
              { icon: Users, label: "Active Creators", value: "12,400+" },
              { icon: BadgeDollarSign, label: "Total Earned", value: "$2.1M+" },
              { icon: Repeat2, label: "Total Remixes", value: "15,800+" },
            ].map((s, i) => (
              <div key={i} className="bg-background/70 backdrop-blur-sm border border-border/60 rounded-xl p-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-lg font-bold tracking-tight">{s.value}</div>
                  <div className="text-[10px] text-muted-foreground font-medium">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ──────────── TAB BAR ──────────── */}
      <div className="max-w-7xl mx-auto px-8 pt-6">
        <div className="flex items-center gap-1 bg-secondary/50 rounded-xl p-1 w-fit border border-border/50">
          {[
            { id: 'discover' as const, label: 'Discover', icon: Search },
            { id: 'my-listings' as const, label: 'My Listings', icon: Package, count: myListings.length },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {tab.count !== undefined && tab.count > 0 && (
                <span className="text-[10px] bg-accent text-white px-1.5 py-0.5 rounded-full font-bold">{tab.count}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ──────────── CONTENT ──────────── */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        <AnimatePresence mode="wait">
          {activeTab === 'discover' ? (
            <motion.div key="discover" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
              {/* Search + Sort */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search prompts, creators, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                  />
                </div>
                <div className="flex gap-2">
                  {SORT_OPTIONS.slice(0, 3).map(s => (
                    <button
                      key={s}
                      onClick={() => setActiveSort(s)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        activeSort === s ? 'bg-foreground text-background border-foreground' : 'bg-background text-muted-foreground border-border hover:border-foreground/30'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap border transition-all ${
                      activeCategory === cat.id
                        ? 'bg-foreground text-background border-foreground shadow-md'
                        : 'bg-background text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    {cat.label}
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      activeCategory === cat.id ? 'bg-background/20 text-background' : 'bg-secondary text-muted-foreground'
                    }`}>
                      {cat.count.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>

              {/* Grid + Sidebar */}
              <div className="flex gap-8">
                <div className="flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {filteredPrompts.length > 0 ? filteredPrompts.map((prompt, i) => (
                      <PromptCard key={prompt.id} prompt={prompt} index={i} liked={likedPrompts.includes(prompt.id)} onLike={() => toggleLike(prompt.id)} saved={savedPrompts.includes(prompt.id)} onSave={() => toggleSave(prompt.id)} />
                    )) : (
                      <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                        <Search className="w-10 h-10 text-muted-foreground/30 mb-4" />
                        <h3 className="text-lg font-semibold mb-1">No prompts found</h3>
                        <p className="text-sm text-muted-foreground max-w-sm">
                          Try a different category or search term.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center mt-8">
                    <Button variant="outline" className="rounded-full px-8 gap-2">
                      Load More Prompts <ChevronDown className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="hidden xl:flex flex-col gap-6 w-72 shrink-0">
                  {/* Top Creators */}
                  <div className="rounded-2xl border border-border bg-background p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Crown className="w-4 h-4 text-amber-500" />
                      <h3 className="text-sm font-bold">Top Creators</h3>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {TOP_CREATORS.map(c => (
                        <div key={c.rank} className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer">
                          <span className="text-xs font-bold text-muted-foreground/50 w-4">#{c.rank}</span>
                          <div className={`w-7 h-7 rounded-full ${c.color} text-white text-[10px] font-bold flex items-center justify-center`}>
                            {c.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold truncate">{c.name}</div>
                            <div className="text-[10px] text-emerald-600">{c.earnings}</div>
                          </div>
                          <div className="text-[10px] text-muted-foreground">{c.prompts} prompts</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-emerald-500/5 p-5">
                    <Sparkles className="w-5 h-5 text-accent mb-3" />
                    <h3 className="text-sm font-bold mb-1">Start Earning Today</h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed mb-4">
                      List your prompts and earn up to 20% royalties on every sale and remix.
                    </p>
                    <Button onClick={openCreateModal} className="w-full rounded-full text-xs font-semibold gap-1.5" size="sm">
                      <BadgeDollarSign className="w-3.5 h-3.5" /> Create Listing
                    </Button>
                  </div>

                  {/* Trending Tags */}
                  <div className="rounded-2xl border border-border bg-background p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-muted-foreground" />
                      <h3 className="text-sm font-bold">Trending Tags</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {["Next.js 15", "AI Agents", "Supabase", "Stripe", "RAG", "React Native", "tRPC", "Tailwind v4", "LangChain", "Drizzle ORM", "WebSocket", "Edge Functions"].map((tag, i) => (
                        <span key={i} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-foreground hover:border-accent/30 cursor-pointer transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Royalty Info */}
                  <div className="rounded-2xl border border-border bg-background p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="w-4 h-4 text-accent" />
                      <h3 className="text-sm font-bold">How Royalties Work</h3>
                    </div>
                    <div className="flex flex-col gap-2 text-[11px] text-muted-foreground">
                      <div className="flex items-start gap-2"><span className="text-accent font-bold">1.</span> List your prompt with a price</div>
                      <div className="flex items-start gap-2"><span className="text-accent font-bold">2.</span> Set royalty rate (10-20%)</div>
                      <div className="flex items-start gap-2"><span className="text-accent font-bold">3.</span> Earn on every sale &amp; remix</div>
                      <div className="flex items-start gap-2"><span className="text-accent font-bold">4.</span> Instant payouts to your wallet</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ──────────── MY LISTINGS TAB ──────────── */
            <motion.div key="my-listings" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
              {myListings.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <Package className="w-10 h-10 text-accent" />
                  </div>
                  <h2 className="text-2xl font-display font-bold mb-2">No listings yet</h2>
                  <p className="text-muted-foreground text-sm max-w-md mb-8">
                    Turn your saved projects and prompts into marketplace listings. Set your price, earn royalties on every sale and remix.
                  </p>
                  <Button onClick={openCreateModal} className="rounded-full font-semibold gap-2 px-8 shadow-lg">
                    <Plus className="w-4 h-4" /> Create Your First Listing
                  </Button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold">Your Listings</h2>
                      <p className="text-sm text-muted-foreground">{myListings.length} prompt{myListings.length !== 1 ? 's' : ''} listed on the marketplace</p>
                    </div>
                    <Button onClick={openCreateModal} className="rounded-full font-semibold gap-2">
                      <Plus className="w-4 h-4" /> Add New Listing
                    </Button>
                  </div>

                  {/* My listings summary stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                    {[
                      { label: 'Total Listings', value: myListings.length, icon: Package },
                      { label: 'Total Downloads', value: myListings.reduce((s, l) => s + l.downloads, 0), icon: Download },
                      { label: 'Total Earnings', value: `$${myListings.reduce((s, l) => s + l.earnings, 0).toFixed(2)}`, icon: DollarSign },
                      { label: 'Avg Rating', value: myListings.filter(l => l.rating > 0).length > 0 ? (myListings.reduce((s, l) => s + l.rating, 0) / myListings.filter(l => l.rating > 0).length).toFixed(1) : '—', icon: Star },
                    ].map((stat, i) => (
                      <div key={i} className="bg-background border border-border rounded-xl p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                          <stat.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <div className="text-xl font-bold">{stat.value}</div>
                          <div className="text-[11px] text-muted-foreground font-medium">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Listing Cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {myListings.map((listing, i) => (
                      <motion.div
                        key={listing.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={`group relative rounded-2xl border border-border bg-gradient-to-br ${listing.gradient} p-5 flex flex-col gap-3`}
                      >
                        {/* Status badge */}
                        <div className="absolute top-4 right-4">
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Published
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <h3 className="text-base font-bold tracking-tight pr-20">{listing.title}</h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{listing.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {listing.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-background/70 border border-border/50 text-foreground/70">{tag}</span>
                          ))}
                        </div>

                        {/* Footer with stats & actions */}
                        <div className="flex items-center justify-between pt-3 border-t border-border/30 mt-auto">
                          <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                            <span className="flex items-center gap-1"><Download className="w-3 h-3" /> {listing.downloads}</span>
                            <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" /> {listing.earnings.toFixed(2)}</span>
                            <span className="text-emerald-600 font-medium">{listing.royaltyPercent}% royalty</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-base font-bold">{listing.price}</span>
                            <button
                              onClick={() => removeListing(listing.id)}
                              className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors ml-2"
                              title="Remove listing"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ════════════════════════════════════════════════════════════════
         CREATE LISTING MODAL
         ════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {showCreateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCreateModal(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-background border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <div>
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <BadgeDollarSign className="w-5 h-5 text-accent" />
                    Create Listing
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {createStep === 1 && 'Select a saved project or prompt to list'}
                    {createStep === 2 && 'Configure your listing details'}
                    {createStep === 3 && 'Review and publish your listing'}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  {/* Step Indicator */}
                  <div className="flex items-center gap-2">
                    {[1, 2, 3].map(step => (
                      <div key={step} className="flex items-center gap-1.5">
                        <div className={`w-7 h-7 rounded-full text-[11px] font-bold flex items-center justify-center transition-colors ${
                          createStep >= step ? 'bg-accent text-white' : 'bg-secondary text-muted-foreground'
                        }`}>
                          {createStep > step ? <Check className="w-3.5 h-3.5" /> : step}
                        </div>
                        {step < 3 && <div className={`w-6 h-0.5 rounded-full transition-colors ${createStep > step ? 'bg-accent' : 'bg-secondary'}`} />}
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setShowCreateModal(false)} className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6">
                <AnimatePresence mode="wait">

                  {/* ── STEP 1: Select Source ── */}
                  {createStep === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <div className="mb-5">
                        <h3 className="text-sm font-semibold mb-1">Your Saved Items</h3>
                        <p className="text-xs text-muted-foreground">Select a project or prompt you want to sell on the marketplace.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {MOCK_SAVED_ITEMS.map(item => (
                          <button
                            key={item.id}
                            onClick={() => selectSource(item)}
                            className={`text-left p-4 rounded-xl border transition-all hover:shadow-md hover:-translate-y-0.5 ${
                              form.sourceItem?.id === item.id
                                ? 'border-accent bg-accent/5 shadow-accent/10'
                                : 'border-border bg-background hover:border-accent/30'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${item.type === 'project' ? 'bg-violet-100 text-violet-600' : 'bg-cyan-100 text-cyan-600'}`}>
                                {item.type === 'project' ? <Folder className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
                              </div>
                              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{item.type}</span>
                              {item.stack && <span className="text-[10px] text-muted-foreground ml-auto">{item.stack}</span>}
                            </div>
                            <h4 className="text-sm font-bold mb-1">{item.title}</h4>
                            <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">{item.description}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">{item.category}</span>
                              <span className="text-[10px] text-muted-foreground ml-auto">{item.createdAt}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* ── STEP 2: Configure Listing ── */}
                  {createStep === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <div className="space-y-5">
                        {/* Title */}
                        <div>
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Listing Title</label>
                          <input
                            type="text"
                            value={form.title}
                            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                            className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                            placeholder="e.g. Full-Stack SaaS Boilerplate"
                          />
                        </div>

                        {/* Description */}
                        <div>
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Description</label>
                          <textarea
                            value={form.description}
                            onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                            rows={3}
                            className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                            placeholder="Describe what buyers will get..."
                          />
                        </div>

                        {/* Category */}
                        <div>
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Category</label>
                          <div className="flex flex-wrap gap-2">
                            {CATEGORY_OPTIONS.map(cat => (
                              <button
                                key={cat}
                                onClick={() => setForm(f => ({ ...f, category: cat }))}
                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                                  form.category === cat
                                    ? 'bg-foreground text-background border-foreground'
                                    : 'bg-background text-muted-foreground border-border hover:border-foreground/30'
                                }`}
                              >
                                {cat}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Tags */}
                        <div>
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Tags <span className="text-muted-foreground/50">(up to 5)</span></label>
                          <div className="flex flex-wrap gap-1.5">
                            {TAG_OPTIONS.map(tag => (
                              <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`px-2.5 py-1 rounded-md text-[11px] font-medium border transition-all ${
                                  form.tags.includes(tag)
                                    ? 'bg-accent text-white border-accent'
                                    : 'bg-background text-muted-foreground border-border hover:border-accent/30'
                                } ${!form.tags.includes(tag) && form.tags.length >= 5 ? 'opacity-40 cursor-not-allowed' : ''}`}
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Price & Royalty */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Price (USD)</label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <input
                                type="number"
                                min="0.99"
                                step="0.01"
                                value={form.price}
                                onChange={e => setForm(f => ({ ...f, price: e.target.value }))}
                                className="w-full bg-secondary/30 border border-border rounded-xl pl-9 pr-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                                placeholder="9.99"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Royalty Rate</label>
                            <div className="flex items-center gap-3">
                              <input
                                type="range"
                                min={10}
                                max={20}
                                value={form.royaltyPercent}
                                onChange={e => setForm(f => ({ ...f, royaltyPercent: parseInt(e.target.value) }))}
                                className="flex-1 accent-accent"
                              />
                              <span className="text-sm font-bold w-12 text-right">{form.royaltyPercent}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* ── STEP 3: Review & Publish ── */}
                  {createStep === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <div className="mb-5">
                        <h3 className="text-sm font-semibold mb-1">Preview</h3>
                        <p className="text-xs text-muted-foreground">This is how your listing will appear on the marketplace.</p>
                      </div>

                      {/* Preview card */}
                      <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/5 to-emerald-500/5 p-6 mb-6">
                        <div className="flex items-center gap-2.5 mb-4">
                          <div className="w-9 h-9 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow-sm">YO</div>
                          <div>
                            <div className="text-xs font-semibold">You</div>
                            <span className="text-[10px] text-muted-foreground">{form.category}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold tracking-tight mb-2">{form.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{form.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {form.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-background/70 border border-border/50 text-foreground/70">{tag}</span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-border/30">
                          <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                            <span className="flex items-center gap-1"><Download className="w-3 h-3" /> 0</span>
                            <span className="flex items-center gap-1"><Repeat2 className="w-3 h-3 text-accent" /> 0</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-emerald-600 font-medium">{form.royaltyPercent}% royalty</span>
                            <span className="text-lg font-bold">${form.price}</span>
                          </div>
                        </div>
                      </div>

                      {/* Summary table */}
                      <div className="rounded-xl border border-border bg-secondary/20 p-4 space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-muted-foreground">Source</span><span className="font-medium">{form.sourceItem?.title}</span></div>
                        <div className="flex justify-between"><span className="text-muted-foreground">Category</span><span className="font-medium">{form.category}</span></div>
                        <div className="flex justify-between"><span className="text-muted-foreground">Price</span><span className="font-medium">${form.price}</span></div>
                        <div className="flex justify-between"><span className="text-muted-foreground">Royalty</span><span className="font-medium">{form.royaltyPercent}%</span></div>
                        <div className="flex justify-between"><span className="text-muted-foreground">Tags</span><span className="font-medium">{form.tags.join(', ')}</span></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-secondary/20">
                <div>
                  {createStep > 1 && (
                    <Button variant="ghost" onClick={() => setCreateStep(s => s - 1)} className="gap-1.5 text-sm">
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </Button>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setShowCreateModal(false)} className="rounded-xl">Cancel</Button>
                  {createStep === 2 && (
                    <Button
                      onClick={() => setCreateStep(3)}
                      disabled={!isStep2Valid}
                      className="rounded-xl gap-1.5"
                    >
                      Review Listing <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  )}
                  {createStep === 3 && (
                    <Button onClick={publishListing} className="rounded-xl gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg">
                      <Sparkles className="w-3.5 h-3.5" /> Publish Listing
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════════════
   PROMPT CARD (extracted for readability)
   ════════════════════════════════════════════════════════════════════ */

function PromptCard({ prompt, index, liked, onLike, saved, onSave }: { prompt: MarketplaceListing; index: number; liked: boolean; onLike: () => void; saved: boolean; onSave: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`group relative rounded-2xl border border-border bg-gradient-to-br ${prompt.gradient} backdrop-blur-sm p-5 flex flex-col gap-3 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 cursor-pointer hover:-translate-y-0.5 hover:border-accent/30`}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <div className={`w-9 h-9 rounded-full ${prompt.avatarColor} text-white text-xs font-bold flex items-center justify-center shadow-sm`}>
            {prompt.avatar}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold">{prompt.author}</span>
              {prompt.isVerified && <Award className="w-3 h-3 text-accent fill-accent/20" />}
            </div>
            <span className="text-[10px] text-muted-foreground">{prompt.category}</span>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={(e) => { e.stopPropagation(); onLike() }}
            className="p-1.5 rounded-full hover:bg-background/80 transition-colors"
          >
            <Heart className={`w-4 h-4 transition-colors ${liked ? 'text-red-500 fill-red-500' : 'text-muted-foreground'}`} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onSave() }}
            className="p-1.5 rounded-full hover:bg-background/80 transition-colors"
          >
            <Bookmark className={`w-4 h-4 transition-colors ${saved ? 'text-blue-500 fill-blue-500' : 'text-muted-foreground'}`} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-base font-bold tracking-tight mb-1 group-hover:text-accent transition-colors">{prompt.title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{prompt.description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {prompt.tags.map((tag, idx) => (
          <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-background/70 border border-border/50 text-foreground/70">{tag}</span>
        ))}
        {prompt.isTrending && (
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-0.5">
            <TrendingUp className="w-2.5 h-2.5" /> Hot
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-border/30 mt-auto">
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <strong className="text-foreground">{prompt.rating}</strong>
            ({prompt.reviews})
          </span>
          <span className="flex items-center gap-1">
            <Download className="w-3 h-3" /> {prompt.downloads.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Repeat2 className="w-3 h-3 text-accent" /> {prompt.remixCount}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-emerald-600 font-medium">{prompt.royaltyPercent}% royalty</span>
          <span className="text-base font-bold">{prompt.price}</span>
        </div>
      </div>
    </motion.div>
  )
}
