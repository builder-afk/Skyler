"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, LayoutDashboard, Plus, Settings, LayoutTemplate, Workflow, Layers, FileText, ImageIcon, PackageSearch, Video, AppWindow, Wand2, ShoppingBag, Users, MessageSquare, Camera, PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    if (pathname.startsWith("/marketplace")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsCollapsed(true)
    }
  }, [pathname])

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Startup Ideas",
      icon: Globe,
      href: "/problems",
      active: pathname === "/problems",
    },
    {
      label: "Workflows",
      icon: Workflow,
      href: "/workflows",
      active: pathname.startsWith("/workflows"),
    },
    {
      label: "Templates",
      icon: LayoutTemplate,
      href: "/templates",
      active: pathname.startsWith("/templates"),
    },
    {
      label: "App Templates",
      icon: AppWindow,
      href: "/app-templates",
      active: pathname.startsWith("/app-templates"),
    },

    {
      label: "Image Prompts",
      icon: ImageIcon,
      href: "/image-prompts",
      active: pathname.startsWith("/image-prompts"),
    },
    {
      label: "Video Prompts",
      icon: Video,
      href: "/video-prompts",
      active: pathname.startsWith("/video-prompts"),
    },
    {
      label: "Multimedia Suite",
      icon: Wand2,
      href: "/multimedia-suite",
      active: pathname.startsWith("/multimedia-suite"),
    },
    {
      label: "Marketplace",
      icon: ShoppingBag,
      href: "/marketplace",
      active: pathname.startsWith("/marketplace"),
    },
    {
      label: "Product Prompts",
      icon: PackageSearch,
      href: "/product-prompts",
      active: pathname.startsWith("/product-prompts"),
    },
    {
      label: "Team Workspace",
      icon: Users,
      href: "/team-workspace",
      active: pathname.startsWith("/team-workspace"),
    },
    {
      label: "LinkedIn Generator",
      icon: MessageSquare,
      href: "/linkedin-generator",
      active: pathname.startsWith("/linkedin-generator"),
    },
    {
      label: "Instagram Generator",
      icon: Camera,
      href: "/instagram-generator",
      active: pathname.startsWith("/instagram-generator"),
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
      active: pathname === "/dashboard/settings",
    },
  ]

  return (
    <div className={cn("flex flex-col h-full border-r bg-muted/20 py-6 transition-all duration-300 relative", isCollapsed ? "w-[72px] px-2 items-center" : "w-64 px-4")}>
      <div className={cn("flex items-center mb-8", isCollapsed ? "justify-center px-0 mt-2" : "justify-between px-2")}>
        {!isCollapsed ? (
          <>
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="h-8 w-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-sm shrink-0">
                <Layers className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">Skyler</span>
            </Link>
            <button 
              onClick={() => setIsCollapsed(true)}
              className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-secondary"
            >
              <PanelLeftClose className="w-4 h-4" />
            </button>
          </>
        ) : (
          <button 
            onClick={() => setIsCollapsed(false)}
            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-secondary bg-secondary/50 border border-border/50 shadow-sm"
          >
            <PanelLeftOpen className="w-5 h-5" />
          </button>
        )}
      </div>
      
      <div className="space-y-1 w-full overflow-y-auto no-scrollbar pb-20">
        <div className={cn("mb-4", isCollapsed ? "px-0" : "px-2")}>
          <Link
            href="/dashboard/new"
            className={cn(
              buttonVariants({ variant: "default" }),
              "justify-start font-semibold shadow-sm w-full",
              isCollapsed ? "px-0 justify-center" : ""
            )}
            title={isCollapsed ? "Create your first project" : undefined}
          >
            <Plus className={cn("h-4 w-4", isCollapsed ? "mr-0" : "mr-2")} />
            {!isCollapsed && "Create your first project"}
          </Link>
        </div>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              buttonVariants({ variant: route.active ? "secondary" : "ghost" }),
              "w-full",
              isCollapsed ? "justify-center px-0 py-2 h-10" : "justify-start",
              route.active ? "font-semibold" : ""
            )}
            title={isCollapsed ? route.label : undefined}
          >
            <route.icon className={cn("h-4 w-4 shrink-0", isCollapsed ? "mr-0" : "mr-2")} />
            {!isCollapsed && <span className="truncate">{route.label}</span>}
          </Link>
        ))}
      </div>
    </div>
  )
}
