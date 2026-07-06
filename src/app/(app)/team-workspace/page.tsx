"use client"

import React, { useState } from 'react'
import { 
  Users, 
  History, 
  MessageSquare, 
  Share2, 
  GitCommit, 
  Play,
  Save,
  CheckCircle2,
  Clock,
  MoreVertical,
  Plus,
  GitBranch,
  Wand2,
  Lock,
  Unlock,
  AlertCircle
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const TEAM_MEMBERS = [
  { id: 1, name: "Kunal Verma", role: "Owner", avatar: "KV", color: "bg-blue-500", status: "online", active: true },
  { id: 2, name: "Alice Chen", role: "Editor", avatar: "AC", color: "bg-purple-500", status: "online", active: true },
  { id: 3, name: "Bob Smith", role: "Viewer", avatar: "BS", color: "bg-emerald-500", status: "offline", active: false },
]

const VERSION_HISTORY = [
  { id: "v1.4.2", author: "Alice Chen", time: "2 mins ago", message: "Refined output format for JSON", current: true },
  { id: "v1.4.1", author: "Kunal Verma", time: "1 hour ago", message: "Added tone constraints", current: false },
  { id: "v1.4.0", author: "Kunal Verma", time: "3 hours ago", message: "Initial prompt structure", current: false },
]

const COMMENTS = [
  { id: 1, author: "Bob Smith", time: "15 mins ago", text: "Should we add a constraint to limit the output to 500 words?", resolved: false },
  { id: 2, author: "Alice Chen", time: "45 mins ago", text: "I fixed the issue where the model was hallucinating the API keys.", resolved: true },
]

export default function TeamWorkspacePage() {
  const [promptText, setPromptText] = useState(
    "You are an expert technical writer. Explain the concept of [TOPIC] to a beginner programmer.\n\nConstraints:\n- Use simple, everyday analogies.\n- Avoid overly dense jargon.\n- Provide a short code example in JavaScript.\n- Output strictly in valid JSON format with keys: 'title', 'explanation', 'analogy', 'code_snippet'."
  )
  const [activeTab, setActiveTab] = useState<'versions' | 'comments'>('versions')
  const [isLocked, setIsLocked] = useState(false)

  return (
    <div className="flex-1 space-y-6 p-8 pt-6 max-w-7xl mx-auto h-screen flex flex-col overflow-hidden">
      <div className="flex items-center justify-between shrink-0">
        <div className="space-y-1 font-body">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-display font-semibold tracking-tight leading-tight">Technical Writer Prompt</h2>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Sync
            </div>
            {isLocked && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-full text-xs font-medium">
                <Lock className="w-3 h-3" />
                Locked by Kunal
              </div>
            )}
          </div>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Workspace: <span className="font-semibold text-foreground">Content Team Alpha</span> 
            <span className="text-border">•</span> 
            Last edited 2 mins ago by Alice Chen
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2 mr-2">
            {TEAM_MEMBERS.map((member) => (
              <div 
                key={member.id} 
                className={`w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-[10px] font-bold text-white relative shadow-sm ${member.color}`}
                title={`${member.name} (${member.role})`}
              >
                {member.avatar}
                {member.status === 'online' && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-background"></div>
                )}
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold text-muted-foreground cursor-pointer hover:bg-secondary/80">
              <Plus className="w-3 h-3" />
            </div>
          </div>
          
          <Button variant="outline" size="sm" className="h-9">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button size="sm" className="h-9 bg-purple-600 hover:bg-purple-700 text-white">
            <Play className="w-4 h-4 mr-2" />
            Test Prompt
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0 pb-6">
        {/* Editor Area */}
        <div className="lg:col-span-2 flex flex-col gap-4 min-h-0">
          <div className="flex-1 bg-background border border-border shadow-sm rounded-xl overflow-hidden flex flex-col relative">
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/30">
              <div className="flex items-center gap-2">
              <Wand2 className="w-4 h-4 text-purple-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">Prompt Editor</span>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-7 text-xs px-2 text-muted-foreground hover:text-foreground"
                  onClick={() => setIsLocked(!isLocked)}
                >
                  {isLocked ? <Unlock className="w-3 h-3 mr-1" /> : <Lock className="w-3 h-3 mr-1" />}
                  {isLocked ? "Unlock" : "Lock"}
                </Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs px-2 text-muted-foreground hover:text-foreground">
                  <Save className="w-3 h-3 mr-1" />
                  Save Version
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative p-4 group">
              <textarea
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                disabled={isLocked}
                className="w-full h-full resize-none outline-none bg-transparent font-mono text-sm leading-relaxed text-foreground/90 disabled:opacity-50"
                placeholder="Enter your prompt here..."
              />
              
              {/* Fake collaborative cursors */}
              <div className="absolute top-20 left-[35%] flex flex-col items-start pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-0.5 h-5 bg-purple-500 animate-pulse"></div>
                <div className="bg-purple-500 text-white text-[10px] px-1.5 py-0.5 rounded-r-md rounded-bl-md font-medium shadow-sm">
                  Alice is typing...
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-48 bg-secondary/20 border border-border rounded-xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3 font-body">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">Test Output Preview</span>
              <span className="text-xs text-muted-foreground">GPT-4 Turbo</span>
            </div>
            <div className="flex-1 rounded-lg border border-border/50 bg-background/50 flex items-center justify-center text-sm text-muted-foreground italic">
              Click &quot;Test Prompt&quot; to generate a preview.
            </div>
          </div>
        </div>

        {/* Sidebar - Version Control & Comments */}
        <div className="flex flex-col bg-background border border-border shadow-sm rounded-xl overflow-hidden min-h-0">
          <div className="flex border-b border-border">
            <button 
              className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'versions' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'}`}
              onClick={() => setActiveTab('versions')}
            >
              <History className="w-4 h-4" />
              History
            </button>
            <button 
              className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'comments' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'}`}
              onClick={() => setActiveTab('comments')}
            >
              <MessageSquare className="w-4 h-4" />
              Comments
              <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded-full">2</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {activeTab === 'versions' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-2 font-body">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">Version History</h4>
                  <Button variant="outline" size="sm" className="h-7 text-xs">
                    <GitBranch className="w-3 h-3 mr-1" />
                    Branch
                  </Button>
                </div>
                
                <div className="relative pl-3 border-l-2 border-border/50 space-y-6">
                  {VERSION_HISTORY.map((version, i) => (
                    <div key={version.id} className="relative">
                      <div className={`absolute -left-[17px] top-1 w-3 h-3 rounded-full border-2 border-background ${version.current ? 'bg-primary ring-2 ring-primary/20' : 'bg-muted-foreground/30'}`}></div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-medium ${version.current ? 'text-primary' : 'text-foreground'}`}>
                            {version.id}
                            {version.current && <span className="ml-2 text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-md">Current</span>}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {version.time}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/80">{version.message}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-[8px] text-white font-bold">
                            {version.author === "Alice Chen" ? "AC" : "KV"}
                          </div>
                          <span className="text-xs text-muted-foreground">{version.author}</span>
                          {!version.current && (
                            <button className="ml-auto text-xs text-blue-500 hover:text-blue-600 hover:underline">
                              Restore
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'comments' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg border border-border text-sm mb-4">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-muted-foreground">Select text in the editor to add a contextual comment.</span>
                </div>
                
                {COMMENTS.map((comment) => (
                  <div key={comment.id} className={`p-3 rounded-lg border ${comment.resolved ? 'bg-secondary/30 border-transparent opacity-70' : 'bg-background border-border shadow-sm'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white font-bold ${comment.author === 'Alice Chen' ? 'bg-purple-500' : 'bg-emerald-500'}`}>
                          {comment.author === 'Alice Chen' ? 'AC' : 'BS'}
                        </div>
                        <span className="text-xs font-semibold">{comment.author}</span>
                        <span className="text-[10px] text-muted-foreground">{comment.time}</span>
                      </div>
                      {comment.resolved && (
                        <span className="text-[10px] flex items-center gap-1 text-emerald-600 bg-emerald-500/10 px-1.5 py-0.5 rounded-full font-medium">
                          <CheckCircle2 className="w-3 h-3" /> Resolved
                        </span>
                      )}
                    </div>
                    <p className={`text-sm ${comment.resolved ? 'text-muted-foreground line-through' : 'text-foreground/90'}`}>
                      {comment.text}
                    </p>
                    {!comment.resolved && (
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                        <input 
                          type="text" 
                          placeholder="Reply..." 
                          className="flex-1 bg-transparent text-xs outline-none"
                        />
                        <button className="text-xs text-primary font-medium">Reply</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
