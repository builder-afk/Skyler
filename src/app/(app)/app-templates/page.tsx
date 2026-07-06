"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  AppWindow, Smartphone, Layout, Server, Paintbrush, Rocket, 
  Code, Copy, Check, ArrowRight, Sparkles, Lock,
  Layers, Database, Palette, TestTube, Zap, Globe,
  Monitor, Box, GitBranch, Shield, FileCode, Terminal, Heart, Bookmark
} from 'lucide-react'
import { toast } from 'sonner'

type PromptTemplate = {
  title: string
  description: string
  framework: string
  stage: string
  prompt: string
  tags: string[]
}

type StageSection = {
  stage: string
  icon: React.ReactNode
  color: string
  templates: PromptTemplate[]
}

const FRAMEWORKS = ["All", "React", "Next.js", "Flutter", "React Native", "Vue", "Svelte"]

const APP_TEMPLATES: StageSection[] = [
  {
    stage: "Wireframing & Planning",
    icon: <Layout className="w-5 h-5" />,
    color: "text-blue-500",
    templates: [
      {
        title: "App Information Architecture",
        description: "Generate a complete information architecture with user flows, screen hierarchy, and navigation patterns.",
        framework: "All",
        stage: "wireframe",
        prompt: "Design the information architecture for a [APP_TYPE] app. Include: 1) Complete screen inventory 2) Navigation hierarchy (tab bar, drawer, stack) 3) User flow diagrams for core tasks 4) Data relationships between screens 5) Entry/exit points. Output as a structured tree with annotations.",
        tags: ["IA", "navigation", "user-flow"]
      },
      {
        title: "Wireframe Component Spec",
        description: "Turn rough ideas into detailed wireframe specs with layout grids, spacing tokens, and component placement.",
        framework: "React",
        stage: "wireframe",
        prompt: "Create a wireframe specification for a [SCREEN_NAME] screen in React. Define: 1) 12-column grid layout with breakpoints (mobile/tablet/desktop) 2) Component placement with exact grid positions 3) Spacing using 4px base unit 4) Interactive states (empty, loading, error, populated) 5) Responsive behavior rules. Output as a structured spec I can hand to a developer.",
        tags: ["layout", "grid", "responsive"]
      },
      {
        title: "Mobile Screen Flow Blueprint",
        description: "Map complete mobile screen flows with gestures, transitions, and micro-interaction specs.",
        framework: "Flutter",
        stage: "wireframe",
        prompt: "Blueprint the screen flow for [FEATURE_NAME] in a Flutter app. Include: 1) Each screen with widget hierarchy 2) Navigation transitions (push, modal, bottom sheet) 3) Gesture interactions (swipe, long-press, pull-to-refresh) 4) State transitions between screens 5) Deep link entry points. Use Flutter widget names and Navigator 2.0 patterns.",
        tags: ["mobile", "gestures", "navigation"]
      },
      {
        title: "Cross-Platform Layout Strategy",
        description: "Plan responsive layouts that work seamlessly across web and mobile with shared design tokens.",
        framework: "React Native",
        stage: "wireframe",
        prompt: "Design a cross-platform layout strategy for [APP_NAME] using React Native. Cover: 1) Shared design tokens (spacing, typography, colors) 2) Platform-specific adaptations (iOS vs Android vs Web) 3) Responsive breakpoints using Dimensions API 4) SafeArea handling 5) Navigation patterns per platform. Include a token file structure.",
        tags: ["cross-platform", "tokens", "responsive"]
      },
    ]
  },
  {
    stage: "Backend Logic & API",
    icon: <Server className="w-5 h-5" />,
    color: "text-green-500",
    templates: [
      {
        title: "REST API Schema Generator",
        description: "Generate complete REST API schemas with endpoints, validation, auth middleware, and error handling.",
        framework: "Next.js",
        stage: "backend",
        prompt: "Design a REST API for [FEATURE] using Next.js App Router API routes. Include: 1) Route handlers (GET, POST, PUT, DELETE) with TypeScript types 2) Zod validation schemas for request/response 3) Auth middleware using NextAuth.js 4) Error handling with proper HTTP status codes 5) Rate limiting strategy. Output production-ready route.ts files.",
        tags: ["API", "REST", "validation"]
      },
      {
        title: "Database Schema & Migrations",
        description: "Design normalized database schemas with relations, indexes, and migration scripts.",
        framework: "All",
        stage: "backend",
        prompt: "Design a database schema for [APP_DOMAIN]. Include: 1) Tables with columns, types, and constraints 2) Relations (1:1, 1:N, M:N with junction tables) 3) Indexes for query performance 4) Migration scripts (up/down) 5) Seed data for development 6) Row-level security policies. Use PostgreSQL syntax with Prisma/Drizzle ORM models.",
        tags: ["database", "schema", "migrations"]
      },
      {
        title: "Real-time Backend Architecture",
        description: "Build real-time features with WebSocket events, presence channels, and optimistic updates.",
        framework: "React",
        stage: "backend",
        prompt: "Architect a real-time system for [FEATURE] in a React app. Cover: 1) WebSocket event schema with TypeScript types 2) Channel/room management 3) Presence tracking 4) Optimistic UI update patterns 5) Reconnection and offline queue strategy 6) Server-sent events fallback. Include both client hooks and server handler code.",
        tags: ["realtime", "websocket", "presence"]
      },
      {
        title: "State Management Architecture",
        description: "Design app-wide state management with server state, client state, and cache invalidation.",
        framework: "Flutter",
        stage: "backend",
        prompt: "Design the state management architecture for [APP_NAME] in Flutter. Include: 1) Provider/Riverpod architecture with dependency graph 2) Repository pattern for API calls 3) Local caching with Hive/Isar 4) Optimistic updates with rollback 5) Error state handling 6) State persistence across app restarts. Output complete provider definitions.",
        tags: ["state", "cache", "architecture"]
      },
    ]
  },
  {
    stage: "UI Polish & Components",
    icon: <Paintbrush className="w-5 h-5" />,
    color: "text-purple-500",
    templates: [
      {
        title: "Design System Foundation",
        description: "Generate a complete design system with tokens, component variants, and accessibility built in.",
        framework: "React",
        stage: "ui",
        prompt: "Build a design system foundation for [APP_NAME] in React. Include: 1) CSS custom properties for colors (light/dark), spacing, typography, radii, shadows 2) Button component with 4 variants, 3 sizes, loading/disabled states 3) Input component with validation states, icons, helper text 4) Card component with hover effects 5) All components with ARIA attributes and keyboard navigation. Use CSS Modules or styled-components.",
        tags: ["design-system", "tokens", "a11y"]
      },
      {
        title: "Animation & Micro-interaction Kit",
        description: "Create polished micro-interactions for page transitions, loading states, and user feedback.",
        framework: "React",
        stage: "ui",
        prompt: "Design a micro-interaction kit for [APP_NAME] using Framer Motion. Include: 1) Page transition variants (fade, slide, scale) 2) List stagger animations 3) Skeleton loading shimmer effect 4) Success/error feedback animations 5) Pull-to-refresh spring physics 6) Shared layout animations for modals. Output reusable motion component wrappers with spring configs.",
        tags: ["animation", "framer-motion", "transitions"]
      },
      {
        title: "Mobile UI Polish Pack",
        description: "Add native-feel polish to mobile apps with haptics, adaptive themes, and gesture feedback.",
        framework: "Flutter",
        stage: "ui",
        prompt: "Create a UI polish package for [APP_NAME] in Flutter. Include: 1) Custom theme with Material 3 color scheme generation from seed color 2) Haptic feedback wrapper for taps/long-press 3) Adaptive widgets (Cupertino on iOS, Material on Android) 4) Custom page transitions 5) Shimmer loading placeholders 6) Bottom sheet with drag handle and snap points. Output reusable widget classes.",
        tags: ["polish", "haptics", "adaptive"]
      },
      {
        title: "Dark Mode & Theme System",
        description: "Implement a bulletproof theme system with system preference detection and smooth transitions.",
        framework: "Next.js",
        stage: "ui",
        prompt: "Implement a complete theme system for [APP_NAME] in Next.js. Include: 1) CSS custom properties with light/dark/system modes 2) next-themes integration with no flash 3) Smooth color transitions on theme switch 4) Theme-aware image/illustration swapping 5) Persisted preference with cookie 6) Component-level theme overrides. Output the provider, hook, and toggle component.",
        tags: ["theming", "dark-mode", "a11y"]
      },
    ]
  },
  {
    stage: "Testing & QA",
    icon: <TestTube className="w-5 h-5" />,
    color: "text-amber-500",
    templates: [
      {
        title: "Component Test Suite Generator",
        description: "Generate comprehensive test suites for UI components with user-event testing and accessibility checks.",
        framework: "React",
        stage: "testing",
        prompt: "Write a complete test suite for a [COMPONENT_NAME] React component. Include: 1) Render tests for all visual states 2) User interaction tests with @testing-library/user-event 3) Accessibility audit with jest-axe 4) Snapshot tests for regression 5) Edge cases (empty data, long text, error states) 6) Mock setup for API dependencies. Use Vitest + React Testing Library.",
        tags: ["testing", "a11y", "vitest"]
      },
      {
        title: "E2E Test Flow Writer",
        description: "Create end-to-end test flows for critical user journeys with visual regression checks.",
        framework: "Next.js",
        stage: "testing",
        prompt: "Write E2E tests for the [USER_JOURNEY] flow in a Next.js app. Include: 1) Happy path with assertions at each step 2) Error path (network failure, validation errors) 3) Auth-gated page access 4) Visual regression snapshots 5) Mobile viewport variants 6) CI configuration for parallel runs. Use Playwright with Page Object Model.",
        tags: ["e2e", "playwright", "CI"]
      },
      {
        title: "Widget Test Blueprint",
        description: "Design widget tests for Flutter with golden tests and integration test flows.",
        framework: "Flutter",
        stage: "testing",
        prompt: "Create a test blueprint for the [WIDGET_NAME] Flutter widget. Include: 1) Widget tests with pumpWidget and finder assertions 2) Golden tests for visual regression 3) Integration test for the parent flow 4) Mock providers using Mockito/Mocktail 5) Accessibility semantics verification 6) Performance profiling markers. Output test files with proper group/setUp structure.",
        tags: ["widget-test", "golden", "integration"]
      },
    ]
  },
  {
    stage: "Deployment & DevOps",
    icon: <Rocket className="w-5 h-5" />,
    color: "text-red-500",
    templates: [
      {
        title: "CI/CD Pipeline Generator",
        description: "Generate production-grade CI/CD pipelines with build, test, preview, and deploy stages.",
        framework: "Next.js",
        stage: "deploy",
        prompt: "Create a CI/CD pipeline for a Next.js app deployed on Vercel. Include: 1) GitHub Actions workflow with lint, type-check, test, build 2) Preview deployments on PR 3) E2E tests against preview URL 4) Environment variable management 5) Slack notifications on failure 6) Cache optimization for node_modules and .next. Output the complete .github/workflows/ci.yml.",
        tags: ["CI/CD", "GitHub-Actions", "Vercel"]
      },
      {
        title: "App Store Submission Checklist",
        description: "Generate complete app store submission materials with metadata, screenshots specs, and review notes.",
        framework: "Flutter",
        stage: "deploy",
        prompt: "Prepare app store submission materials for [APP_NAME] built with Flutter. Include: 1) App Store Connect metadata (title, subtitle, keywords, description) 2) Google Play listing (short/full description, feature graphic specs) 3) Screenshot dimensions for all device sizes 4) Privacy policy requirements 5) App review notes for Apple 6) Fastlane configuration for automated submission. Output all copywriting and config files.",
        tags: ["app-store", "submission", "fastlane"]
      },
      {
        title: "Performance Optimization Audit",
        description: "Run a performance audit with bundle analysis, lazy loading strategy, and Core Web Vitals optimization.",
        framework: "React",
        stage: "deploy",
        prompt: "Conduct a performance optimization audit for [APP_NAME] in React. Cover: 1) Bundle analysis with code-splitting recommendations 2) Lazy loading strategy for routes and heavy components 3) Image optimization (next/image, srcSet, lazy loading) 4) Core Web Vitals optimization (LCP, FID, CLS) 5) Service worker for offline caching 6) CDN and edge caching headers. Output a prioritized action plan with expected impact.",
        tags: ["performance", "bundle", "CWV"]
      },
    ]
  },
  {
    stage: "Auth & Security",
    icon: <Shield className="w-5 h-5" />,
    color: "text-cyan-500",
    templates: [
      {
        title: "Full Auth Flow Implementation",
        description: "Build complete auth with social login, MFA, session management, and protected routes.",
        framework: "Next.js",
        stage: "auth",
        prompt: "Implement a complete auth system for [APP_NAME] in Next.js. Include: 1) NextAuth.js setup with Google, GitHub, email providers 2) JWT + database session strategy 3) Middleware for protected routes 4) Role-based access control (RBAC) 5) CSRF protection 6) Rate-limited login attempts. Output provider config, middleware, and auth utility functions.",
        tags: ["auth", "NextAuth", "RBAC"]
      },
      {
        title: "Mobile Auth with Biometrics",
        description: "Implement secure mobile auth with biometric login, secure storage, and token refresh.",
        framework: "Flutter",
        stage: "auth",
        prompt: "Build a secure auth system for [APP_NAME] in Flutter. Include: 1) Login/signup with email + OAuth (Google, Apple) 2) Biometric authentication (Face ID, fingerprint) 3) Secure token storage with flutter_secure_storage 4) Silent token refresh with interceptors 5) Session timeout handling 6) Certificate pinning for API calls. Output complete auth service and provider code.",
        tags: ["biometric", "secure-storage", "OAuth"]
      },
    ]
  }
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button onClick={handleCopy} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all">
      {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? "Copied!" : "Copy Prompt"}
    </button>
  )
}

