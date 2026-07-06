import { NextResponse } from "next/server"

// Mock delay function to simulate API call
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { topic, audience, goal, tone } = body

    // Simulate AI inference delay
    await delay(2500)

    // Content Pillars based on the prompt engineering niche
    const pillars = [
      "Prompt of the Week",
      "Creator Spotlight",
      "Use Case Deep Dive",
      "Fail & Learn",
      "Quick Tip Tuesday",
    ]

    const selectedPillar = pillars[Math.floor(Math.random() * pillars.length)]

    // Visual approaches
    const visualApproaches = [
      "Carousel (Step-by-step guide)",
      "Reel (B-roll with text overlay)",
      "Single Image (High-contrast quote)",
      "Template Screenshot (Proof of work)",
      "User Testimonial Format",
    ]

    const selectedVisual = visualApproaches[Math.floor(Math.random() * visualApproaches.length)]

    // Generate mock content based on inputs
    const mockResponse = {
      concept: `A ${selectedPillar} post focused on ${topic || "AI Prompting"}. The goal is to drive ${goal || "awareness"} among ${audience || "digital creators"}.`,
      visualApproach: selectedVisual,
      pillar: selectedPillar,
      captions: [
        {
          id: "cap-1",
          tone: "Educational",
          content: `🚀 STOP writing basic prompts! Most creators fail because they treat AI like a search engine instead of a partner.\n\nIn this ${selectedPillar}, we're breaking down how to master ${topic || "Prompt Engineering"}.\n\nHere's the secret sauce:\n1️⃣ Define the Persona\n2️⃣ Provide Context\n3️⃣ Set Output Constraints\n\nReady to level up your workflow? Check the link in bio for our premium prompt library! 🔥\n\n#AI #PromptEngineering #CreatorEconomy #Productivity #AIArt`,
        },
        {
          id: "cap-2",
          tone: "Inspirational",
          content: `Imagine having a 10x more productive day. That's the power of ${topic || "AI workflows"}.\n\nWe see so many ${audience || "talented people"} getting stuck in the weeds. But with the right prompts, you're not just working harder—you're working smarter.\n\nThis ${selectedPillar} is your sign to start building systems, not just tasks.\n\nWhat's one thing you'd automate if you could? Let us know below! 👇\n\n#Mindset #AI #Success #Entrepreneur #FutureOfWork`,
        },
        {
          id: "cap-3",
          tone: "Urgent/Curious",
          content: `Is ${topic || "Prompt Engineering"} the new coding? 💻\n\nExperts are saying that the ability to talk to AI will be the #1 skill of 2024. If you haven't started mastering it yet, you're already behind.\n\nOur latest ${selectedPillar} gives you the exact blueprint we use to generate high-value results in seconds.\n\nDon't get left in the dust. Visit the link in our bio to grab our 'Mastery Bundle' today! ⏳\n\n#AI #TechTrends #Coding #PromptEngineering #CareerGrowth`,
        }
      ],
      hashtags: [
        "#InstagramTips",
        "#ContentStrategy",
        "#PromptEngineering",
        "#AITools",
        "#DigitalMarketing",
        "#CreatorOS",
        "#AICommunity",
        "#GrowthHacking",
      ],
      bestTime: "Monday & Wednesday at 6:00 PM EST",
    }

    return NextResponse.json(mockResponse)
  } catch (error) {
    console.error("Instagram Generator API Error:", error)
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    )
  }
}
