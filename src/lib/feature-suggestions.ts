export type SuggestionCategory = 
  | 'auth' 
  | 'payments' 
  | 'analytics' 
  | 'ai' 
  | 'realtime' 
  | 'social' 
  | 'notifications' 
  | 'performance' 
  | 'security' 
  | 'ux' 
  | 'seo' 
  | 'accessibility' 
  | 'integration' 
  | 'monetization'

export interface FeatureSuggestion {
  id: string
  title: string
  description: string
  category: SuggestionCategory
  difficulty: 'easy' | 'medium' | 'hard'
  impact: 'low' | 'medium' | 'high'
  icon: string // emoji
  keywords: string[]
  stackRelevance: string[] // which stacks this is most relevant for
  stepRelevance: number[] // which wizard steps this is most relevant for
}

const ALL_SUGGESTIONS: FeatureSuggestion[] = [
  // Auth & User Management
  {
    id: 'social-login',
    title: 'Social Login (Google, GitHub)',
    description: 'Let users sign in with their existing Google or GitHub accounts for frictionless onboarding.',
    category: 'auth',
    difficulty: 'easy',
    impact: 'high',
    icon: '🔑',
    keywords: ['login', 'auth', 'sign', 'user', 'account'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs', 'mobile-reactnative'],
    stepRelevance: [1, 5]
  },
  {
    id: 'magic-link',
    title: 'Passwordless Magic Link Login',
    description: 'Skip passwords entirely — send users a secure login link via email for a smoother experience.',
    category: 'auth',
    difficulty: 'easy',
    impact: 'medium',
    icon: '✨',
    keywords: ['login', 'auth', 'password', 'email', 'magic'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [1, 5]
  },
  {
    id: 'rbac',
    title: 'Role-Based Access Control',
    description: 'Add Admin, Editor, and Viewer roles so teams can collaborate with proper permission boundaries.',
    category: 'auth',
    difficulty: 'medium',
    impact: 'high',
    icon: '🛡️',
    keywords: ['role', 'admin', 'team', 'permission', 'access', 'collaborate'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [1, 4, 5]
  },
  {
    id: 'user-profiles',
    title: 'User Profile & Avatar',
    description: 'Let users personalize their account with avatars, bios, and profile settings.',
    category: 'auth',
    difficulty: 'easy',
    impact: 'medium',
    icon: '👤',
    keywords: ['profile', 'avatar', 'user', 'account', 'bio', 'settings'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs', 'mobile-reactnative'],
    stepRelevance: [1, 3]
  },

  // Payments & Monetization
  {
    id: 'stripe-billing',
    title: 'Stripe Subscription Billing',
    description: 'Monetize with monthly/yearly subscription tiers using Stripe Checkout and webhooks.',
    category: 'payments',
    difficulty: 'medium',
    impact: 'high',
    icon: '💳',
    keywords: ['pay', 'billing', 'subscribe', 'monetize', 'stripe', 'plan', 'pricing', 'saas'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [1, 4, 5]
  },
  {
    id: 'usage-based-billing',
    title: 'Usage-Based Billing',
    description: 'Charge users per API call, generation, or token — perfect for AI tools and metered services.',
    category: 'monetization',
    difficulty: 'hard',
    impact: 'high',
    icon: '📊',
    keywords: ['usage', 'metered', 'api', 'credit', 'token', 'ai', 'generation', 'pay-per-use'],
    stackRelevance: ['ai-tool-nextjs', 'saas-nextjs'],
    stepRelevance: [1, 4]
  },
  {
    id: 'freemium-model',
    title: 'Freemium Tier with Limits',
    description: 'Offer a free plan with usage caps to drive adoption, then upsell premium features.',
    category: 'monetization',
    difficulty: 'medium',
    impact: 'high',
    icon: '🎁',
    keywords: ['free', 'trial', 'limit', 'cap', 'upgrade', 'tier', 'plan'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [1, 4]
  },

  // AI Features
  {
    id: 'ai-chatbot',
    title: 'AI Chat Assistant',
    description: 'Add a built-in AI chatbot that helps users navigate your app or answer product questions.',
    category: 'ai',
    difficulty: 'medium',
    impact: 'high',
    icon: '🤖',
    keywords: ['chat', 'bot', 'ai', 'assistant', 'help', 'support', 'gpt', 'llm'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [1, 3, 5]
  },
  {
    id: 'ai-content-gen',
    title: 'AI Content Generation',
    description: 'Let users generate text, summaries, or descriptions using OpenAI/Claude inside your app.',
    category: 'ai',
    difficulty: 'medium',
    impact: 'high',
    icon: '📝',
    keywords: ['generate', 'content', 'write', 'text', 'ai', 'summary', 'blog', 'description'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [1, 3, 5]
  },
  {
    id: 'smart-search',
    title: 'AI-Powered Smart Search',
    description: 'Use vector embeddings for semantic search so users find exactly what they need, even with fuzzy queries.',
    category: 'ai',
    difficulty: 'hard',
    impact: 'high',
    icon: '🔍',
    keywords: ['search', 'find', 'query', 'semantic', 'vector', 'embeddings'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [1, 4]
  },

  // Real-time Features
  {
    id: 'realtime-collab',
    title: 'Real-Time Collaboration',
    description: 'Enable multiple users to edit and see changes simultaneously, like Google Docs.',
    category: 'realtime',
    difficulty: 'hard',
    impact: 'high',
    icon: '👥',
    keywords: ['realtime', 'collaborate', 'live', 'team', 'edit', 'together', 'multiplayer'],
    stackRelevance: ['saas-nextjs'],
    stepRelevance: [1, 4]
  },
  {
    id: 'live-cursors',
    title: 'Live Presence & Cursors',
    description: 'Show who else is viewing a page with live cursor indicators — creates an engaging collaborative feel.',
    category: 'realtime',
    difficulty: 'medium',
    impact: 'medium',
    icon: '🖱️',
    keywords: ['cursor', 'presence', 'online', 'live', 'who', 'viewing'],
    stackRelevance: ['saas-nextjs'],
    stepRelevance: [1, 3]
  },
  {
    id: 'live-notifications',
    title: 'Live Push Notifications',
    description: 'Send real-time in-app and push notifications to keep users engaged and informed.',
    category: 'notifications',
    difficulty: 'medium',
    impact: 'high',
    icon: '🔔',
    keywords: ['notify', 'push', 'alert', 'bell', 'message', 'update'],
    stackRelevance: ['saas-nextjs', 'mobile-reactnative', 'ai-tool-nextjs'],
    stepRelevance: [1, 3, 5]
  },

  // Analytics & Insights
  {
    id: 'dashboard-analytics',
    title: 'Analytics Dashboard',
    description: 'Give users beautiful charts and KPI cards to visualize their data, usage, or business metrics.',
    category: 'analytics',
    difficulty: 'medium',
    impact: 'high',
    icon: '📈',
    keywords: ['dashboard', 'analytics', 'chart', 'graph', 'metric', 'kpi', 'report', 'stats'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [1, 3]
  },
  {
    id: 'activity-feed',
    title: 'Activity Feed & Audit Log',
    description: 'Track every action with a chronological feed — great for accountability and debugging.',
    category: 'analytics',
    difficulty: 'easy',
    impact: 'medium',
    icon: '📋',
    keywords: ['activity', 'feed', 'log', 'history', 'audit', 'track', 'timeline'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [1, 4]
  },

  // UX Enhancements
  {
    id: 'dark-mode',
    title: 'Dark/Light Mode Toggle',
    description: 'Add a polished dark mode with smooth transitions — a must-have for modern apps.',
    category: 'ux',
    difficulty: 'easy',
    impact: 'high',
    icon: '🌙',
    keywords: ['dark', 'light', 'theme', 'toggle', 'mode', 'night'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs', 'landing-page', 'mobile-reactnative'],
    stepRelevance: [1, 2, 3]
  },
  {
    id: 'onboarding-flow',
    title: 'Interactive Onboarding Tour',
    description: 'Guide new users through key features with a step-by-step walkthrough and tooltips.',
    category: 'ux',
    difficulty: 'medium',
    impact: 'high',
    icon: '🎯',
    keywords: ['onboarding', 'tour', 'guide', 'walkthrough', 'welcome', 'new user', 'tutorial'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs', 'mobile-reactnative'],
    stepRelevance: [1, 3]
  },
  {
    id: 'command-palette',
    title: 'Command Palette (⌘K)',
    description: 'Add a spotlight-style command bar for power users to navigate, search, and take actions instantly.',
    category: 'ux',
    difficulty: 'medium',
    impact: 'high',
    icon: '⌨️',
    keywords: ['command', 'palette', 'spotlight', 'search', 'keyboard', 'shortcut', 'power user'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [1, 3]
  },
  {
    id: 'responsive-design',
    title: 'Mobile-First Responsive Design',
    description: 'Ensure your web app looks stunning on every screen size with a proper responsive layout system.',
    category: 'ux',
    difficulty: 'easy',
    impact: 'high',
    icon: '📱',
    keywords: ['mobile', 'responsive', 'tablet', 'screen', 'breakpoint'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs', 'landing-page'],
    stepRelevance: [1, 2, 3]
  },
  {
    id: 'skeleton-loading',
    title: 'Skeleton Loading States',
    description: 'Replace boring spinners with sleek skeleton shimmer animations for perceived speed.',
    category: 'ux',
    difficulty: 'easy',
    impact: 'medium',
    icon: '💀',
    keywords: ['loading', 'skeleton', 'shimmer', 'placeholder', 'spinner'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs', 'mobile-reactnative'],
    stepRelevance: [2, 3]
  },

  // SEO & Performance
  {
    id: 'seo-optimized',
    title: 'SEO Metadata & Open Graph',
    description: 'Add dynamic meta tags, Open Graph images, and structured data for better discoverability.',
    category: 'seo',
    difficulty: 'easy',
    impact: 'high',
    icon: '🌐',
    keywords: ['seo', 'meta', 'og', 'share', 'social', 'google', 'rank'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs', 'landing-page'],
    stepRelevance: [1, 6]
  },
  {
    id: 'blog-cms',
    title: 'Blog / CMS System',
    description: 'Drive organic traffic with a built-in blog using MDX or a headless CMS like Sanity.',
    category: 'seo',
    difficulty: 'medium',
    impact: 'high',
    icon: '✍️',
    keywords: ['blog', 'cms', 'content', 'article', 'post', 'writing', 'seo'],
    stackRelevance: ['saas-nextjs', 'landing-page'],
    stepRelevance: [1, 3]
  },

  // Security
  {
    id: 'rate-limiting',
    title: 'API Rate Limiting',
    description: 'Protect your API endpoints from abuse with intelligent rate limiting and throttling.',
    category: 'security',
    difficulty: 'easy',
    impact: 'high',
    icon: '🚦',
    keywords: ['rate', 'limit', 'throttle', 'api', 'abuse', 'ddos', 'protect'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [4, 5]
  },
  {
    id: 'two-factor-auth',
    title: 'Two-Factor Authentication',
    description: 'Add TOTP or SMS-based 2FA for enhanced account security — increasingly expected by enterprise users.',
    category: 'security',
    difficulty: 'hard',
    impact: 'medium',
    icon: '🔐',
    keywords: ['2fa', 'two-factor', 'otp', 'security', 'totp', 'enterprise'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [1, 5]
  },

  // Integrations
  {
    id: 'email-system',
    title: 'Transactional Email System',
    description: 'Send beautiful transactional emails for welcome flows, receipts, and notifications using Resend or SendGrid.',
    category: 'integration',
    difficulty: 'easy',
    impact: 'high',
    icon: '📧',
    keywords: ['email', 'mail', 'send', 'welcome', 'receipt', 'transactional'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [1, 5]
  },
  {
    id: 'file-uploads',
    title: 'File Upload & Cloud Storage',
    description: 'Let users upload files, images, or documents with drag-and-drop, stored in S3 or Supabase Storage.',
    category: 'integration',
    difficulty: 'medium',
    impact: 'high',
    icon: '📁',
    keywords: ['upload', 'file', 'image', 'storage', 'drag', 'drop', 's3', 'cloud'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs', 'mobile-reactnative'],
    stepRelevance: [1, 3, 4]
  },
  {
    id: 'webhooks',
    title: 'Webhook System',
    description: 'Let external services send events to your app — essential for payment confirmations and CI/CD.',
    category: 'integration',
    difficulty: 'medium',
    impact: 'medium',
    icon: '🪝',
    keywords: ['webhook', 'event', 'trigger', 'integration', 'api', 'callback'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [4, 5]
  },
  {
    id: 'export-import',
    title: 'Data Export (CSV/PDF)',
    description: 'Let users export their data as CSV or PDF reports — a high-value feature for B2B apps.',
    category: 'integration',
    difficulty: 'easy',
    impact: 'medium',
    icon: '📤',
    keywords: ['export', 'csv', 'pdf', 'download', 'report', 'data'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [1, 3]
  },

  // Social Features
  {
    id: 'comments-system',
    title: 'Comments & Reactions',
    description: 'Add threaded comments with emoji reactions — great for collaboration and engagement.',
    category: 'social',
    difficulty: 'medium',
    impact: 'medium',
    icon: '💬',
    keywords: ['comment', 'reply', 'thread', 'reaction', 'feedback', 'discuss'],
    stackRelevance: ['saas-nextjs'],
    stepRelevance: [1, 3, 4]
  },
  {
    id: 'share-invite',
    title: 'Team Invites & Sharing',
    description: 'Let users invite teammates via email with expiring invite links and role assignments.',
    category: 'social',
    difficulty: 'medium',
    impact: 'high',
    icon: '🔗',
    keywords: ['share', 'invite', 'team', 'collaborate', 'link', 'member'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [1, 5]
  },

  // Landing Page Specific
  {
    id: 'animated-hero',
    title: 'Animated Hero Section',
    description: 'Create a show-stopping landing page with parallax scrolling, particle effects, or 3D animations.',
    category: 'ux',
    difficulty: 'medium',
    impact: 'high',
    icon: '🎨',
    keywords: ['hero', 'animation', 'landing', 'parallax', '3d', 'motion'],
    stackRelevance: ['landing-page', 'saas-nextjs'],
    stepRelevance: [1, 2, 3]
  },
  {
    id: 'testimonials',
    title: 'Testimonials & Social Proof',
    description: 'Display customer logos, reviews, and testimonials in a beautiful carousel to build trust.',
    category: 'ux',
    difficulty: 'easy',
    impact: 'high',
    icon: '⭐',
    keywords: ['testimonial', 'review', 'social proof', 'trust', 'customer', 'logo'],
    stackRelevance: ['landing-page', 'saas-nextjs'],
    stepRelevance: [1, 3]
  },
  {
    id: 'waitlist',
    title: 'Waitlist / Early Access',
    description: 'Capture pre-launch interest with a waitlist form and referral-based queue system.',
    category: 'monetization',
    difficulty: 'easy',
    impact: 'high',
    icon: '📋',
    keywords: ['waitlist', 'launch', 'early', 'access', 'signup', 'coming soon'],
    stackRelevance: ['landing-page', 'saas-nextjs'],
    stepRelevance: [1, 3]
  },

  // Mobile Specific
  {
    id: 'offline-support',
    title: 'Offline Mode & Data Sync',
    description: 'Let your mobile app work offline and sync data when connectivity is restored.',
    category: 'performance',
    difficulty: 'hard',
    impact: 'high',
    icon: '📡',
    keywords: ['offline', 'sync', 'cache', 'connectivity', 'mobile'],
    stackRelevance: ['mobile-reactnative'],
    stepRelevance: [1, 4]
  },
  {
    id: 'biometric-auth',
    title: 'Biometric Authentication',
    description: 'Enable Face ID and fingerprint login for a premium, secure mobile experience.',
    category: 'auth',
    difficulty: 'medium',
    impact: 'high',
    icon: '🫣',
    keywords: ['face', 'fingerprint', 'biometric', 'touch', 'mobile', 'secure'],
    stackRelevance: ['mobile-reactnative'],
    stepRelevance: [1, 5]
  },
  {
    id: 'haptic-feedback',
    title: 'Haptic Feedback & Gestures',
    description: 'Add subtle vibration feedback and swipe gestures for a native-feeling mobile experience.',
    category: 'ux',
    difficulty: 'easy',
    impact: 'medium',
    icon: '📳',
    keywords: ['haptic', 'vibration', 'gesture', 'swipe', 'touch', 'mobile'],
    stackRelevance: ['mobile-reactnative'],
    stepRelevance: [1, 2, 3]
  },

  // Performance
  {
    id: 'edge-caching',
    title: 'Edge Caching & CDN',
    description: 'Cache API responses at the edge for blazing-fast global performance using Vercel Edge or Cloudflare.',
    category: 'performance',
    difficulty: 'medium',
    impact: 'high',
    icon: '⚡',
    keywords: ['cache', 'cdn', 'edge', 'speed', 'performance', 'fast', 'global'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs', 'landing-page'],
    stepRelevance: [4, 6]
  },
  {
    id: 'image-optimization',
    title: 'Image Optimization Pipeline',
    description: 'Automatically resize, compress, and serve images in modern formats (WebP/AVIF) for faster loads.',
    category: 'performance',
    difficulty: 'easy',
    impact: 'medium',
    icon: '🖼️',
    keywords: ['image', 'optimize', 'compress', 'webp', 'lazy', 'load'],
    stackRelevance: ['saas-nextjs', 'landing-page'],
    stepRelevance: [3, 6]
  },

  // Accessibility
  {
    id: 'a11y-compliance',
    title: 'WCAG Accessibility Compliance',
    description: 'Ensure your app is usable by everyone with proper ARIA labels, focus management, and contrast ratios.',
    category: 'accessibility',
    difficulty: 'medium',
    impact: 'high',
    icon: '♿',
    keywords: ['accessibility', 'a11y', 'aria', 'screen reader', 'wcag', 'contrast'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs', 'landing-page'],
    stepRelevance: [2, 3]
  },
  {
    id: 'keyboard-navigation',
    title: 'Full Keyboard Navigation',
    description: 'Make every interaction possible via keyboard alone for power users and accessibility.',
    category: 'accessibility',
    difficulty: 'easy',
    impact: 'medium',
    icon: '⌨️',
    keywords: ['keyboard', 'tab', 'focus', 'navigate', 'shortcut'],
    stackRelevance: ['saas-nextjs', 'ai-tool-nextjs'],
    stepRelevance: [2, 3]
  },
]

/**
 * Get feature suggestions filtered by project stack type
 */
export function getSuggestionsByStack(stack: string): FeatureSuggestion[] {
  return ALL_SUGGESTIONS.filter(s => s.stackRelevance.includes(stack))
}

/**
 * Get feature suggestions relevant to a specific wizard step
 */
export function getSuggestionsByStep(stack: string, step: number): FeatureSuggestion[] {
  return ALL_SUGGESTIONS.filter(
    s => s.stackRelevance.includes(stack) && s.stepRelevance.includes(step)
  )
}

/**
 * Get smart suggestions based on the user's app idea text
 * Does keyword matching against the idea description and returns ranked results
 */
export function getSmartSuggestions(idea: string, stack: string, limit = 8): FeatureSuggestion[] {
  const ideaLower = idea.toLowerCase()
  const words = ideaLower.split(/\s+/)

  const scored = ALL_SUGGESTIONS
    .filter(s => s.stackRelevance.includes(stack))
    .map(suggestion => {
      let score = 0

      // Keyword match scoring
      for (const keyword of suggestion.keywords) {
        if (ideaLower.includes(keyword)) {
          score += 3
        }
        for (const word of words) {
          if (word.length > 3 && keyword.includes(word)) {
            score += 1
          }
        }
      }

      // Boost high-impact features
      if (suggestion.impact === 'high') score += 2
      if (suggestion.impact === 'medium') score += 1

      // Boost easy features slightly (quick wins)
      if (suggestion.difficulty === 'easy') score += 1

      return { suggestion, score }
    })
    .sort((a, b) => b.score - a.score)

  // Return top scored, but ensure at least some variety by category
  const result: FeatureSuggestion[] = []
  const usedCategories = new Set<SuggestionCategory>()

  // First pass - add highest scored with category diversity
  for (const { suggestion, score } of scored) {
    if (result.length >= limit) break
    if (score > 0 && !usedCategories.has(suggestion.category)) {
      result.push(suggestion)
      usedCategories.add(suggestion.category)
    }
  }

  // Second pass - fill remaining slots with highest scored regardless of category
  for (const { suggestion, score } of scored) {
    if (result.length >= limit) break
    if (score > 0 && !result.includes(suggestion)) {
      result.push(suggestion)
    }
  }

  // If still not enough, add top-rated generic features
  if (result.length < Math.min(limit, 4)) {
    const fallback = ALL_SUGGESTIONS
      .filter(s => s.stackRelevance.includes(stack) && !result.includes(s) && s.impact === 'high')
      .slice(0, limit - result.length)
    result.push(...fallback)
  }

  return result.slice(0, limit)
}

/**
 * Get all categories with their labels
 */
export function getCategoryLabel(category: SuggestionCategory): string {
  const labels: Record<SuggestionCategory, string> = {
    auth: 'Authentication',
    payments: 'Payments',
    analytics: 'Analytics',
    ai: 'AI / ML',
    realtime: 'Real-Time',
    social: 'Social',
    notifications: 'Notifications',
    performance: 'Performance',
    security: 'Security',
    ux: 'UX / Design',
    seo: 'SEO',
    accessibility: 'Accessibility',
    integration: 'Integrations',
    monetization: 'Monetization'
  }
  return labels[category]
}

/**
 * Get difficulty color
 */
export function getDifficultyColor(difficulty: 'easy' | 'medium' | 'hard'): string {
  switch (difficulty) {
    case 'easy': return 'text-emerald-600 bg-emerald-500/10'
    case 'medium': return 'text-amber-600 bg-amber-500/10'
    case 'hard': return 'text-red-500 bg-red-500/10'
  }
}

/**
 * Get impact color
 */
export function getImpactColor(impact: 'low' | 'medium' | 'high'): string {
  switch (impact) {
    case 'low': return 'text-zinc-500 bg-zinc-500/10'
    case 'medium': return 'text-blue-600 bg-blue-500/10'
    case 'high': return 'text-purple-600 bg-purple-500/10'
  }
}
