"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ApiKeysForm } from "@/components/settings/api-keys-form"
import { ProfileForm } from "@/components/settings/profile-form"
import { PreferencesForm } from "@/components/settings/preferences-form"
import { User, Key, Settings2, ShieldCheck, CreditCard } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
  return (
    <div className="container max-w-5xl py-8 space-y-8">
      <div>
        <h1 className="text-4xl font-display font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account, API providers, and global configurations.</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="bg-muted/30 p-1 mb-8 border border-border/50">
          <TabsTrigger value="profile" className="flex items-center gap-2 px-6">
            <User className="h-4 w-4" /> Profile
          </TabsTrigger>
          <TabsTrigger value="api" className="flex items-center gap-2 px-6">
            <Key className="h-4 w-4" /> API Providers
          </TabsTrigger>
          <TabsTrigger value="preferences" className="flex items-center gap-2 px-6">
            <Settings2 className="h-4 w-4" /> Preferences
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2 px-6">
            <CreditCard className="h-4 w-4" /> Billing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <ProfileForm />
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <ApiKeysForm />
          
          <Card className="bg-emerald-500/5 border-emerald-500/20 shadow-none">
            <CardHeader className="py-4">
              <div className="flex items-center gap-2 text-emerald-600">
                <ShieldCheck className="h-4 w-4" />
                <CardTitle className="text-sm font-semibold uppercase tracking-wider">Secure Storage</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="py-0 pb-4">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your API keys are stored securely in your browser's local storage and are only used for client-side generation requests. We never store these keys on our servers.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <PreferencesForm />
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card className="border-border/50 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-xl font-display">Subscription & Billing</CardTitle>
                  <CardDescription>Manage your plan and billing details.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 rounded-2xl bg-secondary/50 border border-border/50 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Current Plan</p>
                    <h3 className="text-2xl font-bold font-display">Pro Monthly</h3>
                    <p className="text-sm text-muted-foreground italic">Renews on June 24, 2026</p>
                  </div>
                  <div className="flex gap-3">
                     <button className="px-5 py-2 rounded-full border border-border hover:bg-secondary text-sm font-semibold transition-colors">Manage Sub</button>
                     <button className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg hover:shadow-primary/20 transition-all">Upgrade Plan</button>
                  </div>
               </div>
               
               <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Usage Statistics</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                     {[
                       { label: "AI Generations", value: "842 / 2,000", progress: 42 },
                       { label: "Active Projects", value: "12 / 50", progress: 24 },
                       { label: "Storage", value: "2.4 GB / 10 GB", progress: 24 },
                     ].map((stat, i) => (
                       <div key={i} className="p-4 rounded-xl border border-border/50 bg-background/50 space-y-3">
                          <p className="text-xs font-semibold text-muted-foreground">{stat.label}</p>
                          <p className="text-lg font-bold">{stat.value}</p>
                          <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                             <div className="h-full bg-primary" style={{ width: `${stat.progress}%` }}></div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
