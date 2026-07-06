import Link from "next/link"
import { Plus, Folder } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getProjects } from "./actions"
import { SavedPrompts } from "./saved-prompts"

export default async function DashboardPage() {
  const projects = await getProjects()

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Manage your generated projects and apps.</p>
        </div>
        <Link href="/dashboard/new" className={buttonVariants()}>
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 border border-dashed rounded-xl bg-muted/10 text-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Folder className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No projects yet</h3>
          <p className="text-sm text-muted-foreground max-w-sm mb-6">
            Get started by creating a new project. Describe your idea and let AI build the prompts for you.
          </p>
          <Link href="/dashboard/new" className={buttonVariants()}>
            <Plus className="mr-2 h-4 w-4" /> Create First Project
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription className="line-clamp-2">{project.idea}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-sm font-medium bg-secondary/50 inline-block px-2 py-1 rounded">
                  {project.stack}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center border-t p-4">
                <div className="text-xs text-muted-foreground">
                  Step {project.current_step} of 6
                </div>
                <Link href={`/project/${project.id}`} className={buttonVariants({ variant: "ghost", size: "sm" })}>
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-8 border-t pt-8">
        <SavedPrompts />
      </div>
    </div>
  )
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
