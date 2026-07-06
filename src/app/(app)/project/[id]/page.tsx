import { getProjectData } from "./actions"
import { notFound } from "next/navigation"
import { StepCard } from "@/components/wizard/step-card"
import { Progress } from "@/components/ui/progress"
import { WizardSuggestions } from "@/components/wizard/wizard-suggestions"

const WIZARD_STEPS = [
  { step: 1, title: 'Idea Definition', description: 'Transform your raw idea into a structured Product Requirements Document (PRD).' },
  { step: 2, title: 'UI/UX Generation', description: 'Define the design system, color palette, and layout structure.' },
  { step: 3, title: 'Frontend Development', description: 'Generate the React/Next.js/Mobile code for the core application.' },
  { step: 4, title: 'Backend + Database', description: 'Create the database schema, RLS policies, and core API endpoints.' },
  { step: 5, title: 'Auth + Integrations', description: 'Integrate the authentication flow and any third-party services.' },
  { step: 6, title: 'Deployment', description: 'Get detailed instructions on how to deploy your application to production.' },
]

export default async function ProjectWizardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const { project, prompts, error } = await getProjectData(id)

  if (error || !project) {
    return (
      <div className="p-8">
        <h1>Error or Not Found</h1>
        <pre>{JSON.stringify({ error, project, id }, null, 2)}</pre>
      </div>
    )
  }

  const currentStep = project.current_step
  const progressPercent = Math.round(((currentStep - 1) / 6) * 100)

  return (
    <div className="max-w-6xl mx-auto py-6 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="bg-secondary px-2 py-1 rounded text-foreground">{project.stack}</span>
          <span>Step {currentStep} of 6</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>Overall Progress</span>
            <span>{progressPercent}%</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr,340px]">
        {/* Main Steps Column */}
        <div className="space-y-6">
          {WIZARD_STEPS.map((stepInfo) => (
            <StepCard
              key={stepInfo.step}
              projectId={id}
              stepNumber={stepInfo.step}
              title={stepInfo.title}
              description={stepInfo.description}
              isActive={currentStep === stepInfo.step}
              isCompleted={currentStep > stepInfo.step}
              savedPrompts={prompts || []}
            />
          ))}

          {currentStep > 6 && (
            <div className="p-8 text-center bg-green-500/10 border border-green-500/20 rounded-xl mt-8">
              <h2 className="text-2xl font-bold text-green-600 mb-2">Project Generation Complete!</h2>
              <p className="text-muted-foreground">
                You have generated all the prompts needed to build your application. Copy them into your selected AI tool to start building.
              </p>
            </div>
          )}
        </div>

        {/* Suggestions Sidebar */}
        <aside className="hidden lg:block">
          <WizardSuggestions
            idea={project.idea}
            stack={project.stack}
            currentStep={currentStep}
          />
        </aside>
      </div>
    </div>
  )
}
