"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, Globe, AlertTriangle, Crosshair, ArrowRight, Activity, MapPin, ChevronLeft, ChevronRight, Heart, Bookmark } from "lucide-react"
import { toast } from "sonner"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MARKET_PROBLEMS, Region, Category } from "@/lib/data/problems"

const CATEGORY_EMOJIS: Record<string, string> = {
  "All": "🌍",
  "B2B Services": "🏢",
  "Beauty & Personal Care": "✨",
  "Consumer Services": "🛍️",
  "E-commerce": "🛒",
  "EdTech": "📚",
  "FinTech": "💰",
  "Food & Beverage": "🍔",
  "Home Services": "🏠",
  "Logistics": "📦",
  "Payment Issues": "💳",
  "Real Estate": "🏗️",
  "SaaS": "☁️",
  "Transportation": "🚗",
  "Travel": "✈️",
  "Healthtech": "🏥",
  "Other": "📌"
}

export default function ProblemsDashboard() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [regionFilter, setRegionFilter] = useState<string>("All")
  const [categoryFilter, setCategoryFilter] = useState<string>("All")

  const [likedProblems, setLikedProblems] = useState<string[]>([])
  const [savedProblems, setSavedProblems] = useState<string[]>([])

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    setLikedProblems(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  const toggleSave = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    setSavedProblems(prev => {
      const isSaved = prev.includes(id)
      toast.success(isSaved ? "Removed from saved" : "Saved to your library")
      return isSaved ? prev.filter(x => x !== id) : [...prev, id]
    })
  }

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const filteredProblems = useMemo(() => {
    return MARKET_PROBLEMS.filter(problem => {
      const matchQuery = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         problem.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchRegion = regionFilter === "All" || problem.region === regionFilter
      const matchCategory = categoryFilter === "All" || problem.category === categoryFilter

      return matchQuery && matchRegion && matchCategory
    })
  }, [searchQuery, regionFilter, categoryFilter])

  const handleBuildStartup = (problemId: string) => {
    const problem = MARKET_PROBLEMS.find(p => p.id === problemId)
    if (!problem) return

    const queryParams = new URLSearchParams()
    queryParams.set("name", problem.title)
    queryParams.set("idea", problem.description)
    queryParams.set("stack", problem.suggestedStack)

    router.push(`/dashboard/new?${queryParams.toString()}`)
  }

  // Get unique regions and categories
  const regions = ["All", ...Array.from(new Set(MARKET_PROBLEMS.map(p => p.region)))]
  const categories = [
    "All",
    "B2B Services",
    "Beauty & Personal Care",
    "Consumer Services",
    "E-commerce",
    "EdTech",
    "FinTech",
    "Food & Beverage",
    "Home Services",
    "Logistics",
    "Payment Issues",
    "Real Estate",
    "SaaS",
    "Transportation",
    "Travel",
    "Healthtech",
    "Other"
  ]

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-2 flex items-center gap-2">
            <Globe className="h-7 w-7 text-accent" /> Global Startup Ideas
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover real-world problems with verified Total Addressable Markets (TAM) and high severity scores. 
            Choose a problem, view its whitespace rating, and instantly start building a solution.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search problems..." 
              className="pl-9 bg-background focus-visible:ring-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={regionFilter} onValueChange={(v) => v && setRegionFilter(v)}>
            <SelectTrigger className="w-full sm:w-[150px] bg-background">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map(r => (
                <SelectItem key={r} value={r}>{r === "All" ? "Global (All Regions)" : r}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Category Horizontal Navbar */}
      <div className="relative group/nav pt-2">
        {canScrollLeft && (
          <div className="absolute left-0 top-2 bottom-4 w-20 bg-gradient-to-r from-background to-transparent z-10 flex items-center justify-start pl-1 pointer-events-none">
            <Button 
              variant="outline" size="icon" className="h-8 w-8 rounded-full shadow-md pointer-events-auto bg-background hover:bg-accent hover:text-accent-foreground"
              onClick={() => scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        )}
        
        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto pb-4 gap-2 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-1"
        >
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCategoryFilter(c)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all snap-start ${
                categoryFilter === c 
                  ? 'bg-foreground text-background border-foreground shadow-sm' 
                  : 'bg-background text-muted-foreground border-border/50 hover:border-foreground/30 hover:bg-secondary/50'
              }`}
            >
              <span className="text-base">{CATEGORY_EMOJIS[c] || "📌"}</span>
              {c === "All" ? "All Categories" : c}
            </button>
          ))}
        </div>

        {canScrollRight && (
          <div className="absolute right-0 top-2 bottom-4 w-20 bg-gradient-to-l from-background to-transparent z-10 flex items-center justify-end pr-1 pointer-events-none">
            <Button 
              variant="outline" size="icon" className="h-8 w-8 rounded-full shadow-md pointer-events-auto bg-background hover:bg-accent hover:text-accent-foreground"
              onClick={() => scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProblems.map(problem => (
          <Card key={problem.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md hover:border-foreground/20 group">
            <CardHeader className="bg-secondary/20 pb-4 border-b border-border/50">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1 z-10 w-full min-w-0">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-2 truncate">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {problem.region}</span>
                    <span>•</span>
                    <span className="truncate text-accent capitalize">{problem.category}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight text-foreground line-clamp-2">
                    {problem.title}
                  </CardTitle>
                </div>
                <div className="flex items-center flex-shrink-0 z-10 gap-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full"
                    onClick={(e) => toggleLike(e, problem.id)}
                  >
                    <Heart className={`w-4 h-4 ${likedProblems.includes(problem.id) ? 'text-red-500 fill-red-500' : 'text-muted-foreground'}`} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full"
                    onClick={(e) => toggleSave(e, problem.id)}
                  >
                    <Bookmark className={`w-4 h-4 ${savedProblems.includes(problem.id) ? 'text-blue-500 fill-blue-500' : 'text-muted-foreground'}`} />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-5 flex-1 flex flex-col gap-5">
              <CardDescription className="text-sm text-foreground/80 line-clamp-4 leading-relaxed font-body">
                {problem.description}
              </CardDescription>
              
              <div className="grid grid-cols-3 gap-2 mt-auto">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] uppercase font-bold text-emerald-600 mb-1">TAM</span>
                  <span className="text-lg font-bold text-emerald-700 dark:text-emerald-400 leading-none">{problem.tam}</span>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 flex flex-col items-center justify-center text-center relative group/tip">
                  <span className="text-[10px] uppercase font-bold text-amber-600 mb-1 flex items-center gap-0.5">
                    <AlertTriangle className="h-2.5 w-2.5" /> Severity
                  </span>
                  <span className="text-lg font-bold text-amber-700 dark:text-amber-400 leading-none">{problem.severityScore}/10</span>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 flex flex-col items-center justify-center text-center relative group/tip">
                  <span className="text-[10px] uppercase font-bold text-blue-600 mb-1 flex items-center gap-0.5">
                    <Crosshair className="h-2.5 w-2.5" /> Whitespace
                  </span>
                  <span className="text-lg font-bold text-blue-700 dark:text-blue-400 leading-none">{problem.whitespaceScore}/10</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-secondary/10 px-6 py-4 mt-auto">
              <Button 
                onClick={() => handleBuildStartup(problem.id)}
                className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium group-hover:shadow-lg transition-all"
              >
                <Activity className="h-4 w-4 mr-2 text-accent group-hover:scale-110 transition-transform" /> 
                Build this Startup
                <ArrowRight className="h-4 w-4 ml-auto opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Button>
            </CardFooter>
          </Card>
        ))}

        {filteredProblems.length === 0 && (
          <div className="col-span-full py-20 flex flex-col items-center justify-center text-center border border-dashed rounded-2xl bg-secondary/20">
            <Globe className="h-12 w-12 text-muted-foreground/50 mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-1">No problems found</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              We couldn&apos;t find any startup ideas matching your current search and filters. Please adjust them.
            </p>
            <Button 
              variant="outline" 
              className="mt-6 font-medium"
              onClick={() => {
                setSearchQuery("")
                setRegionFilter("All")
                setCategoryFilter("All")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