function PromptCard({ template, onPreview, liked, onLike, saved, onSave }: { template: PromptTemplate, onPreview: () => void, liked: boolean, onLike: (e: React.MouseEvent) => void, saved: boolean, onSave: (e: React.MouseEvent) => void }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } } }}
      className="group/card flex flex-col bg-background border border-border/60 hover:border-primary/40 rounded-2xl p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
      
      <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover/card:opacity-100 transition-opacity z-10">
        <button
          onClick={onLike}
          className="p-1.5 rounded-full bg-secondary/80 hover:bg-secondary text-muted-foreground transition-colors shadow-sm"
        >
          <Heart className={`w-3.5 h-3.5 ${liked ? 'text-red-500 fill-red-500' : ''}`} />
        </button>
        <button
          onClick={onSave}
          className="p-1.5 rounded-full bg-secondary/80 hover:bg-secondary text-muted-foreground transition-colors shadow-sm"
        >
          <Bookmark className={`w-3.5 h-3.5 ${saved ? 'text-blue-500 fill-blue-500' : ''}`} />
        </button>
      </div>

      <div className="flex items-start justify-between mb-3 pr-8">
        <h3 className="font-semibold text-[15px] leading-snug text-foreground pr-2">{template.title}</h3>
        <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
          {template.framework}
        </span>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">{template.description}</p>
      
      <div className="flex flex-wrap gap-1.5 mb-4">
        {template.tags.map(tag => (
          <span key={tag} className="text-[11px] px-2 py-0.5 rounded-full bg-secondary/60 text-muted-foreground font-medium">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-2 mt-auto pt-2 border-t border-border/30">
        <CopyButton text={template.prompt} />
        <button 
          onClick={onPreview}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/10 hover:bg-primary/20 text-primary transition-all"
        >
          <Code className="w-3.5 h-3.5" />
          Preview
        </button>
      </div>
    </motion.div>
  )
}

function PreviewModal({ template, onClose }: { template: PromptTemplate | null, onClose: () => void }) {
  if (!template) return null
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-2xl bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{template.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
            </div>
            <span className="shrink-0 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {template.framework}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Prompt Template</span>
            <CopyButton text={template.prompt} />
          </div>
          <div className="bg-secondary/30 border border-border/50 rounded-xl p-4 font-mono text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap max-h-[400px] overflow-y-auto">
            {template.prompt}
          </div>
        </div>

        <div className="p-6 pt-0">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <p className="text-sm text-foreground/80">
              Replace the <code className="px-1.5 py-0.5 rounded bg-secondary text-primary font-mono text-xs">[PLACEHOLDER]</code> values with your specific project details for best results.
            </p>
          </div>
        </div>
        
        <div className="px-6 pb-6 flex gap-3">
          <button onClick={onClose} className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium bg-secondary/50 hover:bg-secondary text-foreground transition-colors">
            Close
          </button>
          <button 
            onClick={() => { navigator.clipboard.writeText(template.prompt); }}
            className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Terminal className="w-4 h-4" />
            Copy & Use
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function AppTemplatesPage() {
  const [activeFramework, setActiveFramework] = useState("All")
  const [previewTemplate, setPreviewTemplate] = useState<PromptTemplate | null>(null)

  const [likedTemplates, setLikedTemplates] = useState<string[]>([])
  const [savedTemplates, setSavedTemplates] = useState<string[]>([])

  const toggleLike = (e: React.MouseEvent, title: string) => {
    e.stopPropagation()
    setLikedTemplates(prev => prev.includes(title) ? prev.filter(x => x !== title) : [...prev, title])
  }

  const toggleSave = (e: React.MouseEvent, title: string) => {
    e.stopPropagation()
    setSavedTemplates(prev => {
      const isSaved = prev.includes(title)
      toast.success(isSaved ? "Removed from saved" : "Saved to your library")
      return isSaved ? prev.filter(x => x !== title) : [...prev, title]
    })
  }

  const filteredSections = APP_TEMPLATES.map(section => ({
    ...section,
    templates: section.templates.filter(t => 
      activeFramework === "All" || t.framework === activeFramework || t.framework === "All"
    )
  })).filter(section => section.templates.length > 0)

  return (
    <div className="w-full max-w-[1200px] mx-auto py-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-display font-semibold tracking-tight mb-2 flex items-center gap-3">
            <AppWindow className="w-8 h-8 text-primary" />
            App-Centric Templates
          </h1>
          <p className="text-muted-foreground text-sm font-medium max-w-xl">
            Pre-built prompt libraries for every stage of app development — wireframing, backend logic, UI polish, testing & deployment. With interactive previews and one-click exports.
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">{APP_TEMPLATES.reduce((acc, s) => acc + s.templates.length, 0)} Prompts Available</span>
        </div>
      </div>

      {/* Framework Filter */}
      <div className="flex overflow-x-auto pb-4 mb-6 gap-2 no-scrollbar scroll-smooth">
        {FRAMEWORKS.map(fw => (
          <button
            key={fw}
            onClick={() => setActiveFramework(fw)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeFramework === fw
                ? 'bg-primary/10 border-primary/30 text-primary shadow-sm'
                : 'bg-transparent border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50'
            }`}
          >
            {fw}
          </button>
        ))}
      </div>

      {/* Stage Sections */}
      <div className="space-y-12 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFramework}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-12"
          >
            {filteredSections.map(section => (
              <motion.div
                key={section.stage}
                initial="hidden"
                animate="show"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 bg-secondary/40 rounded-lg border border-border/30 ${section.color}`}>
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-foreground tracking-tight">{section.stage}</h2>
                  <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">{section.templates.length} templates</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.templates.map((template, idx) => (
                    <PromptCard 
                      key={idx} 
                      template={template} 
                      onPreview={() => setPreviewTemplate(template)} 
                      liked={likedTemplates.includes(template.title)}
                      onLike={(e) => toggleLike(e, template.title)}
                      saved={savedTemplates.includes(template.title)}
                      onSave={(e) => toggleSave(e, template.title)}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewTemplate && (
          <PreviewModal template={previewTemplate} onClose={() => setPreviewTemplate(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
