"use client"

import { useState } from "react"
import { Heart, Bookmark, Share2, Copy, ExternalLink, MessageSquare, Image as ImageIcon } from "lucide-react"
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data for saved/liked prompts
const MOCK_PROMPTS = [
  {
    id: "p1",
    title: "E-Commerce Product Recommender",
    description: "ML-powered product recommendation engine using collaborative filtering and content-based approaches.",
    category: "AI / ML",
    type: "Prompt",
    icon: MessageSquare,
    saved: true,
    liked: true,
    author: "Elena Volkov",
    date: "2 days ago"
  },
  {
    id: "p2",
    title: "Minimalist Landing Page",
    description: "Clean, high-converting landing page structure with hero section, features grid, and pricing table.",
    category: "Design Systems",
    type: "Project",
    icon: ImageIcon,
    saved: true,
    liked: false,
    author: "Sofia Rodriguez",
    date: "1 week ago"
  },
  {
    id: "p3",
    title: "REST API Scaffolder",
    description: "Generate a full REST API with CRUD endpoints, validation, auth middleware, and OpenAPI docs.",
    category: "APIs & Backend",
    type: "Prompt",
    icon: MessageSquare,
    saved: false,
    liked: true,
    author: "Jake Morrison",
    date: "3 weeks ago"
  }
]

export function SavedPrompts() {
  const [prompts, setPrompts] = useState(MOCK_PROMPTS)

  const toggleSave = (id: string) => {
    setPrompts(prev => prev.map(p => 
      p.id === id ? { ...p, saved: !p.saved } : p
    ))
    const p = prompts.find(x => x.id === id)
    if (p) {
      toast.success(p.saved ? "Removed from saved" : "Saved to your library")
    }
  }

  const toggleLike = (id: string) => {
    setPrompts(prev => prev.map(p => 
      p.id === id ? { ...p, liked: !p.liked } : p
    ))
  }

  const handleShare = (id: string) => {
    navigator.clipboard.writeText(`https://skyler.app/prompt/${id}`)
    toast.success("Link copied to clipboard!")
  }

  return (
    <div className="mt-12 space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Saved & Liked Prompts</h2>
        <p className="text-muted-foreground">Quickly access the prompts and projects you&apos;ve bookmarked or loved.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {prompts.map((prompt) => (
          <Card key={prompt.id} className="flex flex-col group relative overflow-hidden transition-all hover:shadow-md hover:border-accent/50">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-md bg-secondary/50 text-muted-foreground">
                    <prompt.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{prompt.type}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`h-8 w-8 rounded-full ${prompt.liked ? 'text-rose-500 hover:text-rose-600' : 'text-muted-foreground hover:text-rose-500'}`}
                    onClick={() => toggleLike(prompt.id)}
                  >
                    <Heart className={`w-4 h-4 ${prompt.liked ? 'fill-current' : ''}`} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`h-8 w-8 rounded-full ${prompt.saved ? 'text-blue-500 hover:text-blue-600' : 'text-muted-foreground hover:text-blue-500'}`}
                    onClick={() => toggleSave(prompt.id)}
                  >
                    <Bookmark className={`w-4 h-4 ${prompt.saved ? 'fill-current' : ''}`} />
                  </Button>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full">
                      <Share2 className="w-4 h-4 text-muted-foreground" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuLabel>Share {prompt.type}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleShare(prompt.id)} className="cursor-pointer">
                        <Copy className="mr-2 h-4 w-4" />
                        <span>Copy Link</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        <span>Open in Marketplace</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <CardTitle className="text-lg leading-tight">{prompt.title}</CardTitle>
              <CardDescription className="line-clamp-2 mt-2">{prompt.description}</CardDescription>
            </CardHeader>
            
            <CardFooter className="mt-auto border-t pt-4 flex justify-between items-center text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="truncate max-w-[100px]">By {prompt.author}</span>
                <span>•</span>
                <span>{prompt.category}</span>
              </div>
              <span>{prompt.date}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
