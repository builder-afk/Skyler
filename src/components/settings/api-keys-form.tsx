"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useSettingsStore } from "@/store/settingsStore"
import { Eye, EyeOff, Save, Key } from "lucide-react"
import { toast } from "sonner"

export function ApiKeysForm() {
  const { apiKeys, setApiKey } = useSettingsStore()
  const [showKeys, setShowKeys] = useState({
    openai: false,
    anthropic: false,
    gemini: false,
  })
  
  const [localKeys, setLocalKeys] = useState(apiKeys)

  const handleSave = () => {
    setApiKey('openai', localKeys.openai)
    setApiKey('anthropic', localKeys.anthropic)
    setApiKey('gemini', localKeys.gemini)
    toast.success("API keys saved successfully")
  }

  const toggleShow = (provider: keyof typeof showKeys) => {
    setShowKeys(prev => ({ ...prev, [provider]: !prev[provider] }))
  }

  return (
    <Card className="border-border/50 shadow-lg bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <Key className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-xl font-display">API Providers</CardTitle>
            <CardDescription>Configure your model provider keys for generation.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="openai" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">OpenAI API Key</Label>
            <div className="relative">
              <Input
                id="openai"
                type={showKeys.openai ? "text" : "password"}
                placeholder="sk-..."
                value={localKeys.openai}
                onChange={(e) => setLocalKeys({ ...localKeys, openai: e.target.value })}
                className="pr-10 bg-background/50"
              />
              <button
                type="button"
                onClick={() => toggleShow('openai')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showKeys.openai ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="anthropic" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Anthropic API Key</Label>
            <div className="relative">
              <Input
                id="anthropic"
                type={showKeys.anthropic ? "text" : "password"}
                placeholder="sk-ant-..."
                value={localKeys.anthropic}
                onChange={(e) => setLocalKeys({ ...localKeys, anthropic: e.target.value })}
                className="pr-10 bg-background/50"
              />
              <button
                type="button"
                onClick={() => toggleShow('anthropic')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showKeys.anthropic ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="gemini" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Google Gemini API Key</Label>
            <div className="relative">
              <Input
                id="gemini"
                type={showKeys.gemini ? "text" : "password"}
                placeholder="AIza..."
                value={localKeys.gemini}
                onChange={(e) => setLocalKeys({ ...localKeys, gemini: e.target.value })}
                className="pr-10 bg-background/50"
              />
              <button
                type="button"
                onClick={() => toggleShow('gemini')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showKeys.gemini ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        <Button onClick={handleSave} className="w-full sm:w-auto flex items-center gap-2">
          <Save className="h-4 w-4" /> Save API Keys
        </Button>
      </CardContent>
    </Card>
  )
}
