"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Layers, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getSession } from 'next-auth/react'
import type { Session } from 'next-auth'

interface PublicNavbarProps {
  className?: string
}

export function PublicNavbar({ className }: PublicNavbarProps) {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    getSession().then((s) => setSession(s))
  }, [])
  
  return (
    <header className={cn("relative z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 font-body", className)}>
      <Link href="/" className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2">
        <Layers className="h-5 w-5 text-accent" /> Skyler
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <Link href="/#services" className="hover:text-foreground transition-colors">Our Services</Link>
        <Link href="/n8n-templates" className="hover:text-foreground transition-colors">Templates</Link>
        <Link href="/marketplace" className="hover:text-foreground transition-colors">Marketplace</Link>
        <Link href="/documentation" className="hover:text-foreground transition-colors">Documentation</Link>
        <Link href="/contact" className="hover:text-foreground transition-colors">Contact Us</Link>
      </nav>
      <div className="flex items-center gap-4">
        {!session ? (
          <>
            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block">
              Sign In
            </Link>
            <Link href="/signup" className="bg-primary text-primary-foreground rounded-full px-5 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
              Start Building
            </Link>
          </>
        ) : (
          <Link href="/dashboard" className="flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full px-5 py-2 text-sm font-medium hover:bg-secondary/80 transition-colors border border-border">
            <User className="w-4 h-4" />
            Dashboard
          </Link>
        )}
      </div>
    </header>
  )
}
