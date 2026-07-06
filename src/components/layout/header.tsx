"use client"

import { MonitorSmartphone } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAppStore } from "@/store/projectStore"
import { signOut } from "next-auth/react"

export function Header() {
  const selectedTool = useAppStore((state) => state.selectedTool)
  const setSelectedTool = useAppStore((state) => state.setSelectedTool)

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          {/* Add breadcrumbs or page title here later */}
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger className={buttonVariants({ variant: "outline", size: "sm", className: "h-8" })}>
                <MonitorSmartphone className="mr-2 h-4 w-4" />
                {selectedTool}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSelectedTool("Cursor")}>
                  Cursor
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedTool("Windsurf")}>
                  Windsurf
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedTool("Antigravity")}>
                  Antigravity
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" className="h-8 text-muted-foreground" onClick={handleLogout}>
              Logout
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
