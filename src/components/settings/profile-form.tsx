"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createBrowserClient } from "@supabase/ssr"
import { User, Mail, UserCircle, Save } from "lucide-react"
import { toast } from "sonner"

export function ProfileForm() {
  const [user, setUser] = useState<any>(null)
  const [displayName, setDisplayName] = useState("")

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      if (user?.user_metadata?.display_name) {
        setDisplayName(user.user_metadata.display_name)
      }
    }
    getUser()
  }, [])

  const handleSave = async () => {
    const { error } = await supabase.auth.updateUser({
      data: { display_name: displayName }
    })
    
    if (error) {
      toast.error(error.message)
    } else {
      toast.success("Profile updated successfully")
    }
  }

  return (
    <Card className="border-border/50 shadow-lg bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <User className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-xl font-display">Account Profile</CardTitle>
            <CardDescription>Manage your public profile and account details.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center text-muted-foreground border-2 border-border/50 overflow-hidden shrink-0">
             {user?.email ? (
               <div className="text-2xl font-bold uppercase">{user.email[0]}</div>
             ) : (
               <UserCircle className="h-16 w-16 opacity-20" />
             )}
          </div>
          <div className="space-y-4 flex-1 w-full">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email Address</Label>
              <div className="relative">
                <Input
                  id="email"
                  value={user?.email || ""}
                  disabled
                  className="pl-10 bg-muted/30"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-[10px] text-muted-foreground">Email is managed by your authentication provider.</p>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="displayName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Display Name</Label>
              <Input
                id="displayName"
                placeholder="Your Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="bg-background/50"
              />
            </div>
          </div>
        </div>

        <Button onClick={handleSave} className="w-full sm:w-auto flex items-center gap-2">
          <Save className="h-4 w-4" /> Save Profile
        </Button>
      </CardContent>
    </Card>
  )
}
