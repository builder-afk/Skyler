"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, LayoutTemplate, Layers, ChevronLeft, ChevronRight, Workflow, Zap, Database, Globe, MessageSquare, Mail } from 'lucide-react'
import { PublicNavbar } from '@/components/public-navbar'

const N8N_TEMPLATES = [
  {
    title: "Sync Salesforce leads to Google Sheets",
    desc: "Automatically push new Salesforce leads into a Google Sheet for easy tracking and sharing.",
    icon: <Database className="w-5 h-5 text-blue-500" />
  },
  {
    title: "Send Slack notification on new Stripe payment",
    desc: "Keep your team informed by sending a Slack message whenever a successful payment occurs.",
    icon: <MessageSquare className="w-5 h-5 text-purple-500" />
  },
  {
    title: "Scrape websites and summarize with OpenAI",
    desc: "Extract text from target URLs, process them through OpenAI, and save the summary to Notion.",
    icon: <Globe className="w-5 h-5 text-green-500" />
  },
  {
    title: "Automate daily reporting to email",
    desc: "Fetch metrics from your database and email a daily performance report to stakeholders.",
    icon: <Mail className="w-5 h-5 text-orange-500" />
  },
  {
    title: "Lead scoring with Clearbit and Pipedrive",
    desc: "Enrich new Pipedrive leads with Clearbit data, score them, and alert sales if high-value.",
    icon: <Zap className="w-5 h-5 text-yellow-500" />
  },
  {
    title: "RSS feed to Twitter/X auto-poster",
    desc: "Automatically format and post new blog articles or news from an RSS feed to Twitter/X.",
    icon: <Globe className="w-5 h-5 text-blue-400" />
  },
  {
    title: "Shopify order to Airtable record",
    desc: "Create a new record in Airtable for every new order placed in your Shopify store.",
    icon: <Database className="w-5 h-5 text-indigo-500" />
  },
  {
    title: "Github issue creation from Typeform",
    desc: "Turn bug reports submitted via Typeform directly into organized GitHub issues.",
    icon: <Workflow className="w-5 h-5 text-gray-500" />
  },
  {
    title: "Monitor server downtime and SMS via Twilio",
    desc: "Ping your servers every minute and trigger a Twilio SMS if one goes offline.",
    icon: <Zap className="w-5 h-5 text-red-500" />
  },
  {
    title: "Automatically reply to Zendesk tickets with AI",
    desc: "Draft intelligent responses to common support requests in Zendesk using an LLM.",
    icon: <MessageSquare className="w-5 h-5 text-cyan-500" />
  },
  {
    title: "Trello card to Google Calendar event",
    desc: "When a Trello card is moved to 'Scheduled', instantly create a Google Calendar event.",
    icon: <LayoutTemplate className="w-5 h-5 text-blue-500" />
  },
  {
    title: "Transcribe audio files in Dropbox via Whisper",
    desc: "Watch a Dropbox folder for new audio, transcribe it using OpenAI Whisper, and save the text.",
    icon: <Database className="w-5 h-5 text-purple-400" />
  },
  {
    title: "Sync Notion database to Google Sheets",
    desc: "Keep a two-way or one-way sync between your Notion planning database and Google Sheets.",
    icon: <Database className="w-5 h-5 text-green-400" />
  },
  {
    title: "Auto-assign Jira tickets based on email content",
    desc: "Parse incoming support emails, classify the issue, and create assigned Jira tickets.",
    icon: <Mail className="w-5 h-5 text-orange-400" />
  },
  {
    title: "Send welcome email sequence in Mailchimp",
    desc: "Add new users from your app database to a Mailchimp drip campaign for onboarding.",
    icon: <Mail className="w-5 h-5 text-yellow-400" />
  },
  {
    title: "Extract invoice data with Google Cloud Vision",
    desc: "Process incoming invoice PDFs, extract totals and line items, and store them in Postgres.",
    icon: <Globe className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Telegram bot for IT helpdesk",
    desc: "Allow employees to submit helpdesk tickets via Telegram and route them to your ticketing system.",
    icon: <MessageSquare className="w-5 h-5 text-indigo-400" />
  },
  {
    title: "Generate weekly newsletter from saved Pocket articles",
    desc: "Collate articles saved in Pocket over the week to draft a curated newsletter.",
    icon: <LayoutTemplate className="w-5 h-5 text-pink-500" />
  },
  {
    title: "Discord alerts for crypto price changes",
    desc: "Fetch prices from CoinGecko and send a Discord webhook if an asset changes by 5%.",
    icon: <MessageSquare className="w-5 h-5 text-indigo-600" />
  },
  {
    title: "Welcome new Discord members with a DM",
    desc: "Automatically send a personalized direct message when a new user joins your Discord server.",
    icon: <MessageSquare className="w-5 h-5 text-violet-500" />
  },
  {
    title: "Forward Gmail attachments to Google Drive",
    desc: "Automatically save all email attachments meeting specific criteria directly to a Google Drive folder.",
    icon: <Database className="w-5 h-5 text-blue-500" />
  }
]

export default function N8nTemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  const filteredTemplates = N8N_TEMPLATES.filter(template => 
    template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    template.desc.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col bg-background font-body text-foreground">
      {/* Navbar */}
      <PublicNavbar />

      <main className="flex-1 w-full max-w-[1200px] mx-auto py-12 px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-display font-semibold tracking-tight mb-3 flex items-center gap-3">
              <Workflow className="w-8 h-8 text-primary" />
              n8n Automation Templates
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
              Supercharge your workflows with our curated collection of n8n automation templates. 
              Connect your favorite apps and put your business on autopilot.
            </p>
          </div>
          <div className="relative w-full md:w-[320px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search templates..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-secondary/30 border border-border/50 text-foreground placeholder-muted-foreground rounded-full pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12 pb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key="templates-grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {filteredTemplates.length > 0 ? (
                <motion.div 
                  initial="hidden"
                  animate="show"
                  variants={containerVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                >
                  {filteredTemplates.map((template, itemIdx) => (
                    <motion.div 
                      key={itemIdx}
                      variants={itemVariants}
                      className="group/card flex flex-col h-full bg-background border border-border/60 hover:border-primary/40 rounded-2xl p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer text-left relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                      <div className="mb-4 inline-flex p-2 rounded-lg bg-secondary/50 border border-border/50">
                        {template.icon}
                      </div>
                      <h3 className="font-semibold text-[15px] leading-snug text-foreground mb-3 pr-4">
                        {template.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                        {template.desc}
                      </p>
                      <div className="flex w-full justify-between items-center mt-auto">
                        <span className="text-xs font-medium text-primary opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300">
                          Use Template
                        </span>
                        <div className="w-8 h-8 rounded-full bg-secondary/50 group-hover/card:bg-primary text-muted-foreground group-hover/card:text-primary-foreground flex items-center justify-center transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-muted-foreground border border-dashed border-border/50 rounded-2xl">
                  <Workflow className="w-8 h-8 mb-4 opacity-50" />
                  <p className="font-medium text-foreground text-lg">No templates found</p>
                  <p className="text-sm opacity-70 mt-1">Try adjusting your search query.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
