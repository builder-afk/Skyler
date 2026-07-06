'use server'

import { db } from '@/db'
import { projects, prompts } from '@/db/schema'
import { eq, and, asc } from 'drizzle-orm'
import { generatePrompt, AITool } from '@/lib/prompts/engine'
import { revalidatePath } from 'next/cache'

export async function getProjectData(projectId: string) {
  try {
    const projectResult = await db
      .select()
      .from(projects)
      .where(eq(projects.id, projectId))
      .limit(1)

    const project = projectResult[0]

    if (!project) {
      if (projectId === '1') {
        return {
          project: {
            id: projectId,
            user_id: 'mock_user_id',
            name: 'Demo Project',
            idea: 'A full-stack fitness app with workout tracking, social leaderboards, and AI coaching.',
            stack: 'saas-nextjs',
            current_step: 1,
            created_at: new Date()
          },
          prompts: []
        }
      }
      return { error: 'Project not found' }
    }

    const projectPrompts = await db
      .select()
      .from(prompts)
      .where(eq(prompts.project_id, projectId))
      .orderBy(asc(prompts.step))

    return { project, prompts: projectPrompts }
  } catch (error: any) {
    if (error.message?.includes('uuid') || projectId === '1') {
      return {
        project: {
          id: projectId,
          user_id: 'mock_user_id',
          name: 'Demo Project',
          idea: 'A full-stack fitness app with workout tracking, social leaderboards, and AI coaching.',
          stack: 'saas-nextjs',
          current_step: 1,
          created_at: new Date()
        },
        prompts: []
      }
    }
    return { error: error.message || 'Error fetching project data' }
  }
}

export async function generateAndSavePrompt(projectId: string, step: number, tool: string) {
  try {
    const projectResult = await db
      .select()
      .from(projects)
      .where(eq(projects.id, projectId))
      .limit(1)

    const project = projectResult[0]
    if (!project) return { error: 'Project not found' }

    const existingResult = await db
      .select()
      .from(prompts)
      .where(and(
        eq(prompts.project_id, projectId),
        eq(prompts.step, step),
        eq(prompts.tool, tool)
      ))
      .limit(1)

    const existing = existingResult[0]

    let content = ""
    if (existing) {
      content = existing.content
    } else {
      content = generatePrompt({
        step,
        idea: project.idea,
        stack: project.stack,
        tool: tool as AITool
      })

      await db.insert(prompts).values({
        project_id: projectId,
        step,
        tool,
        content
      })
    }

    revalidatePath(`/project/${projectId}`)
    return { content }
  } catch (error: any) {
    return { error: error.message || 'Error generating prompt' }
  }
}

export async function advanceStep(projectId: string, currentStep: number) {
  if (currentStep >= 6) return { success: true }

  try {
    await db
      .update(projects)
      .set({ current_step: currentStep + 1 })
      .where(eq(projects.id, projectId))

    revalidatePath(`/project/${projectId}`)
    return { success: true }
  } catch (error: any) {
    return { error: error.message || 'Error advancing step' }
  }
}

export async function savePromptContent(projectId: string, step: number, tool: string, content: string) {
  try {
    await db
      .update(prompts)
      .set({ content })
      .where(and(
        eq(prompts.project_id, projectId),
        eq(prompts.step, step),
        eq(prompts.tool, tool)
      ))

    revalidatePath(`/project/${projectId}`)
    return { success: true }
  } catch (error: any) {
    return { error: error.message || 'Error saving prompt content' }
  }
}
