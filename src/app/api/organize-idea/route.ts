import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { idea } = await request.json()

  if (!idea || typeof idea !== 'string' || idea.trim().length < 10) {
    return NextResponse.json(
      { error: 'Please provide a more detailed application idea (at least 10 characters).' },
      { status: 400 }
    )
  }

  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 1800))

  // Extract keywords from the idea to make the mock response feel contextual
  const text = idea.toLowerCase()
  const hasAuth = /auth|login|sign.?up|user|account|register/i.test(text)
  const hasPayment = /pay|billing|stripe|subscription|pricing|checkout/i.test(text)
  const hasAI = /ai|machine learning|gpt|chatbot|nlp|recommendation|ml/i.test(text)
  const hasRealtime = /real.?time|chat|socket|live|notification|collab/i.test(text)
  const hasDashboard = /dashboard|analytics|chart|report|metric|stat/i.test(text)
  const hasMobile = /mobile|app|react native|ios|android|expo/i.test(text)
  const hasEcommerce = /shop|store|cart|product|inventory|order|ecommerce/i.test(text)
  const hasAPI = /api|rest|graphql|endpoint|backend|server/i.test(text)

  // Build contextual action items
  const actionItems: Array<{ task: string; priority: string; effort: string }> = []
  
  actionItems.push({ task: "Define core user stories and acceptance criteria", priority: "High", effort: "Medium" })
  actionItems.push({ task: "Create wireframes for the main user flows", priority: "High", effort: "Medium" })
  actionItems.push({ task: "Set up the project repository and CI/CD pipeline", priority: "High", effort: "Small" })

  if (hasAuth) {
    actionItems.push({ task: "Implement authentication system (sign up, login, password reset)", priority: "High", effort: "Medium" })
    actionItems.push({ task: "Design role-based access control (RBAC) schema", priority: "Medium", effort: "Medium" })
  }
  if (hasPayment) {
    actionItems.push({ task: "Integrate Stripe for payment processing", priority: "High", effort: "Large" })
    actionItems.push({ task: "Build subscription management and billing portal", priority: "Medium", effort: "Large" })
  }
  if (hasAI) {
    actionItems.push({ task: "Design AI/ML pipeline architecture", priority: "High", effort: "Large" })
    actionItems.push({ task: "Set up prompt engineering and model evaluation framework", priority: "Medium", effort: "Medium" })
  }
  if (hasRealtime) {
    actionItems.push({ task: "Set up WebSocket infrastructure for real-time features", priority: "High", effort: "Large" })
    actionItems.push({ task: "Implement optimistic UI updates and conflict resolution", priority: "Medium", effort: "Medium" })
  }
  if (hasDashboard) {
    actionItems.push({ task: "Design analytics dashboard with key metrics", priority: "Medium", effort: "Large" })
    actionItems.push({ task: "Set up data aggregation and reporting pipeline", priority: "Medium", effort: "Large" })
  }
  if (hasEcommerce) {
    actionItems.push({ task: "Build product catalog and inventory management", priority: "High", effort: "Large" })
    actionItems.push({ task: "Implement shopping cart and checkout flow", priority: "High", effort: "Large" })
  }
  if (hasAPI) {
    actionItems.push({ task: "Design RESTful API schema with OpenAPI specification", priority: "High", effort: "Medium" })
    actionItems.push({ task: "Implement rate limiting and API key management", priority: "Medium", effort: "Medium" })
  }

  actionItems.push({ task: "Write unit tests for core business logic", priority: "Medium", effort: "Medium" })
  actionItems.push({ task: "Set up monitoring, logging, and error tracking", priority: "Medium", effort: "Small" })
  actionItems.push({ task: "Create onboarding flow and user documentation", priority: "Low", effort: "Medium" })

  // Build contextual projects/features
  const projects: Array<{ name: string; status: string; nextAction: string }> = []
  
  projects.push({ name: "Core Application Shell", status: "Not Started", nextAction: "Set up project boilerplate and folder structure" })
  
  if (hasAuth) projects.push({ name: "Authentication & User Management", status: "Not Started", nextAction: "Choose auth provider (Supabase Auth, NextAuth, Clerk)" })
  if (hasPayment) projects.push({ name: "Billing & Subscriptions", status: "Not Started", nextAction: "Set up Stripe account and define pricing tiers" })
  if (hasAI) projects.push({ name: "AI/ML Features", status: "Not Started", nextAction: "Evaluate model options (OpenAI, Claude, open-source)" })
  if (hasRealtime) projects.push({ name: "Real-Time Communication", status: "Not Started", nextAction: "Choose WebSocket solution (Socket.io, Pusher, Supabase Realtime)" })
  if (hasDashboard) projects.push({ name: "Analytics Dashboard", status: "Not Started", nextAction: "Define KPIs and data sources" })
  if (hasMobile) projects.push({ name: "Mobile Application", status: "Not Started", nextAction: "Set up React Native/Expo project" })
  if (hasEcommerce) projects.push({ name: "E-Commerce Engine", status: "Not Started", nextAction: "Design product schema and payment flow" })
  if (hasAPI) projects.push({ name: "API Layer", status: "Not Started", nextAction: "Define API routes and data models" })
  
  projects.push({ name: "Testing & QA", status: "Not Started", nextAction: "Set up Jest/Vitest and Playwright" })
  projects.push({ name: "Deployment & DevOps", status: "Not Started", nextAction: "Configure Vercel/AWS and environment variables" })

  // Build contextual ideas
  const ideas: string[] = [
    "Consider a progressive onboarding wizard to reduce drop-off",
    "Implement feature flags for gradual rollout of new features",
    "Add a feedback widget for early user insights",
  ]
  if (hasAI) ideas.push("Build a prompt playground for testing AI responses before shipping")
  if (hasRealtime) ideas.push("Add presence indicators to show who's online")
  if (hasPayment) ideas.push("Offer a 14-day free trial to improve conversion rates")
  if (hasDashboard) ideas.push("Add export-to-PDF for all reports and analytics views")
  if (hasEcommerce) ideas.push("Implement abandoned cart recovery emails")

  // Build contextual questions
  const questions: string[] = [
    "Who is the primary target user, and what's their technical skill level?",
    "What's the MVP scope vs. the full vision? What can be cut for v1?",
    "What's the expected scale at launch (users, data volume)?",
  ]
  if (hasAuth) questions.push("Should we support social login (Google, GitHub) from day one?")
  if (hasPayment) questions.push("What are the pricing tiers and what features are gated?")
  if (hasAI) questions.push("What's the acceptable latency for AI-generated responses?")
  if (hasRealtime) questions.push("How many concurrent connections do we need to support?")
  if (hasMobile) questions.push("Is the mobile app iOS-only, Android-only, or cross-platform?")

  // Build contextual risks
  const risks: string[] = [
    "Scope creep — too many features planned for v1 could delay launch",
    "Third-party API rate limits or pricing changes could impact costs",
    "Underestimating the complexity of edge cases in core flows",
  ]
  if (hasAI) risks.push("AI model costs can escalate quickly at scale — need usage limits and caching")
  if (hasPayment) risks.push("Payment integration requires PCI compliance considerations")
  if (hasRealtime) risks.push("WebSocket connections can be expensive at scale — plan for connection pooling")

  // Build the full structured response
  const wordCount = idea.split(/\s+/).length
  const summaryContext = [
    hasAuth && "user authentication",
    hasPayment && "payment processing",
    hasAI && "AI-powered features",
    hasRealtime && "real-time collaboration",
    hasDashboard && "analytics dashboards",
    hasMobile && "mobile experience",
    hasEcommerce && "e-commerce capabilities",
    hasAPI && "API infrastructure",
  ].filter(Boolean).join(', ')

  const result = {
    summary: `Your brain dump describes an application with ${summaryContext || 'several core features'}. The idea spans approximately ${wordCount} words and touches on ${projects.length - 2} major feature areas. Key priorities include setting up the project foundation, implementing core user flows, and establishing the technical architecture. There are ${questions.length} open questions that need answers before development begins, and ${risks.length} potential risks to monitor throughout the build process.`,
    
    projects,
    actionItems,
    
    goals: [
      "Launch a functional MVP within 4-6 weeks",
      "Achieve product-market fit with initial user cohort",
      "Build a scalable architecture that supports 10x growth",
      "Maintain >90% test coverage on critical paths",
      "Deliver a polished UX that requires minimal user support",
    ],
    
    ideas,
    questions,
    risks,
    
    nextSteps: [
      "Finalize the MVP feature set by answering the open questions above",
      "Create a high-fidelity Figma prototype of the core user journey",
      "Set up the project repository with CI/CD, linting, and testing",
      "Build the authentication flow as the first vertical slice",
      "Schedule weekly progress reviews to prevent scope creep",
    ],

    priorityMatrix: {
      high: actionItems.filter(a => a.priority === 'High').map(a => a.task),
      medium: actionItems.filter(a => a.priority === 'Medium').map(a => a.task),
      low: actionItems.filter(a => a.priority === 'Low').map(a => a.task),
    }
  }

  return NextResponse.json(result)
}
