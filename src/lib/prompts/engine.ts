export type ProjectStack = 'saas-nextjs' | 'mobile-reactnative' | 'ai-tool-nextjs' | 'landing-page'
export type AITool = 'Cursor' | 'Windsurf' | 'Antigravity'

export interface GeneratePromptParams {
  step: number
  idea: string
  stack: string
  tool: AITool
}

export function generatePrompt({ step, idea, stack, tool }: GeneratePromptParams): string {
  const toolContext = getToolContext(tool)
  const stackContext = getStackContext(stack as ProjectStack)

  switch (step) {
    case 1:
      return generateStep1(idea, stackContext, toolContext)
    case 2:
      return generateStep2(idea, stackContext, toolContext)
    case 3:
      return generateStep3(idea, stackContext, toolContext)
    case 4:
      return generateStep4(idea, stackContext, toolContext)
    case 5:
      return generateStep5(idea, stackContext, toolContext)
    case 6:
      return generateStep6(idea, stackContext, toolContext)
    default:
      return "Invalid step."
  }
}

function getToolContext(tool: AITool): string {
  switch (tool) {
    case 'Cursor':
      return "You are an expert AI coding assistant acting as Cursor Composer/Chat. Please use your workspace awareness to build this correctly."
    case 'Windsurf':
      return "You are an expert AI agent inside Windsurf. Please utilize your Cascade features to proactively build the files step-by-step."
    case 'Antigravity':
      return "You are Antigravity, an advanced agentic coding assistant. Please use your tools optimally, verifying your work and handling complex refactors confidently."
  }
}

function getStackContext(stack: ProjectStack): string {
  switch (stack) {
    case 'saas-nextjs':
      return "Next.js 14 App Router, TypeScript, Tailwind CSS, Shadcn UI, and Supabase for Database/Auth."
    case 'mobile-reactnative':
      return "React Native with Expo, TypeScript, NativeWind for styling, and Supabase for backend."
    case 'ai-tool-nextjs':
      return "Next.js 14 App Router (Frontend) with Python FastAPI (Backend), and OpenAI API."
    case 'landing-page':
      return "Next.js 14, React, Tailwind CSS, and Framer Motion for animations."
  }
}

function generateStep1(idea: string, stack: string, tool: string) {
  return `${tool}

I need you to act as a Senior Technical Product Manager.

I have an idea for an application:
"${idea}"

The tech stack we are using is: ${stack}

Please generate a detailed Product Requirements Document (PRD) in markdown format. 
Include:
1. Core features and user stories
2. Application architecture overview
3. Tech stack breakdown
4. Phase 1 (MVP) implementation steps

Do not write any code yet. Just outline the plan clearly.`
}

function generateStep2(idea: string, stack: string, tool: string) {
  return `${tool}

We are moving to the UI/UX Generation phase for our app.
App Idea: "${idea}"
Tech Stack: ${stack}

Please outline the design system and core UI components we will need.
1. Define the color palette and typography (suggest modern, vibrant, or sleek dark mode aesthetics).
2. Detail the layout structure (e.g., Sidebar, Header, Dashboard grid).
3. If using Shadcn UI or NativeWind, specify which core components need to be installed.

Write down the foundational CSS/Tailwind configurations we must apply before building the actual pages.`
}

function generateStep3(idea: string, stack: string, tool: string) {
  return `${tool}

Now we will build the Frontend Development for our app.
App Idea: "${idea}"
Tech Stack: ${stack}

Requirements:
- Ensure the UI looks premium with smooth transitions.
- Build the main Dashboard and navigation structure.
- Follow the React server component best practices if using Next.js.
- Create placeholder state management logic or context providers if required.

Please write the complete code for the main layout and the core landing/dashboard view. Ensure it is production-ready.`
}

function generateStep4(idea: string, stack: string, tool: string) {
  return `${tool}

Next, let's implement the Backend logic and Database schema.
App Idea: "${idea}"
Tech Stack: ${stack}

Please provide:
1. The SQL script or ORM models to generate the required database tables.
2. Row Level Security (RLS) policies to protect the data.
3. The core API endpoints or Server Actions required to Create, Read, Update, and Delete the primary resources of the app.

Ensure complete security and type-safety.`
}

function generateStep5(idea: string, stack: string, tool: string) {
  return `${tool}

Let's integrate Authentication and necessary third-party services.
App Idea: "${idea}"
Tech Stack: ${stack}

1. Implement the user authentication flow (Login/Signup/Logout).
2. Protect the dashboard routes so only authenticated users can access them.
3. If applicable to the idea, provide the code to integrate payment processing (Stripe) or AI generation APIs.

Return clean, production-ready code with appropriate error handling.`
}

function generateStep6(idea: string, stack: string, tool: string) {
  return `${tool}

Finally, provide the Deployment instructions for our app.
App Idea: "${idea}"
Tech Stack: ${stack}

Detail the exact steps required to:
1. Set up the production environment variables securely.
2. Build the project for production.
3. Deploy to the optimal hosting provider (e.g., Vercel for Next.js, EAS for Expo).
4. Run post-deployment database migrations or scripts.

Make sure the instructions are easy to follow and include the necessary terminal commands.`
}
