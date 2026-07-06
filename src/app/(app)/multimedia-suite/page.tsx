"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Video, ImageIcon, Box, Link2, Copy, Check, Code,
  Sparkles, ArrowRight, Eye, Clapperboard, Palette,
  Layers, Wand2, Camera, Monitor, Smartphone, X
} from 'lucide-react'

type Prompt = {
  title: string
  desc: string
  tool: string
  prompt: string
  tags: string[]
  chainTo?: string
}

type Suite = {
  id: string
  label: string
  icon: React.ReactNode
  color: string
  gradient: string
  prompts: Prompt[]
}

const SUITES: Suite[] = [
  {
    id: "image",
    label: "Image Generation",
    icon: <ImageIcon className="w-5 h-5" />,
    color: "text-violet-500",
    gradient: "from-violet-500/20 to-fuchsia-500/20",
    prompts: [
      {
        title: "App Hero Illustration",
        desc: "Generate stunning hero illustrations for landing pages with depth, lighting, and brand-aligned color palettes.",
        tool: "Midjourney",
        prompt: "A premium SaaS landing page hero illustration for a [APP_TYPE] app. Isometric 3D style with soft gradients in [COLOR_PALETTE]. Floating UI elements, glassmorphism cards, and subtle particle effects. Clean negative space, 4K resolution, professional product design aesthetic. --ar 16:9 --v 6 --style raw",
        tags: ["hero", "landing-page", "isometric"],
        chainTo: "video"
      },
      {
        title: "App Icon & Logo Suite",
        desc: "Create cohesive app icon sets for iOS, Android, and web with adaptive icon layers.",
        tool: "Midjourney",
        prompt: "A modern app icon for a [APP_TYPE] application. Minimalist symbol representing [CONCEPT]. Rounded super-ellipse shape, vibrant gradient from [COLOR_1] to [COLOR_2], subtle inner shadow, clean vector style. No text, centered composition. White or transparent background. --ar 1:1 --v 6",
        tags: ["icon", "branding", "logo"],
        chainTo: "mockup"
      },
      {
        title: "Onboarding Illustration Set",
        desc: "Design a cohesive set of onboarding illustrations that guide users through app features.",
        tool: "DALL-E",
        prompt: "Create a flat illustration for app onboarding screen #[NUMBER] of 4. Theme: [FEATURE_NAME]. Style: modern flat design with [COLOR_PALETTE] palette, friendly characters with simple geometric shapes, clean lines, no text. The scene shows a person [ACTION_DESCRIPTION]. Consistent art style across all screens. 1024x1024.",
        tags: ["onboarding", "illustration", "flat-design"]
      },
      {
        title: "Feature Screenshot Enhancement",
        desc: "Transform plain screenshots into polished marketing visuals with device frames and backgrounds.",
        tool: "Midjourney",
        prompt: "A premium app screenshot presentation mockup. [DEVICE_TYPE] floating at a slight angle on a gradient background from [COLOR_1] to [COLOR_2]. Soft ambient shadows, subtle grid pattern overlay, bokeh light particles in background. Ultra clean, Apple-style marketing aesthetic. --ar 4:5 --v 6 --style raw",
        tags: ["screenshot", "marketing", "device-frame"],
        chainTo: "video"
      },
      {
        title: "Abstract Data Visualization Art",
        desc: "Create artistic data visualization backgrounds for dashboards and analytics screens.",
        tool: "Stable Diffusion",
        prompt: "Abstract data visualization art piece. Flowing lines representing [DATA_TYPE], nodes and connections forming an organic network pattern. Color palette: [COLORS] on dark background. Bioluminescent glow effects, depth of field, 8K resolution. Style: intersection of data science and digital art. Negative prompt: text, numbers, charts, graphs, UI elements",
        tags: ["data-viz", "abstract", "background"]
      },
      {
        title: "Character & Mascot Design",
        desc: "Design a friendly brand mascot or character for your app's personality.",
        tool: "Midjourney",
        prompt: "A friendly tech mascot character for a [APP_TYPE] app called [APP_NAME]. [ANIMAL/ROBOT/ABSTRACT] design, wearing [ACCESSORY]. Expressive face, [COLOR_PALETTE] colors, clean vector art style suitable for multiple poses. Front-facing, white background, character design sheet energy. --ar 1:1 --v 6 --style raw",
        tags: ["mascot", "character", "branding"]
      }
    ]
  },
  {
    id: "video",
    label: "Video Generation",
    icon: <Video className="w-5 h-5" />,
    color: "text-rose-500",
    gradient: "from-rose-500/20 to-orange-500/20",
    prompts: [
      {
        title: "App Launch Trailer",
        desc: "Generate a cinematic launch trailer showing your app in action with dramatic reveals.",
        tool: "Sora",
        prompt: "A cinematic product launch video for a [APP_TYPE] app. Camera slowly pushes into a sleek [DEVICE] sitting on a minimal desk. The screen illuminates showing the app interface. Smooth camera orbit around the device, UI elements animate on screen. Ambient lighting shifts from cool blue to warm golden. Depth of field, lens flares, 4K cinematic quality. Duration: 10 seconds.",
        tags: ["launch", "cinematic", "trailer"]
      },
      {
        title: "Feature Walkthrough Animation",
        desc: "Create smooth animated walkthroughs of key app features with transitions.",
        tool: "Runway",
        prompt: "A smooth UI animation walkthrough of a [FEATURE_NAME] feature. Screen recording style: finger taps on [BUTTON], interface transitions with spring animations, data loads with skeleton shimmer then populates. Camera follows the user flow naturally. Soft depth blur on inactive areas. Clean white/dark interface, 60fps motion. Duration: 8 seconds.",
        tags: ["walkthrough", "UI", "animation"]
      },
      {
        title: "Social Media App Promo",
        desc: "Generate short-form video promos optimized for Instagram Reels, TikTok, and YouTube Shorts.",
        tool: "Sora",
        prompt: "A vertical 9:16 social media promo for a [APP_TYPE] app. Quick cuts: 1) Phone held in hand against [BACKGROUND] 2) Close-up of app interface with smooth scrolling 3) Key feature highlight with zoom effect 4) Logo reveal with particle effect. Trendy, fast-paced editing. Vibrant colors, motion blur on transitions. Duration: 6 seconds.",
        tags: ["social", "promo", "vertical"],
      },
      {
        title: "Testimonial Background Loop",
        desc: "Create ambient looping backgrounds for testimonial sections and review displays.",
        tool: "Runway",
        prompt: "A seamlessly looping abstract background video. Soft gradient mesh animation flowing between [COLOR_1], [COLOR_2], and [COLOR_3]. Subtle floating particles with gentle bokeh. Very slow, calming movement. Perfect for overlaying text testimonials. Clean, minimal, premium feel. 1920x1080, 24fps. Duration: 5 seconds, seamless loop.",
        tags: ["loop", "background", "ambient"]
      },
      {
        title: "3D Product Rotation",
        desc: "Generate 360° rotation videos of physical or digital products with studio lighting.",
        tool: "Sora",
        prompt: "A smooth 360-degree rotation of a [PRODUCT] on a seamless white/dark studio backdrop. Professional three-point lighting with soft shadows. Product slowly rotates on a turntable, camera at eye level. Material textures are sharp and realistic. Subtle reflection on surface. Studio product photography quality. Duration: 8 seconds, full rotation.",
        tags: ["3D", "product", "rotation"]
      }
    ]
  },
  {
    id: "mockup",
    label: "Product Mockups",
    icon: <Box className="w-5 h-5" />,
    color: "text-emerald-500",
    gradient: "from-emerald-500/20 to-teal-500/20",
    prompts: [
      {
        title: "Multi-Device Showcase",
        desc: "Create realistic multi-device mockups showing your app across phone, tablet, and laptop.",
        tool: "Midjourney",
        prompt: "A premium multi-device mockup showcasing a [APP_TYPE] app. MacBook Pro center, iPad right, iPhone left — arranged in a floating composition. All screens showing cohesive UI in [LIGHT/DARK] mode. Soft gradient background from [COLOR_1] to [COLOR_2]. Studio lighting, subtle reflections, depth of field. Apple-style product photography. --ar 16:9 --v 6",
        tags: ["multi-device", "showcase", "responsive"],
        chainTo: "video"
      },
      {
        title: "App Store Screenshot Set",
        desc: "Generate complete app store screenshot sets with device frames and marketing copy areas.",
        tool: "DALL-E",
        prompt: "An App Store screenshot mockup for a [APP_TYPE] app. [DEVICE] frame (iPhone 15 Pro, Space Black) with the app UI visible on screen. Clean background gradient [COLOR_1] to [COLOR_2]. Space above device for headline text. Professional marketing material style. Screen shows [FEATURE_NAME] feature. 1290x2796 pixel ratio.",
        tags: ["app-store", "screenshot", "marketing"]
      },
      {
        title: "3D Product Box Render",
        desc: "Create 3D software box renders for digital products, SaaS tools, or course materials.",
        tool: "Midjourney",
        prompt: "A realistic 3D software product box render for [PRODUCT_NAME]. Glossy box with [COLOR_PALETTE] gradient cover design. Front face shows app interface screenshot, side shows feature list. Professional 3D rendering with studio lighting, soft shadow beneath, slight angle to show depth. Transparent background. --ar 4:5 --v 6 --style raw",
        tags: ["3D-render", "product-box", "SaaS"]
      },
      {
        title: "Lifestyle Context Mockup",
        desc: "Place your app in real-world context — coffee shop, office desk, or commute scenarios.",
        tool: "Midjourney",
        prompt: "A lifestyle mockup photo of a [DEVICE] displaying a [APP_TYPE] app. Setting: [ENVIRONMENT] (e.g., modern coffee shop, minimalist desk, cozy couch). Natural lighting, shallow depth of field focused on the screen. Realistic photography style, warm tones. The environment suggests [TARGET_AUDIENCE] lifestyle. Canon EOS R5 aesthetic. --ar 3:2 --v 6",
        tags: ["lifestyle", "context", "photography"]
      },
      {
        title: "Branded Merch & Swag Mockup",
        desc: "Visualize your app brand on merchandise — t-shirts, stickers, mugs, and notebooks.",
        tool: "Midjourney",
        prompt: "A flat-lay product mockup of branded merchandise for [APP_NAME]. Items arranged on a [COLOR] surface: white t-shirt with logo, laptop sticker sheet, matte black mug with icon, notebook with brand colors. Clean overhead photography, soft even lighting, no harsh shadows. Startup swag aesthetic. --ar 1:1 --v 6",
        tags: ["merch", "branding", "swag"]
      }
    ]
  },
  {
    id: "chain",
    label: "Cross-Media Chains",
    icon: <Link2 className="w-5 h-5" />,
    color: "text-amber-500",
    gradient: "from-amber-500/20 to-yellow-500/20",
    prompts: [
      {
        title: "Hero Image → Launch Video",
        desc: "Chain: Generate a hero image, then animate it into a cinematic launch video with camera movement.",
        tool: "Midjourney → Sora",
        prompt: "STEP 1 (Midjourney): A premium SaaS hero illustration for [APP_NAME]. Isometric floating UI cards, glassmorphism, [COLOR_PALETTE] gradient, 4K. --ar 16:9 --v 6\n\nSTEP 2 (Sora — use Step 1 output as input): Animate this illustration. Camera slowly dollies forward into the scene, UI cards gently float with parallax depth. Subtle particle effects activate. Elements illuminate sequentially left to right. Cinematic depth of field. 10 seconds.",
        tags: ["chain", "image-to-video", "hero"]
      },
      {
        title: "Icon → 3D Spin → App Intro",
        desc: "Chain: Design a flat icon, render it in 3D, then create a spinning logo reveal video.",
        tool: "Midjourney → Sora",
        prompt: "STEP 1 (Midjourney): A minimalist app icon for [APP_NAME]. Symbol: [CONCEPT]. Gradient [COLOR_1] to [COLOR_2], rounded square, no text. --ar 1:1 --v 6\n\nSTEP 2 (Sora — use Step 1 output): Transform this 2D icon into a 3D object. The icon materializes from particles, rotates slowly in 3D space with metallic/glass material. Studio lighting with rim light. Settles into final position with a subtle glow pulse. Dark background. 6 seconds.",
        tags: ["chain", "icon-to-3D", "logo-reveal"]
      },
      {
        title: "Screenshot → Device Mockup → Promo",
        desc: "Chain: Enhance a screenshot into a device mockup, then animate it into a social promo clip.",
        tool: "DALL-E → Runway",
        prompt: "STEP 1 (DALL-E): Place this app screenshot into an iPhone 15 Pro frame. Floating on a gradient from [COLOR_1] to [COLOR_2]. Marketing style with space for text above.\n\nSTEP 2 (Runway — use Step 1 output): Animate the device mockup. Phone slides in from bottom with spring ease, screen content scrolls smoothly, subtle light reflections sweep across the glass. Background gradient slowly shifts. 9:16 vertical for social. 6 seconds.",
        tags: ["chain", "screenshot-to-video", "social"]
      },
      {
        title: "Mascot → Sticker Pack → Animation",
        desc: "Chain: Design a mascot, create sticker variations, then animate key expressions.",
        tool: "Midjourney → Runway",
        prompt: "STEP 1 (Midjourney): A friendly mascot for [APP_NAME]. [ANIMAL/ROBOT] character, [COLOR_PALETTE], expressive face, vector style, white background. --v 6\n\nSTEP 2 (Midjourney): Using the same character, create 4 emoji-style expressions: happy, thinking, celebrating, surprised. Consistent style, grid layout. --v 6\n\nSTEP 3 (Runway — use celebrating pose): Animate the mascot doing a celebration dance. Bouncy, playful movement. Confetti particles appear. Loopable, 3 seconds.",
        tags: ["chain", "mascot-to-animation", "sticker"]
      },
      {
        title: "Wireframe → Polished UI → Video Tour",
        desc: "Chain: Sketch a wireframe prompt, generate polished UI, then create an animated walkthrough.",
        tool: "DALL-E → Sora",
        prompt: "STEP 1 (DALL-E): A high-fidelity mobile app screen for [SCREEN_NAME]. [DARK/LIGHT] mode, modern design with [COLOR_PALETTE]. Shows [FEATURE_DESCRIPTION]. Clean typography, proper spacing, realistic data. iPhone frame.\n\nSTEP 2 (Sora — use Step 1 as starting frame): Create a UI interaction video. A finger appears and taps [BUTTON_NAME], the interface responds with smooth transitions — elements slide, fade, and scale. Realistic touch interactions, 60fps feel. 8 seconds.",
        tags: ["chain", "wireframe-to-video", "UI-tour"]
      }
    ]
  }
]

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all">
      {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? "Copied!" : "Copy"}
    </button>
  )
}

