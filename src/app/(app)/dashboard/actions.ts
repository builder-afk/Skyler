'use server'

import { createClient } from '@/lib/supabase/server'

export async function getProjects() {
  const supabase = await createClient()

  // For guests, we don't query the database to prevent RLS errors
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return []
  }

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching projects', error)
    return []
  }

  return data
}

export async function createProject(formData: FormData) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { error: 'Please sign in first to create a project!' }
  }

  // Freemium Check (Basic)
  const { count } = await supabase
    .from('projects')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id)

  const { data: userData } = await supabase
    .from('users')
    .select('subscription_tier')
    .eq('id', user.id)
    .single()

  const isPro = userData?.subscription_tier === 'pro'
  
  if (!isPro && count && count >= 1) {
    return { error: 'Free plan is limited to 1 project. Please upgrade to Pro.' }
  }

  const name = formData.get('name') as string
  const idea = formData.get('idea') as string
  const stack = formData.get('stack') as string

  const { data, error } = await supabase
    .from('projects')
    .insert([
      {
        user_id: user.id,
        name,
        idea,
        stack,
        current_step: 1
      }
    ])
    .select()
    .single()

  if (error) {
    return { error: error.message }
  }

  return { project: data }
}
