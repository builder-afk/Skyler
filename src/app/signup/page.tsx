import Link from "next/link"
import { signIn } from "@/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Layers } from 'lucide-react'
import { db } from "@/db"
import { users } from "@/db/schema"
import { eq } from "drizzle-orm"
import bcrypt from "bcryptjs"
import { redirect } from "next/navigation"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-muted/40">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold tracking-tight flex items-center justify-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Layers className="h-6 w-6 text-primary" />
              Skyler
            </Link>
          </CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form
            action={async () => {
              "use server"
              await signIn("google", { redirectTo: "/dashboard" })
            }}
          >
            <Button className="w-full" type="submit" variant="outline">
              <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              Sign up with Google
            </Button>
          </form>

          <form
            action={async () => {
              "use server"
              await signIn("github", { redirectTo: "/dashboard" })
            }}
          >
            <Button className="w-full" type="submit" variant="outline">
              <svg className="mr-2 h-4 w-4" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              Sign up with GitHub
            </Button>
          </form>
          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with email
              </span>
            </div>
          </div>
          <form
            className="flex flex-col gap-3"
            action={async (formData: FormData) => {
              "use server"
              const email = formData.get("email") as string
              const password = formData.get("password") as string
              const name = formData.get("name") as string
              const mobileNumber = formData.get("mobileNumber") as string
              const profession = formData.get("profession") as string
              if (!email || !password || !name) return
              
              // check if user exists
              const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1)
              if (existingUser && existingUser.length > 0) {
                // user already exists, could return an error state but here we'll redirect to login
                redirect("/login?error=EmailInUse")
              }

              // hash password and create user
              const hashedPassword = await bcrypt.hash(password, 10)
              await db.insert(users).values({
                email,
                password: hashedPassword,
                name: name,
                mobileNumber: mobileNumber || null,
                profession: profession || null,
              })

              // automatically sign them in
              try {
                await signIn("credentials", { email, password, redirectTo: "/dashboard" })
              } catch (error: unknown) {
                const err = error as { name?: string, type?: string };
                if (err.name === "AuthError" || err.name === "CallbackRouteError" || err.type === "CallbackRouteError") {
                  redirect("/signup?error=SignupFailed")
                }
                throw error
              }
            }}
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" htmlFor="name">Name</label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                required 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                placeholder="John Doe" 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" htmlFor="mobileNumber">Mobile Number</label>
              <input 
                id="mobileNumber" 
                name="mobileNumber" 
                type="tel" 
                required 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                placeholder="+1 234 567 8900" 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" htmlFor="profession">Profession</label>
              <select 
                id="profession" 
                name="profession" 
                required 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select your profession</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="product_manager">Product Manager</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
                <option value="founder">Founder / Entrepreneur</option>
                <option value="student">Student</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" htmlFor="email">Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                placeholder="you@example.com" 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" htmlFor="password">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <Button className="w-full mt-2" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="underline">
              Sign in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
