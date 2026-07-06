"use client"

import React, { useState } from 'react'
import { Plus, LayoutGrid, Mail, BarChart2, Database, FileText, PieChart, LayoutTemplate, MessageSquare, ChevronRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const CATEGORIES = ["All", "Email", "Data management", "Marketing", "Productivity assistant"]

const TEMPLATES = [
  {
    title: "Daily Spam Email Cleanup",
    desc: "Automatically scan all inbox, classify and clean up spam and low-value promotion...",
    icons: ["mail", "outlook"]
  },
  {
    title: "Daily Unread Email Digest",
    desc: "Every morning at 8 AM, automatically check the all inbox for unread emails from the past...",
    icons: ["outlook", "mail"]
  },
  {
    title: "YouTube Channel Analysis",
    desc: "Comprehensive YouTube channel analysis workflow that searches videos, researches...",
    icons: ["sparkles"]
  },
  {
    title: "X Trend Analyzer & Content Strategist",
    desc: "Search X/Twitter for posts related to a user-specified domain or topic, analyze current...",
    icons: ["twitter", "sparkles"]
  },
  {
    title: "X Daily Brand Information Monitoring",
    desc: "Monitor X (Twitter) daily for tweets mentioning Genspark and deliver a summary report",
    icons: ["twitter", "outlook"]
  },
  {
    title: "AI News Daily Aggregator",
    desc: "Automatically search, filter, and aggregate AI news daily, extract article data, generate...",
    icons: ["outlook", "sparkles"]
  },
  {
    title: "Daily Product Hunt AI Products Report",
    desc: "Every day at 10:00 PM Korea time, collect and report the top 10 AI products newly launche...",
    icons: ["sparkles"]
  },
  {
    title: "Weekly Competitor Intelligence Report",
    desc: "Generate a comprehensive weekly competitor analysis report for Notion AI, Jasper AI,...",
    icons: ["sparkles"]
  },
  {
    title: "Fintech Regulatory Daily Briefing",
    desc: "Daily monitoring of SEC, CFPB, FinCEN regulatory changes and fintech industry new...",
    icons: ["outlook", "sparkles"]
  },
  {
    title: "Stock Data Analysis Assistant",
    desc: "AI-powered stock analysis with fundamental analysis and investment insights.",
    icons: ["sparkles"]
  },
  {
    title: "Email Attachment Saver",
    desc: "Automatically download email attachments and save them to Google Drive when new...",
    icons: ["drive", "outlook"]
  },
  {
    title: "Email Receipt to Google Sheets",
    desc: "Automatically processes expense receipts from emails.",
    icons: ["sheets", "outlook"]
  },
  {
    title: "Customer Complaint Email Categorization",
    desc: "Automatically categorize customer complaint emails from inbox, summarize each categor...",
    icons: ["outlook", "sparkles"]
  },
  {
    title: "Weekly Project Report Generator",
    desc: "Automatically generates and sends a professional weekly project report by...",
    icons: ["sheets", "outlook"]
  },
  {
    title: "Unified Lead Capture",
    desc: "Automatically discover potential leads from X/Twitter, Google Search, and Outlook emai...",
    icons: ["hubspot", "outlook", "sparkles", "twitter"]
  },
  {
    title: "New User Onboarding Sequence",
    desc: "Trigger a multi-step personalized onboarding email sequence when a new user signs up...",
    icons: ["mail", "hubspot"]
  },
  {
    title: "Sales Call CRM Update",
    desc: "Transcribe sales calls, extract action items, and automatically update CRM records...",
    icons: ["sparkles", "hubspot"]
  },
  {
    title: "Social Media Cross-Posting",
    desc: "Automatically adapt and schedule new blog posts or updates to X/Twitter and other social...",
    icons: ["twitter", "sparkles"]
  },
  {
    title: "Automated Invoice Processing",
    desc: "Scan inbox for invoices, extract payment details using AI, and update financial tracking...",
    icons: ["mail", "drive", "sheets"]
  },
  {
    title: "Support Ticket Sentiment Analyzer",
    desc: "Categorize incoming support tickets by urgency and sentiment, prioritizing angry customers...",
    icons: ["outlook", "sparkles"]
  },
  {
    title: "Daily Calendar Sync & Briefing",
    desc: "Generate a morning briefing of all meetings, pulling background context on attendees...",
    icons: ["outlook", "sparkles"]
  },
  {
    title: "Blog Post to Newsletter Conversion",
    desc: "Automatically transform newly published blog posts into digestible newsletter formats...",
    icons: ["sparkles", "mail"]
  },
  {
    title: "Feedback Consolidation & Routing",
    desc: "Aggregate user feedback from multiple channels into a single standardized tracking sheet...",
    icons: ["hubspot", "sheets"]
  },
  {
    title: "Cloud Cost Anomaly Detection",
    desc: "Monitor platform infrastructure bills and instantly alert the team via email if costs spike...",
    icons: ["sparkles", "outlook"]
  }
]

export default function WorkflowsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-6 font-body text-foreground">
      
      {/* Header */}
      <div className="mb-12 text-center md:text-left flex flex-col items-center">
        <h1 className="text-4xl leading-tight font-display font-bold tracking-tight mb-3">
          Automate your work with Workflows
        </h1>
        <p className="text-muted-foreground text-sm font-medium">Create Workflow to manage tasks</p>
      </div>

      {/* My Workflows */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight">My Workflows</h2>
          <button className="text-sm font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="w-full rounded-2xl border border-border/80 bg-background/50 hover:bg-background/80 transition-colors py-16 flex flex-col items-center justify-center text-center shadow-sm cursor-pointer border-dashed">
          <LayoutGrid className="w-8 h-8 text-muted-foreground/60 mb-4" />
          <h3 className="font-bold text-foreground mb-1">No workflows yet</h3>
          <p className="text-sm text-muted-foreground">Create your first workflow to automate your tasks</p>
        </div>
      </div>

      {/* Start from Template */}
      <div>
        <h2 className="text-xl font-bold tracking-tight mb-4">Start from Template</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === category 
                  ? 'bg-primary/5 border-primary/20 text-foreground shadow-sm' 
                  : 'bg-transparent border-border/60 text-muted-foreground hover:text-foreground hover:bg-secondary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEMPLATES.map((tpl, i) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              key={i}
              className="bg-secondary/20 border border-border/60 hover:bg-secondary/40 hover:border-border transition-all p-5 rounded-2xl cursor-pointer flex flex-col h-[180px]"
            >
              <h3 className="font-bold text-foreground mb-2 line-clamp-2 pr-4">{tpl.title}</h3>
              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-4 flex-grow opacity-80">
                {tpl.desc}
              </p>
              
              <div className="flex items-center gap-2 mt-auto">
                {tpl.icons.map((icon, idx) => {
                  let iconElement = null
                  switch(icon) {
                    case "mail":
                      iconElement = <div className="w-5 h-5 bg-background rounded-md flex items-center justify-center border border-border/50"><Mail className="w-3 h-3 text-red-500" /></div>
                      break;
                    case "outlook":
                      iconElement = <div className="w-5 h-5 bg-background rounded-md flex items-center justify-center border border-border/50"><Mail className="w-3 h-3 text-blue-500" /></div>
                      break;
                    case "sparkles":
                      iconElement = <div className="w-5 h-5 bg-background rounded-md flex items-center justify-center border border-border/50"><Sparkles className="w-3 h-3 text-accent" /></div>
                      break;
                    case "twitter":
                      iconElement = <div className="w-5 h-5 bg-background rounded-md flex items-center justify-center border border-border/50"><span className="text-[10px] font-bold">𝕏</span></div>
                      break;
                    case "sheets":
                      iconElement = <div className="w-5 h-5 bg-background rounded-md flex items-center justify-center border border-border/50"><LayoutGrid className="w-3 h-3 text-green-500" /></div>
                      break;
                    case "drive":
                      iconElement = <div className="w-5 h-5 bg-background rounded-md flex items-center justify-center border border-border/50"><Database className="w-3 h-3 text-blue-400" /></div>
                      break;
                    case "hubspot":
                      iconElement = <div className="w-5 h-5 bg-background rounded-md flex items-center justify-center border border-border/50"><PieChart className="w-3 h-3 text-orange-500" /></div>
                      break;
                  }
                  
                  return <React.Fragment key={idx}>{iconElement}</React.Fragment>
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </div>
  )
}
