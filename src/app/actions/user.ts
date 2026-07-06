"use server"

import { auth } from "@/auth"
import { db } from "@/db"
import { users } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function getProfile() {
  const session = await auth()
  if (!session?.user) {
    return { user: null }
  }
  return { user: session.user }
}

export async function updateProfile(data: { name: string }) {
  const session = await auth()
  
  if (!session?.user?.id) {
    return { error: "Not authenticated" }
  }

  try {
    await db
      .update(users)
      .set({ name: data.name })
      .where(eq(users.id, session.user.id))

    return { success: true }
  } catch (error: any) {
    console.error("Error updating profile:", error)
    return { error: "Failed to update profile" }
  }
}
