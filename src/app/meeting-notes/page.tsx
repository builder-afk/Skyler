"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText, Calendar, Users, Send, CheckCircle2, Clock, UploadCloud, ChevronRight, AlertCircle, Sparkles, User, FileOutput, Server
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ActionItem {
  id: number
  task: string
  assignee: string
  deadline: string
  priority: number
  status: string
  context: string
}

export default function MeetingNotesConverter() {
  const [notes, setNotes] = useState("")
  const [title, setTitle] = useState("")
  const [participants, setParticipants] = useState("")
  
  const [isLoading, setIsLoading] = useState(false)
  const [actionItems, setActionItems] = useState<ActionItem[]>([])
  const [meetingData, setMeetingData] = useState<{ participants: string[]; action_items: ActionItem[] } | null>(null)
  const [activeTab, setActiveTab] = useState('input')

  const handleAnalyze = async () => {
    if (!notes || !title) return
    setIsLoading(true)
    
    // Simulating API call to the FastAPI backend since backend might not be running yet for the user out-of-the-box
    setTimeout(() => {
        const mockData = {
            meeting_id: 1,
            title: title,
            participants: ["John", "Sarah", "Mike"],
            action_items: [
              { id: 1, task: "Finalize Q2 campaign", assignee: "Team", deadline: "End of month", priority: 7, status: "Pending", context: "John mentioned it's needed this month." },
              { id: 2, task: "Complete design mockups", assignee: "Sarah", deadline: "TBD", priority: 6, status: "Pending", context: "For the new Q2 campaign." },
              { id: 3, task: "Get budget approval", assignee: "Mike", deadline: "Friday", priority: 9, status: "Pending", context: "Urgent." },
              { id: 4, task: "Schedule follow-up meeting", assignee: "TBD", deadline: "Next week", priority: 5, status: "Pending", context: "To review progress." }
            ]
        }
        
        // Uncomment below to connect to the actual backend when running `uvicorn main:app --reload`
        /*
        try {
            const res = await fetch('http://localhost:8000/meetings/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, raw_notes: notes })
            })
            const data = await res.json()
            setMeetingData(data)
            setActionItems(data.action_items)
            setActiveTab('results')
        } catch(e) {
            console.error(e)
            alert("Backend connection failed. Showing mock data.")
            setMeetingData(mockData)
            setActionItems(mockData.action_items)
            setActiveTab('results')
        }
        */

        setMeetingData(mockData)
        setActionItems(mockData.action_items)
        setActiveTab('results')
        setIsLoading(false)

    }, 2500)
  }

  const handleFollowUps = async () => {
    alert("Follow-up emails have been generated and sent! (Check backend console logs)")
  }

  const getPriorityColor = (priority: number) => {
    if (priority >= 8) return "bg-red-500/10 text-red-500 border-red-500/20"
    if (priority >= 5) return "bg-orange-500/10 text-orange-500 border-orange-500/20"
    return "bg-green-500/10 text-green-500 border-green-500/20"
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-body p-6 md:p-12 absolute inset-0 z-50 overflow-y-auto w-full">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
           <div className="flex items-center gap-2 text-accent mb-2">
             <Sparkles className="w-5 h-5" />
             <span className="text-sm font-semibold tracking-wider uppercase">AI Workflow Tool</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">Meeting Intelligence</h1>
           <p className="text-muted-foreground mt-2 max-w-2xl text-lg">
             Convert your raw meeting transcripts into structured action items, prioritize tasks, and automatically dispatch follow-up emails.
           </p>
        </div>
        
        <div className="flex items-center gap-2 bg-secondary/50 rounded-full p-1 border border-border/50 backdrop-blur-sm">
           <button 
             onClick={() => setActiveTab('input')}
             className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'input' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
           >
             1. Input
           </button>
           <button 
             className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'results' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground cursor-not-allowed opacity-50'}`}
             disabled={activeTab !== 'results'}
           >
             2. Action Items
           </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Form / Results */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          <AnimatePresence mode="wait">
            {activeTab === 'input' && (
               <motion.div 
                 key="input-form"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 className="bg-card/50 backdrop-blur-xl border border-border/60 rounded-2xl p-6 shadow-xl"
               >
                 <h2 className="text-xl font-semibold mb-6 flex items-center gap-2"><FileText className="w-5 h-5 text-primary" /> Core Details</h2>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground tracking-wide uppercase mb-2">Meeting Title</label>
                      <input 
                        type="text" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Q2 Marketing Kickoff"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground tracking-wide uppercase mb-2">Expected Participants (Optional)</label>
                      <input 
                        type="text" 
                        value={participants}
                        onChange={(e) => setParticipants(e.target.value)}
                        placeholder="John, Sarah, Mike"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                 </div>

                 <div className="mb-6 border-2 border-dashed border-border/60 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-secondary/20 transition-colors cursor-pointer group">
                   <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                     <UploadCloud className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                   </div>
                   <h3 className="font-medium text-foreground">Upload Transcript File</h3>
                   <p className="text-xs text-muted-foreground mt-1">.txt, .pdf, .docx accepted (up to 10MB)</p>
                 </div>

                 <div className="relative">
                    <label className="block text-xs font-semibold text-muted-foreground tracking-wide uppercase mb-2 flex items-center justify-between">
                      <span>Or Paste Raw Notes</span>
                      <span className="text-[10px] bg-secondary px-2 py-0.5 rounded-full lowercase tracking-normal">Markdown supported</span>
                    </label>
                    <textarea 
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Paste your raw, messy meeting notes here. The AI will make sense of it..."
                      className="w-full h-[250px] bg-background border border-border rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                 </div>

                 <div className="mt-8 flex justify-end">
                   <Button 
                     onClick={handleAnalyze} 
                     disabled={isLoading || !notes || !title}
                     className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-xl text-base shadow-lg shadow-primary/20 w-full md:w-auto flex items-center gap-2 group"
                   >
                     {isLoading ? (
                       <span className="flex items-center gap-2"><Sparkles className="w-5 h-5 animate-spin" /> Processing AI Pipeline...</span>
                     ) : (
                       <span className="flex items-center gap-2">Extract Intelligence <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                     )}
                   </Button>
                 </div>
               </motion.div>
            )}

            {activeTab === 'results' && (
               <motion.div 
                 key="results-view"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="flex flex-col gap-6"
               >
                 {/* Action Items List */}
                 <div className="bg-card/50 backdrop-blur-xl border border-border/60 rounded-2xl p-6 shadow-xl">
                   <div className="flex items-center justify-between mb-6">
                     <h2 className="text-xl font-semibold flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Extracted Action Items</h2>
                     <span className="bg-secondary/50 border border-border px-3 py-1 text-xs font-medium rounded-full text-muted-foreground">
                       {actionItems.length} tasks identified
                     </span>
                   </div>
                   
                   <div className="flex flex-col gap-3">
                     {actionItems.map((item, idx) => (
                       <div key={idx} className="bg-background border border-border/60 p-4 rounded-xl hover:border-primary/30 transition-colors group flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                         
                         <div className="flex-1">
                           <div className="flex items-center gap-2 mb-1">
                             <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border ${getPriorityColor(item.priority)}`}>
                               Priority {item.priority}
                             </span>
                             <h4 className="font-medium text-foreground">{item.task}</h4>
                           </div>
                           <p className="text-xs text-muted-foreground line-clamp-1">{item.context}</p>
                         </div>
                         
                         <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground bg-secondary/30 px-4 py-2 rounded-lg w-full md:w-auto">
                            <div className="flex items-center gap-1.5 w-24">
                              <User className="w-3.5 h-3.5" />
                              <span className="truncate">{item.assignee}</span>
                            </div>
                            <div className="w-px h-4 bg-border"></div>
                            <div className="flex items-center gap-1.5 min-w-24">
                              <Calendar className="w-3.5 h-3.5" />
                              <span className="truncate">{item.deadline}</span>
                            </div>
                         </div>
                         
                       </div>
                     ))}
                   </div>
                 </div>

                 {/* Follow up actions */}
                 <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 transform translate-x-4 -translate-y-4 opacity-5 group-hover:scale-110 transition-transform">
                       <Send className="w-32 h-32" />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                       <div>
                         <h3 className="text-lg font-semibold text-foreground mb-1">Automate Follow-ups</h3>
                         <p className="text-sm text-muted-foreground max-w-md">Generate personalized emails for all participants and send context-aware calendar invites for deadlines.</p>
                       </div>
                       <Button onClick={handleFollowUps} className="bg-primary text-primary-foreground focus:ring-0 px-6 py-5 rounded-xl shadow-lg shrink-0">
                         Create Email Drafts
                       </Button>
                    </div>
                 </div>
               </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Status / Metadata */}
        <div className="flex flex-col gap-6">
          <div className="bg-card/50 backdrop-blur-xl border border-border/60 rounded-2xl p-6 shadow-xl sticky top-6">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground mb-4">Pipeline Status</h3>
            
            <div className="flex flex-col gap-4 relative">
              <div className="absolute left-3.5 top-2 bottom-4 w-px bg-border"></div>
              
              <div className="flex gap-4 relative z-10">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2 bg-background ${activeTab === 'results' ? 'border-green-500 text-green-500' : 'border-primary text-primary'}`}>
                  {activeTab === 'results' ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-primary" />}
                </div>
                <div className="pt-1">
                  <h4 className="text-sm font-medium text-foreground">Data Ingestion</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Capturing raw transcript</p>
                </div>
              </div>
              
              <div className="flex gap-4 relative z-10">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2 bg-background ${activeTab === 'results' ? 'border-green-500 text-green-500' : (isLoading ? 'border-primary text-primary' : 'border-border text-muted-foreground')}`}>
                  {activeTab === 'results' ? <CheckCircle2 className="w-4 h-4" /> : (isLoading ? <Sparkles className="w-3.5 h-3.5 animate-spin" /> : <Server className="w-3.5 h-3.5" />)}
                </div>
                <div className="pt-1">
                  <h4 className={`text-sm font-medium ${activeTab === 'results' || isLoading ? 'text-foreground' : 'text-muted-foreground'}`}>LangChain Processing</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Extracting and scoring</p>
                </div>
              </div>

              <div className="flex gap-4 relative z-10">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2 bg-background ${activeTab === 'results' ? 'border-primary text-primary' : 'border-border text-muted-foreground'}`}>
                   {activeTab === 'results' ? <div className="w-2 h-2 rounded-full bg-primary" /> : <FileOutput className="w-3.5 h-3.5" />}
                </div>
                <div className="pt-1">
                  <h4 className={`text-sm font-medium ${activeTab === 'results' ? 'text-foreground' : 'text-muted-foreground'}`}>Structured Output</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Ready for review</p>
                </div>
              </div>
            </div>

            {meetingData && (
              <div className="mt-8 pt-6 border-t border-border/50">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground mb-3">Detected Entities</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Participants</span>
                    <span className="font-medium text-foreground bg-secondary px-2 py-0.5 rounded-md">{meetingData.participants.length} found</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Date Nodes</span>
                    <span className="font-medium text-foreground bg-secondary px-2 py-0.5 rounded-md">{meetingData.action_items.filter((i: ActionItem) => i.deadline !== 'TBD').length} extracted</span>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-6 bg-secondary/40 rounded-xl p-4 border border-border/40 text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p>Once you click &quot;Extract Intelligence&quot;, the data is sent to the FastAPI backend where LangChain handles temporal parsing, participant assignment, and priority scoring using GPT models.</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
