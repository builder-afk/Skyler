export interface Project {
  id: string
  user_id: string
  name: string
  idea: string
  stack: string
  created_at: string
}

export interface Prompt {
  id: string
  project_id: string
  step: number
  tool: "Cursor" | "Windsurf" | "Antigravity"
  content: string
  created_at: string
}

export type AppData = {
  activeProject: Project | null
  currentStep: number
  selectedTool: "Cursor" | "Windsurf" | "Antigravity"
}
