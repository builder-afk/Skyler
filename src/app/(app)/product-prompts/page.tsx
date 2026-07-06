import { PackageSearch, Sparkles } from "lucide-react"

export default function ProductPromptsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center max-w-2xl mx-auto px-4">
      <div className="relative mb-8">
        <div className="absolute -inset-1 rounded-full blur-xl bg-accent/20 opacity-70 animate-pulse" />
        <div className="relative h-24 w-24 rounded-2xl bg-secondary/30 border border-foreground/10 flex items-center justify-center backdrop-blur-sm">
          <PackageSearch className="h-10 w-10 text-accent" />
          <Sparkles className="absolute -top-3 -right-3 h-6 w-6 text-emerald-500 animate-bounce" />
        </div>
      </div>
      
      <h1 className="text-4xl font-display font-bold text-foreground mb-4">
        Product Prompts
      </h1>
      <h2 className="text-xl font-medium text-foreground/80 mb-6 uppercase tracking-widest text-accent">
        Coming Soon
      </h2>
      
      <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
        We're crafting an exclusive library of prompts precisely tuned to generate comprehensive PRDs, feature specifications, and agile roadmaps. 
        Soon, you'll be able to shape entire product lifecycles in seconds using our curated templates.
      </p>

      <div className="flex gap-3">
        <div className="h-2 w-2 rounded-full bg-accent animate-ping delay-75" />
        <div className="h-2 w-2 rounded-full bg-accent animate-ping delay-150" />
        <div className="h-2 w-2 rounded-full bg-accent animate-ping delay-300" />
      </div>
    </div>
  )
}
