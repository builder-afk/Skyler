"use client"

import { useState, useCallback, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { createProject } from "../actions"
import { toast } from "sonner"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Sparkles, Brain, CheckCircle2, ListTodo, AlertTriangle, 
  Lightbulb, ChevronDown, ChevronUp, Copy, Loader2, ArrowRight
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AISuggestions } from "@/components/wizard/ai-suggestions"
import type { FeatureSuggestion } from "@/lib/feature-suggestions"

// Types for the brain dump API response
interface OrganizedIdea {
  summary: string;
  projects: Array<{ name: string; status: string; nextAction: string }>;
  actionItems: Array<{ task: string; priority: string; effort: string }>;
  goals: string[];
  ideas: string[];
  questions: string[];
  risks: string[];
  nextSteps: string[];
  priorityMatrix: { high: string[]; medium: string[]; low: string[] };
}

function NewProjectForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [idea, setIdea] = useState(searchParams.get("idea") || "")
  const [stack, setStack] = useState(searchParams.get("stack") || "saas-nextjs")
  const [addedFeatures, setAddedFeatures] = useState<string[]>([])
  const initialName = searchParams.get("name") || ""

  const [organizing, setOrganizing] = useState(false)
  const [organizedIdea, setOrganizedIdea] = useState<OrganizedIdea | null>(null)
  const [expandedSection, setExpandedSection] = useState<string | null>('summary')

  const handleOrganize = async () => {
    if (idea.trim().length < 10) {
      toast.error("Please enter a longer idea description first.")
      return
    }

    setOrganizing(true)
    try {
      const res = await fetch('/api/organize-idea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea })
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || 'Failed to organize idea')
      }

      const data = await res.json()
      setOrganizedIdea(data)
      setExpandedSection('summary')
      toast.success("Thoughts organized successfully!")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setOrganizing(false)
    }
  }

  const copyToClipboard = () => {
    if (!organizedIdea) return
    let text = `# 🧠 Brain Dump Summary\n${organizedIdea.summary}\n\n`
    
    text += `# 📂 Projects\n`
    organizedIdea.projects.forEach(p => text += `- ${p.name}\n  - Status: ${p.status}\n  - Next: ${p.nextAction}\n`)
    text += `\n# ✅ Action Items\n`
    organizedIdea.actionItems.forEach(a => text += `- [ ] ${a.task} (${a.priority} Priority, ${a.effort} Effort)\n`)
    text += `\n# 🚀 Next Steps\n`
    organizedIdea.nextSteps.forEach(s => text += `- ${s}\n`)
    
    navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard")
  }

  const handleAddFeature = useCallback((feature: FeatureSuggestion) => {
    if (addedFeatures.includes(feature.id)) return

    setAddedFeatures(prev => [...prev, feature.id])

    // Append feature to the idea textarea
    setIdea(prev => {
      const separator = prev.trim() ? '\n\n' : ''
      return `${prev}${separator}• ${feature.title}: ${feature.description}`
    })

    toast.success(`Added "${feature.title}" to your requirements`, {
      description: "The feature has been appended to your idea description.",
      duration: 2000,
    })
  }, [addedFeatures])

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const result = await createProject(formData)

    setLoading(false)

    if (result.error) {
      toast.error(result.error)
      return
    }

    toast.success("Project created successfully!")
    router.push(`/project/${result.project.id}`)
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="grid gap-6 lg:grid-cols-[1fr,380px]">
        {/* Main Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create New Project</CardTitle>
            <CardDescription>
              Define your application idea and select the tech stack. Skyler will guide you through the prompt generation process.
            </CardDescription>
          </CardHeader>
          <form onSubmit={onSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Project Name</Label>
                <Input id="name" name="name" placeholder="e.g. Acme SaaS" defaultValue={initialName} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stack">Project Type & Tech Stack</Label>
                <Select name="stack" required value={stack} onValueChange={(v) => v && setStack(v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saas-nextjs">SaaS App (Next.js, Supabase, Tailwind)</SelectItem>
                    <SelectItem value="mobile-reactnative">Mobile App (React Native, Expo)</SelectItem>
                    <SelectItem value="ai-tool-nextjs">AI Tool (Next.js, Python FastAPI)</SelectItem>
                    <SelectItem value="landing-page">Landing Page (Next.js, Tailwind)</SelectItem>
                    <SelectItem value="backend-architecture-planner">Backend Architecture Planner</SelectItem>
                    <SelectItem value="frontend-architecture-planner">Frontend Architecture Planner</SelectItem>
                    <SelectItem value="full-stack-architecture-planner">Full-Stack Architecture Planner</SelectItem>
                    <SelectItem value="ai-architecture-planner">AI Architecture Planner</SelectItem>
                    <SelectItem value="multi-agent-system-designer">Multi-Agent System Designer</SelectItem>
                    <SelectItem value="api-design-generator">API Design Generator</SelectItem>
                    <SelectItem value="database-architecture-planner">Database Architecture Planner</SelectItem>
                    <SelectItem value="microservices-planner">Microservices Planner</SelectItem>
                    <SelectItem value="event-driven-architecture-planner">Event-Driven Architecture Planner</SelectItem>
                    <SelectItem value="authentication-system-designer">Authentication System Designer</SelectItem>
                    <SelectItem value="devops-planner">DevOps Planner</SelectItem>
                    <SelectItem value="cicd-pipeline-generator">CI/CD Pipeline Generator</SelectItem>
                    <SelectItem value="cloud-infrastructure-planner">Cloud Infrastructure Planner</SelectItem>
                    <SelectItem value="kubernetes-deployment-planner">Kubernetes Deployment Planner</SelectItem>
                    <SelectItem value="docker-architecture-generator">Docker Architecture Generator</SelectItem>
                    <SelectItem value="security-architecture-planner">Security Architecture Planner</SelectItem>
                    <SelectItem value="monitoring-observability-planner">Monitoring & Observability Planner</SelectItem>
                    <SelectItem value="performance-optimization-planner">Performance Optimization Planner</SelectItem>
                    <SelectItem value="scaling-strategy-planner">Scaling Strategy Planner</SelectItem>
                    <SelectItem value="cost-optimization-planner">Cost Optimization Planner</SelectItem>
                    <SelectItem value="disaster-recovery-planner">Disaster Recovery Planner</SelectItem>
                    <SelectItem value="ai-agent-builder">AI Agent Builder</SelectItem>
                    <SelectItem value="multi-agent-workflow-planner">Multi-Agent Workflow Planner</SelectItem>
                    <SelectItem value="rag-architecture-planner">RAG Architecture Planner</SelectItem>
                    <SelectItem value="prompt-engineering-assistant">Prompt Engineering Assistant</SelectItem>
                    <SelectItem value="ai-chatbot-generator">AI Chatbot Generator</SelectItem>
                    <SelectItem value="voice-ai-planner">Voice AI Planner</SelectItem>
                    <SelectItem value="ai-receptionist-planner">AI Receptionist Planner</SelectItem>
                    <SelectItem value="ai-workflow-automation-planner">AI Workflow Automation Planner</SelectItem>
                    <SelectItem value="recommendation-engine-designer">Recommendation Engine Designer</SelectItem>
                    <SelectItem value="computer-vision-pipeline">Computer Vision Pipeline</SelectItem>
                    <SelectItem value="ocr-system-planner">OCR System Planner</SelectItem>
                    <SelectItem value="speech-to-text-pipeline">Speech-to-Text Pipeline</SelectItem>
                    <SelectItem value="text-to-speech-architecture">Text-to-Speech Architecture</SelectItem>
                    <SelectItem value="fine-tuning-planner">Fine-Tuning Planner</SelectItem>
                    <SelectItem value="local-llm-deployment-planner">Local LLM Deployment Planner</SelectItem>
                    <SelectItem value="ai-safety-guardrails-planner">AI Safety & Guardrails Planner</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="idea">Application Idea</Label>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 gap-1.5 text-accent hover:text-accent hover:bg-accent/10"
                    onClick={handleOrganize}
                    disabled={organizing}
                  >
                    {organizing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                    {organizing ? "Organizing..." : "Organize My Thoughts"}
                  </Button>
                </div>
                <Textarea
                  id="idea"
                  name="idea"
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="Dump all your thoughts here. What is the app? Who is it for? What are the features, goals, or open questions? Don't worry about being messy."
                  className="min-h-[180px]"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Be as descriptive as possible. This will be used to generate your architecture and code prompts. 
                  <span className="text-accent font-medium"> Use the feature suggestions panel to enrich your idea →</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-4 border-t px-6 py-4">
              <Button variant="outline" type="button" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create Project & Start Builder"}
              </Button>
            </CardFooter>
          </form>
        </Card>

        {/* Organized Idea Results */}
        {organizedIdea && (
          <div className="col-span-1 lg:col-span-2 space-y-4 mt-2">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Brain className="w-5 h-5 text-accent" />
                Organized Brain Dump
              </h3>
              <Button variant="outline" size="sm" onClick={copyToClipboard} className="gap-2">
                <Copy className="w-4 h-4" /> Copy All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Summary */}
              <Card className="md:col-span-2 bg-accent/5 border-accent/20">
                <CardHeader className="py-4">
                  <CardTitle className="text-base flex items-center gap-2 text-accent">
                    <Sparkles className="w-4 h-4" /> Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-0 pb-4 text-sm leading-relaxed">
                  {organizedIdea.summary}
                </CardContent>
              </Card>

              {/* Action Items */}
              <Card>
                <CardHeader className="py-4 cursor-pointer" onClick={() => setExpandedSection(expandedSection === 'actions' ? null : 'actions')}>
                  <CardTitle className="text-base flex items-center justify-between">
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Action Items</span>
                    {expandedSection === 'actions' ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                  </CardTitle>
                </CardHeader>
                <AnimatePresence>
                  {expandedSection === 'actions' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <CardContent className="py-0 pb-4 pt-2">
                        <ul className="space-y-3">
                          {organizedIdea.actionItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <div className="w-4 h-4 mt-0.5 rounded border border-muted-foreground/30 flex-shrink-0" />
                              <div>
                                <span>{item.task}</span>
                                <div className="flex gap-2 mt-1">
                                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${item.priority === 'High' ? 'bg-rose-500/10 text-rose-500' : item.priority === 'Medium' ? 'bg-amber-500/10 text-amber-500' : 'bg-blue-500/10 text-blue-500'}`}>
                                    {item.priority} Priority
                                  </span>
                                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-secondary text-muted-foreground">
                                    {item.effort} Effort
                                  </span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>

              {/* Projects */}
              <Card>
                <CardHeader className="py-4 cursor-pointer" onClick={() => setExpandedSection(expandedSection === 'projects' ? null : 'projects')}>
                  <CardTitle className="text-base flex items-center justify-between">
                    <span className="flex items-center gap-2"><ListTodo className="w-4 h-4 text-blue-500" /> Projects & Features</span>
                    {expandedSection === 'projects' ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                  </CardTitle>
                </CardHeader>
                <AnimatePresence>
                  {expandedSection === 'projects' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <CardContent className="py-0 pb-4 pt-2">
                        <ul className="space-y-4">
                          {organizedIdea.projects.map((proj, i) => (
                            <li key={i} className="text-sm">
                              <div className="font-medium">{proj.name}</div>
                              <div className="text-muted-foreground mt-1 flex items-center gap-1.5">
                                <ArrowRight className="w-3 h-3" /> {proj.nextAction}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>

              {/* Next Steps & Risks */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="py-4">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-500" /> Next Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="py-0 pb-4">
                    <ul className="list-decimal pl-5 space-y-2 text-sm">
                      {organizedIdea.nextSteps.map((step, i) => (
                        <li key={i} className="text-muted-foreground"><span className="text-foreground">{step}</span></li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="py-4">
                    <CardTitle className="text-base flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-500" /> Risks & Blockers
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="py-0 pb-4">
                    <ul className="list-disc pl-5 space-y-2 text-sm text-rose-500/80">
                      {organizedIdea.risks.map((risk, i) => (
                        <li key={i}>{risk}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* AI Suggestions Panel */}
        <div className="space-y-4">
          <AISuggestions
            idea={idea}
            stack={stack}
            onAddFeature={handleAddFeature}
            addedFeatures={addedFeatures}
          />

          {/* Added Features Summary */}
          {addedFeatures.length > 0 && (
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-4">
              <h4 className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">
                {addedFeatures.length} Feature{addedFeatures.length !== 1 ? 's' : ''} Added
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                These features have been appended to your project idea. They&apos;ll be included in the generated prompts for each build step.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function NewProjectPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-muted-foreground flex items-center justify-center h-48">Loading form...</div>}>
      <NewProjectForm />
    </Suspense>
  )
}
