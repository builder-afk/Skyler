"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useSettingsStore } from "@/store/settingsStore"
import { useAppStore } from "@/store/projectStore"
import { Settings2, Save, MonitorSmartphone, Cpu } from "lucide-react"
import { toast } from "sonner"

export function PreferencesForm() {
  const { preferences, updatePreferences } = useSettingsStore()
  const { setSelectedTool } = useAppStore()

  const handleSave = () => {
    updatePreferences({
      defaultModel: preferences.defaultModel,
      defaultTool: preferences.defaultTool
    })
    setSelectedTool(preferences.defaultTool)
    toast.success("Preferences updated successfully")
  }

  return (
    <Card className="border-border/50 shadow-lg bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <Settings2 className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-xl font-display">App Preferences</CardTitle>
            <CardDescription>Customize your default experience and UI behavior.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <MonitorSmartphone className="h-3 w-3" /> Default Code Tool
            </Label>
            <Select
              value={preferences.defaultTool}
              onValueChange={(v) => updatePreferences({ defaultTool: v || "Cursor" })}
            >
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Select tool" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Cursor">Cursor</SelectItem>
                <SelectItem value="Windsurf">Windsurf</SelectItem>
                <SelectItem value="Antigravity">Antigravity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Cpu className="h-3 w-3" /> Default AI Model
            </Label>
            <Select
              value={preferences.defaultModel}
              onValueChange={(v) => updatePreferences({ defaultModel: v as string })}
            >
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4o">GPT-4o (OpenAI)</SelectItem>
                <SelectItem value="claude-3-5-sonnet">Claude 3.5 Sonnet (Anthropic)</SelectItem>
                <SelectItem value="gemini-1-5-pro">Gemini 1.5 Pro (Google)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button onClick={handleSave} className="w-full sm:w-auto flex items-center gap-2">
          <Save className="h-4 w-4" /> Save Preferences
        </Button>
      </CardContent>
    </Card>
  )
}
