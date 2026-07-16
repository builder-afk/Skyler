"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PublicNavbar } from '@/components/public-navbar'
import { Layers, Mail, MapPin, Phone, Send, CheckCircle2, Store, AppWindow, Share2, ImagePlus, ImageIcon, MonitorPlay, Video, Workflow, Lightbulb, Users } from 'lucide-react'

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    mobileNumber: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", company: "", mobileNumber: "", message: "" });
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-body selection:bg-primary/30">
      {/* Navbar */}
      <PublicNavbar className="border-b border-border/50 bg-background/80 backdrop-blur-md" />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-20 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Column - Copy & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-primary mb-6">
              <span className="text-sm font-medium tracking-wide uppercase">Get in touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] mb-6">
              Let&apos;s build your <span className="text-accent italic">AI Operating System</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Ready to automate your workflows and deploy custom AI agents? Our team of engineers is here to help you scale infinitely.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0 border border-border/50">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground mb-1">Email us</span>
                <a href="mailto:hello@skyler.ai" className="text-muted-foreground hover:text-primary transition-colors">kv853772@gmail.com</a>
                <span className="text-xs text-muted-foreground/60 mt-1">We typically reply within 2 hours.</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0 border border-border/50">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground mb-1">Call us</span>
                <a href="tel:+18005550199" className="text-muted-foreground hover:text-primary transition-colors">+91 7376284881</a>
                <span className="text-xs text-muted-foreground/60 mt-1">Mon-Fri from 9am to 6pm PST.</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0 border border-border/50">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground mb-1">Visit our office</span>
                <span className="text-muted-foreground">100 AI Innovation Drive<br/>Ghaziabad, Uttar Pradesh 201013</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-background rounded-3xl p-8 md:p-10 border border-border shadow-2xl shadow-primary/5 relative overflow-hidden"
        >
          {/* Subtle gradient background for the form */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3" />
          
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-16 h-full"
            >
              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Message sent!</h3>
              <p className="text-muted-foreground max-w-[280px]">
                Thank you for reaching out. One of our AI specialists will get back to you shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-sm font-semibold text-primary hover:underline underline-offset-4"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <input 
                    id="name"
                    required
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Work Email</label>
                  <input 
                    id="email"
                    required
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                  <input 
                    id="company"
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="mobileNumber" className="text-sm font-medium">Mobile Number</label>
                  <input 
                    id="mobileNumber"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})}
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">How can we help?</label>
                <textarea 
                  id="message"
                  required
                  placeholder="Tell us about the workflows you want to automate..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-foreground text-background font-semibold rounded-xl px-4 py-3.5 flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          )}
        </motion.div>
      </main>

      {/* Other Services Section */}
      <section className="w-full bg-secondary/30 py-16 md:py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">Explore Our Ecosystem</h2>
            <p className="text-muted-foreground max-w-2xl">
              Beyond enterprise AI Operating Systems, we offer a suite of tools and templates to accelerate your workflows today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Link href="/marketplace" className="group bg-background rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Marketplace</h3>
              <p className="text-sm text-muted-foreground">
                Discover pre-built AI agents, prompts, and workflows created by the community.
              </p>
            </Link>

            <Link href="/n8n-templates" className="group bg-background rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <AppWindow className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">App Templates</h3>
              <p className="text-sm text-muted-foreground">
                Deploy full-stack AI applications instantly with our ready-to-use boilerplate templates.
              </p>
            </Link>

            <Link href="#" className="group bg-background rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-indigo-500/10 text-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">LinkedIn Post Generator</h3>
              <p className="text-sm text-muted-foreground">
                Generate highly engaging, viral B2B content optimized for the LinkedIn algorithm.
              </p>
            </Link>

            <Link href="#" className="group bg-background rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-pink-500/10 text-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ImagePlus className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Instagram Pipeline</h3>
              <p className="text-sm text-muted-foreground">
                Automate your visual content creation and scheduling pipeline for Instagram growth.
              </p>
            </Link>
            <Link href="#" className="group bg-background rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ImageIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Image Prompts</h3>
              <p className="text-sm text-muted-foreground">
                Generate stunning visuals with curated, high-quality prompts for Midjourney and DALL-E.
              </p>
            </Link>

            <Link href="#" className="group bg-background rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MonitorPlay className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Multimedia Suite</h3>
              <p className="text-sm text-muted-foreground">
                A complete suite of tools for processing and generating multi-modal content seamlessly.
              </p>
            </Link>

            <Link href="#" className="group bg-background rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Video Prompts</h3>
              <p className="text-sm text-muted-foreground">
                Advanced prompt engineering templates specifically tailored for AI video generation models.
              </p>
            </Link>

            <Link href="#" className="group bg-background rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Workflows</h3>
              <p className="text-sm text-muted-foreground">
                Automate your business processes with ready-to-use n8n and Zapier integration templates.
              </p>
            </Link>

            <Link href="#" className="group bg-background rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Startup Ideas</h3>
              <p className="text-sm text-muted-foreground">
                AI-curated, validated SaaS startup ideas with market analysis and execution plans.
              </p>
            </Link>

            <Link href="#" className="group bg-background rounded-2xl p-6 border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-violet-500/10 text-violet-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Team Workspace</h3>
              <p className="text-sm text-muted-foreground">
                Collaborate with your team, share prompts, and manage AI resources in one unified hub.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-background border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <Layers className="h-5 w-5 text-accent" /> Skyler
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-foreground transition-colors">LinkedIn</Link>
          </div>

          <div className="text-sm text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Skyler AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