function ChainBadge({ chainTo }: { chainTo: string }) {
  const labels: Record<string, string> = { video: "→ Video", mockup: "→ Mockup", image: "→ Image" }
  return (
    <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
      <Link2 className="w-3 h-3" /> Chain {labels[chainTo] || chainTo}
    </span>
  )
}

function PreviewModal({ prompt, onClose }: { prompt: Prompt | null, onClose: () => void }) {
  if (!prompt) return null
  const isChain = prompt.prompt.includes("STEP 1")
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()} className="w-full max-w-2xl bg-background border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        <div className="p-6 border-b border-border/50 flex items-start justify-between shrink-0">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{prompt.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{prompt.desc}</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-secondary/80 text-muted-foreground"><X className="w-4 h-4" /></button>
        </div>
        <div className="p-6 overflow-y-auto flex-1">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {isChain ? "Multi-Step Chain" : "Prompt Template"}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">{prompt.tool}</span>
            </div>
            <CopyBtn text={prompt.prompt} />
          </div>
          <div className="bg-secondary/30 border border-border/50 rounded-xl p-4 font-mono text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap">
            {prompt.prompt}
          </div>
          <div className="mt-4 flex items-center gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <p className="text-sm text-foreground/80">
              Replace <code className="px-1.5 py-0.5 rounded bg-secondary text-primary font-mono text-xs">[PLACEHOLDERS]</code> with your project details.
              {isChain && " Run each step sequentially, using the output of the previous step as input."}
            </p>
          </div>
        </div>
        <div className="px-6 pb-6 flex gap-3 shrink-0">
          <button onClick={onClose} className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium bg-secondary/50 hover:bg-secondary text-foreground transition-colors">Close</button>
          <button onClick={() => navigator.clipboard.writeText(prompt.prompt)}
            className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            <Copy className="w-4 h-4" /> Copy & Use
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function MultimediaSuitePage() {
  const [activeSuite, setActiveSuite] = useState("image")
  const [preview, setPreview] = useState<Prompt | null>(null)

  const currentSuite = SUITES.find(s => s.id === activeSuite)!

  return (
    <div className="w-full max-w-[1200px] mx-auto py-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-display font-semibold tracking-tight mb-2 flex items-center gap-3">
            <Wand2 className="w-8 h-8 text-primary" />
            Multimedia Prompt Suite
          </h1>
          <p className="text-muted-foreground text-sm font-medium max-w-xl">
            Bundled generators for images, videos, and product mockups — with cross-media chaining to turn a single idea into a full visual asset pipeline.
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          <Layers className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-primary">{SUITES.reduce((a, s) => a + s.prompts.length, 0)} Prompts · 4 Categories</span>
        </div>
      </div>

      {/* Suite Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {SUITES.map(suite => (
          <button
            key={suite.id}
            onClick={() => setActiveSuite(suite.id)}
            className={`flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 text-left ${
              activeSuite === suite.id
                ? `bg-gradient-to-br ${suite.gradient} border-primary/30 shadow-lg shadow-primary/5`
                : 'bg-background border-border/60 hover:border-primary/20 hover:shadow-md'
            }`}
          >
            <div className={`p-2 rounded-xl ${activeSuite === suite.id ? 'bg-background/80' : 'bg-secondary/40'} ${suite.color}`}>
              {suite.icon}
            </div>
            <div>
              <p className={`text-sm font-semibold ${activeSuite === suite.id ? 'text-foreground' : 'text-foreground/80'}`}>{suite.label}</p>
              <p className="text-[11px] text-muted-foreground">{suite.prompts.length} prompts</p>
            </div>
          </button>
        ))}
      </div>

      {/* Prompts Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSuite}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            initial="hidden" animate="show"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-16"
          >
            {currentSuite.prompts.map((p, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } } }}
                className="group/card flex flex-col bg-background border border-border/60 hover:border-primary/40 rounded-2xl p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${currentSuite.gradient} opacity-0 group-hover/card:opacity-100 transition-opacity`} />

                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-[15px] leading-snug text-foreground pr-2">{p.title}</h3>
                  <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-secondary/60 text-muted-foreground">
                    {p.tool}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map(t => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-secondary/60 text-muted-foreground font-medium">{t}</span>
                  ))}
                  {p.chainTo && <ChainBadge chainTo={p.chainTo} />}
                </div>

                <div className="flex items-center gap-2 mt-auto pt-2 border-t border-border/30">
                  <CopyBtn text={p.prompt} />
                  <button onClick={() => setPreview(p)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/10 hover:bg-primary/20 text-primary transition-all">
                    <Eye className="w-3.5 h-3.5" /> Preview
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Preview Modal */}
      <AnimatePresence>
        {preview && <PreviewModal prompt={preview} onClose={() => setPreview(null)} />}
      </AnimatePresence>
    </div>
  )
}
