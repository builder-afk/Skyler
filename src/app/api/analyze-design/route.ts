import { NextResponse } from "next/server"

// Mock delay to simulate AI vision model processing
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function generateMockAnalysis() {
  return {
    styleSummary:
      "A refined, editorial-grade visual aesthetic characterized by bold typographic hierarchy, generous whitespace, and a warm-neutral color scheme. The overall mood is confident yet approachable — a balance of modern minimalism with intentional craft details. Subtle grain textures and soft shadows add depth without clutter.",

    designKeywords: [
      "Minimalist",
      "Editorial",
      "Warm Neutrals",
      "Sans-Serif Typography",
      "High Contrast",
      "Whitespace-Heavy",
      "Modern",
      "Clean Grid",
      "Soft Shadows",
      "Rounded Corners",
      "Confident",
      "Professional",
      "Calm Palette",
      "Intentional Spacing",
      "Subtle Grain",
    ],

    keyElements: {
      colorPalette: [
        { name: "Ink Black", hex: "#1A1A2E" },
        { name: "Warm Ivory", hex: "#FAF5EF" },
        { name: "Accent Indigo", hex: "#6366F1" },
        { name: "Soft Gray", hex: "#E5E5E5" },
        { name: "Muted Stone", hex: "#A1A1AA" },
        { name: "Warm Peach", hex: "#FBBF8B" },
      ],
      typography:
        "Primary: A modern geometric sans-serif (similar to Inter or Satoshi) used at large display sizes with tight letter-spacing for headlines. Body text uses the same family at regular weight with generous line-height (1.6–1.7) for readability. Strong typographic hierarchy with 3–4 distinct size steps.",
      layout:
        "Clean 12-column grid with asymmetric hero sections. Content is left-aligned with right-side negative space creating visual tension. Cards and containers use generous internal padding (24–32px) and subtle 1px borders. Vertical rhythm is consistent with 8px base unit.",
      spacing:
        "Very generous — section padding of 80–120px vertically. Component spacing follows a strict 8/16/24/32/48px scale. The whitespace is used as a design element itself, giving the layout a premium, unhurried feel.",
      standoutDetails:
        "Subtle noise/grain texture overlay on background surfaces. Micro-interactions on hover states with smooth 300ms transitions. Accent color used sparingly — only for CTAs and key interactive elements. A single decorative gradient blur orb in the hero area adds visual interest without distraction.",
    },

    readyToUsePrompt:
      'Create a modern, editorial-style landing page design with a warm-neutral color palette anchored by deep ink black (#1A1A2E), warm ivory (#FAF5EF), and indigo accent (#6366F1). Use a geometric sans-serif typeface (Inter or Satoshi) with bold display headings at 48–64px, tight letter-spacing, and regular-weight body text at 16–18px with generous line-height. Layout should follow a 12-column grid with asymmetric compositions, heavy use of whitespace as a design element, and section padding of 80–120px. Cards should have subtle 1px borders, rounded corners (12–16px radius), and soft drop shadows. Include a single decorative gradient blur orb in the hero section. Apply a subtle grain/noise texture overlay to background surfaces. All hover states should have smooth 300ms transitions. Accent color should be used sparingly — only for primary CTAs and interactive highlights. The overall mood should feel confident, premium, and approachable — like a high-end SaaS product or design studio portfolio.',
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const image = formData.get("image") as File | null

    if (!image) {
      return NextResponse.json(
        { error: "No image provided" },
        { status: 400 }
      )
    }

    // Simulate AI processing time
    await delay(3000)

    // In production, you would:
    // 1. Convert image to base64
    // 2. Send to OpenAI GPT-4 Vision, Google Gemini Vision, or Claude Vision
    // 3. Parse the structured response
    // For now, return a high-quality mock response
    const analysis = generateMockAnalysis()

    return NextResponse.json(analysis)
  } catch (error) {
    console.error("Design Analyzer API Error:", error)
    return NextResponse.json(
      { error: "Failed to analyze design" },
      { status: 500 }
    )
  }
}
