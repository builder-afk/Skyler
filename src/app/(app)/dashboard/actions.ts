'use server'

import { auth } from '@/auth'
import { db } from '@/db'
import { projects, users } from '@/db/schema'
import { eq, desc } from 'drizzle-orm'

export async function getProjects() {
  const session = await auth()
  
  if (!session?.user?.id) {
    return []
  }

  try {
    const data = await db
      .select()
      .from(projects)
      .where(eq(projects.user_id, session.user.id))
      .orderBy(desc(projects.created_at))

    return data
  } catch (error) {
    console.error('Error fetching projects', error)
    return []
  }
}

export async function createProject(formData: FormData) {
  const session = await auth()
  
  if (!session?.user?.id) {
    return { error: 'Please sign in first to create a project!' }
  }

  try {
    const existingProjects = await db
      .select()
      .from(projects)
      .where(eq(projects.user_id, session.user.id))

    const count = existingProjects.length

    const userData = await db
      .select({ subscriptionTier: users.subscriptionTier })
      .from(users)
      .where(eq(users.id, session.user.id))
      .limit(1)

    const isPro = userData[0]?.subscriptionTier === 'pro'
    
    if (!isPro && count >= 1) {
      return { error: 'Free plan is limited to 1 project. Please upgrade to Pro.' }
    }

    const name = formData.get('name') as string
    const idea = formData.get('idea') as string
    const stack = formData.get('stack') as string

    const data = await db
      .insert(projects)
      .values({
        user_id: session.user.id,
        name,
        idea,
        stack,
        current_step: 1
      })
      .returning()

    if (!data || data.length === 0) {
      throw new Error('Failed to create project')
    }

    return { project: data[0] }
  } catch (error: any) {
    return { error: error.message || 'An error occurred' }
  }
}
