import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SettingsState {
  apiKeys: {
    openai: string
    anthropic: string
    gemini: string
  }
  preferences: {
    defaultModel: string
    defaultTool: "Cursor" | "Windsurf" | "Antigravity"
  }
  setApiKey: (provider: 'openai' | 'anthropic' | 'gemini', key: string) => void
  updatePreferences: (prefs: Partial<SettingsState['preferences']>) => void
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      apiKeys: {
        openai: '',
        anthropic: '',
        gemini: '',
      },
      preferences: {
        defaultModel: 'gpt-4o',
        defaultTool: 'Cursor',
      },
      setApiKey: (provider, key) =>
        set((state) => ({
          apiKeys: { ...state.apiKeys, [provider]: key },
        })),
      updatePreferences: (prefs) =>
        set((state) => ({
          preferences: { ...state.preferences, ...prefs },
        })),
    }),
    {
      name: 'prompter-settings',
    }
  )
)
