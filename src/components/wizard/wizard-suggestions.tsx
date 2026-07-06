"use client"

import { AISuggestions } from '@/components/wizard/ai-suggestions'
import type { FeatureSuggestion } from '@/lib/feature-suggestions'
import { toast } from 'sonner'

interface WizardSuggestionsProps {
  idea: string
  stack: string
  currentStep: number
}

export function WizardSuggestions({ idea, stack, currentStep }: WizardSuggestionsProps) {
  const handleAddFeature = (feature: FeatureSuggestion) => {
    // Copy the feature description to clipboard for the user to paste into their prompt
    const text = `\n\n### Additional Feature: ${feature.title}\n${feature.description}`
    navigator.clipboard.writeText(text)
    toast.success(`"${feature.title}" copied to clipboard!`, {
      description: "Paste it into your prompt editor to include this feature.",
      duration: 3000,
    })
  }

  return (
    <div className="lg:sticky lg:top-6">
      <AISuggestions
        idea={idea}
        stack={stack}
        step={currentStep}
        compact={true}
        onAddFeature={handleAddFeature}
      />
    </div>
  )
}
