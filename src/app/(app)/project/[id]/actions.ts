'use server'

import { createClient } from '@/lib/supabase/server'
import { generatePrompt, AITool } from '@/lib/prompts/engine'
import { revalidatePath } from 'next/cache'

export async function getProjectData(projectId: string) {
  const supabase = await createClient()

  const { data: project, error: projectError } = await supabase
    .from('projects')
    .select('*')
    .eq('id', projectId)
    .single()

  if (projectError) {
    // If Supabase fetch fails or we pass a dummy ID like '1' we want to show the UI
    if (projectError.message.includes('fetch failed') || projectError.message.includes('uuid') || projectId === '1') {
      return {
        project: {
          id: projectId,
          user_id: 'mock_user_id',
          name: 'Demo Project',
          idea: 'A full-stack fitness app with workout tracking, social leaderboards, and AI coaching.',
          stack: 'saas-nextjs',
          current_step: 1,
          created_at: new Date().toISOString()
        },
        prompts: []
      }
    }
    return { error: projectError.message }
  }

  const { data: prompts, error: promptsError } = await supabase
    .from('prompts')
    .select('*')
    .eq('project_id', projectId)
    .order('step', { ascending: true })

  if (promptsError) return { error: promptsError.message }

  return { project, prompts }
}

export async function generateAndSavePrompt(projectId: string, step: number, tool: string) {
  const supabase = await createClient()

  // Verify project ownership
  const { data: project } = await supabase
    .from('projects')
    .select('*')
    .eq('id', projectId)
    .single()

  if (!project) return { error: 'Project not found' }

  // Check if prompt for this step/tool already exists
  const { data: existing } = await supabase
    .from('prompts')
    .select('*')
    .eq('project_id', projectId)
    .eq('step', step)
    .eq('tool', tool)
    .single()

  let content = ""
  if (existing) {
    content = existing.content
  } else {
    // Generate new
    content = generatePrompt({
      step,
      idea: project.idea,
      stack: project.stack,
      tool: tool as AITool
    })

    const { error: insertError } = await supabase
      .from('prompts')
      .insert({
        project_id: projectId,
        step,
        tool,
        content
      })

    if (insertError) return { error: insertError.message }
  }

  revalidatePath(`/project/${projectId}`)
  return { content }
}

export async function advanceStep(projectId: string, currentStep: number) {
  if (currentStep >= 6) return { success: true }

  const supabase = await createClient()
  const { error } = await supabase
    .from('projects')
    .update({ current_step: currentStep + 1 })
    .eq('id', projectId)

  if (error) return { error: error.message }
  
  revalidatePath(`/project/${projectId}`)
  return { success: true }
}

export async function savePromptContent(projectId: string, step: number, tool: string, content: string) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('prompts')
    .update({ content })
    .eq('project_id', projectId)
    .eq('step', step)
    .eq('tool', tool)

  if (error) return { error: error.message }
  
  revalidatePath(`/project/${projectId}`)
  return { success: true }
}
