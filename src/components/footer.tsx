import Link from "next/link"
import { Sparkles, MessageCircle, Code2, Globe, Mail } from "lucide-react"
import { Comfortaa } from "next/font/google"
import { cn } from "@/lib/utils"

const comfortaa = Comfortaa({ subsets: ["latin"] })

const footerLinks = {
  products: [
    { name: "AI App Builder", href: "#" },
    { name: "Prompt Marketplace", href: "#" },
    { name: "Agent Templates", href: "#" },
    { name: "Voice Assistants", href: "#" },
  ],
  resources: [
    { name: "Prompt Engineering Guide", href: "#" },
    { name: "Cursor Setup", href: "#" },
    { name: "Windsurf Integration", href: "#" },
    { name: "API Documentation", href: "#" },
  ],
  company: [
    { name: "About miracle", href: "#" },
    { name: "Become a Creator", href: "#" },
    { name: "Contact Support", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Creator Agreement", href: "#" },
  ],
}

const socialLinks = [
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Code2, href: "#", label: "Github" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
]

export function Footer() {
  return (
    <footer className="relative z-10 w-full bg-background/20 backdrop-blur-2xl border-t border-border/10 pt-20 pb-8 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Tagline - spans 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className={cn("text-2xl font-bold tracking-tighter text-foreground flex items-center gap-1 w-fit", comfortaa.className)}>
              miracle<Sparkles className="h-5 w-5 text-foreground mb-4 -ml-1" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building the next generation of AI Operating Systems. We help modern businesses build apps and generate optimized prompts for Cursor, Windsurf, and Antigravity.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors border border-border/50"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground tracking-wide text-sm mb-2">Products</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground tracking-wide text-sm mb-2">Resources</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground tracking-wide text-sm mb-2">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground tracking-wide text-sm mb-2">Legal</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} miracle. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-muted-foreground">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
