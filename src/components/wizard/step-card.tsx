'use client'

import { useState } from "react"
import { Wand2, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PromptViewer } from "./prompt-viewer"
import { useAppStore } from "@/store/projectStore"
import { generateAndSavePrompt, advanceStep, savePromptContent } from "@/app/(app)/project/[id]/actions"
import { toast } from "sonner"

interface StepCardProps {
  projectId: string
  stepNumber: number
  title: string
  description: string
  isActive: boolean
  isCompleted: boolean
  savedPrompts: { step: number; tool: string; content: string }[]
}

export function StepCard({ projectId, stepNumber, title, description, isActive, isCompleted, savedPrompts }: StepCardProps) {
  const selectedTool = useAppStore((state) => state.selectedTool)
  const [generating, setGenerating] = useState(false)
  const [advancing, setAdvancing] = useState(false)
  const [currentPrompt, setCurrentPrompt] = useState<string | null>(null)

  // Find if we already generated a prompt for this step/tool
  const existingPrompt = savedPrompts.find((p) => p.step === stepNumber && p.tool === selectedTool)
  const promptContent = currentPrompt || (existingPrompt ? existingPrompt.content : null)

  const handleGenerate = async () => {
    setGenerating(true)
    const result = await generateAndSavePrompt(projectId, stepNumber, selectedTool)
    setGenerating(false)

    if (result.error) {
      toast.error(result.error)
    } else if (result.content) {
      setCurrentPrompt(result.content)
      toast.success("Prompt generated!")
    }
  }

  const handleNextStep = async () => {
    setAdvancing(true)
    
    // Save locally modified prompt if it exists
    if (currentPrompt) {
      const saveResult = await savePromptContent(projectId, stepNumber, selectedTool, currentPrompt)
      if (saveResult.error) {
        toast.error("Failed to save customized prompt.")
        setAdvancing(false)
        return
      }
    }

    const result = await advanceStep(projectId, stepNumber)
    setAdvancing(false)

    if (result.error) {
      toast.error(result.error)
    } else {
      toast.success("Step locked. Moving to next.")
    }
  }

  if (!isActive && !isCompleted) {
    return (
      <Card className="opacity-50 pointer-events-none scale-[0.98] transition-all">
        <CardHeader>
          <CardTitle className="flex items-center text-muted-foreground">
            <span className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs mr-3">
              {stepNumber}
            </span>
            {title}
          </CardTitle>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className={`transition-all duration-300 ${isActive ? 'ring-2 ring-primary border-transparent shadow-lg scale-100' : 'scale-[0.99] border-muted bg-muted/10'}`}>
      <CardHeader>
        <CardTitle className="flex items-center">
          {isCompleted ? (
            <CheckCircle2 className="h-6 w-6 text-green-500 mr-3" />
          ) : (
            <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs mr-3">
              {stepNumber}
            </span>
          )}
          {title}
        </CardTitle>
        <CardDescription className="ml-9">{description}</CardDescription>
      </CardHeader>
      {(isActive || isCompleted) && (
        <CardContent className="ml-9 border-l-2 pl-6 pb-6 mt-2 relative">
          <div className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 to-transparent" />
          
          <div className="mb-4">
            <Button 
              onClick={handleGenerate} 
              disabled={generating || (isCompleted && !!promptContent)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              <Wand2 className="mr-2 h-4 w-4" />
              {generating ? "Generating..." : promptContent ? `Regenerate for ${selectedTool}` : `Generate Prompt for ${selectedTool}`}
            </Button>
          </div>

          {promptContent && <PromptViewer content={promptContent} onChange={setCurrentPrompt} />}
        </CardContent>
      )}
      {isActive && promptContent && (
        <CardFooter className="bg-muted/30 flex justify-end p-4 border-t rounded-b-xl">
          <Button onClick={handleNextStep} disabled={advancing} size="lg">
            {advancing ? "Saving..." : stepNumber === 6 ? "Finish Project" : "Mark Complete & Continue"}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
