import { create } from 'zustand'
import { Project, AppData } from '@/types'

interface AppState extends AppData {
  setActiveProject: (project: Project | null) => void
  setCurrentStep: (step: number) => void
  setSelectedTool: (tool: "Cursor" | "Windsurf" | "Antigravity") => void
  reset: () => void
}

export const useAppStore = create<AppState>((set) => ({
  activeProject: null,
  currentStep: 1,
  selectedTool: "Cursor",
  setActiveProject: (project) => set({ activeProject: project }),
  setCurrentStep: (step) => set({ currentStep: step }),
  setSelectedTool: (tool) => set({ selectedTool: tool }),
  reset: () => set({ activeProject: null, currentStep: 1, selectedTool: "Cursor" }),
}))
