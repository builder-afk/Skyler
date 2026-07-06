import { NextResponse } from "next/server"

// Mock delay function to simulate API call
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { niche, tone, postType, audience, keywords, length } = body

    // Simulate AI inference delay
    await delay(2500)

    // Generate mock content based on inputs
    const mockResponse = {
      posts: [
        {
          id: "post-1",
          content: `🚀 Unpopular opinion in the ${niche || "tech"} space: Most people are doing it wrong.\n\nI've seen so many ${audience || "professionals"} struggle because they ignore the basics. It's not about complex strategies; it's about executing the fundamentals flawlessly.\n\nHere's what you need to focus on today:\n1. Prioritize clarity over cleverness\n2. Automate repetitive tasks (${keywords ? keywords.split(",")[0] : "automation"})\n3. Stay consistent even when it's hard\n\nWhat's your take on this? Let me know below. 👇`,
        },
        {
          id: "post-2",
          content: `Stop letting imposter syndrome ruin your career in ${niche || "your field"}.\n\nWhen I first started, I thought everyone else had it all figured out. Spoiler: they don't.\n\nThe real secret? Embrace the learning curve. Every expert was once a beginner. Keep pushing, keep learning, and eventually, you'll look back and realize how far you've come.\n\nKeep going! 💪`,
        },
        {
          id: "post-3",
          content: `Can we talk about the reality of being in ${niche || "this industry"}?\n\nIt's not all glamorous wins. It's late nights, frustrating setbacks, and constant iteration. But that's exactly what makes the breakthroughs so rewarding.\n\nIf you're in the trenches right now, keep grinding. The hard work pays off.\n\n#${niche?.replace(/[^a-zA-Z0-9]/g, "") || "Growth"} #Mindset`,
        },
      ],
      hashtags: [
        "#LinkedInTips",
        "#ContentStrategy",
        `#${niche?.replace(/[^a-zA-Z0-9]/g, "") || "Tech"}`,
        "#PersonalBranding",
        "#GrowthMindset",
        "#Leadership",
        "#FutureOfWork",
        "#Networking",
        "#SuccessTips",
        "#CareerAdvice",
      ],
      titles: [
        "Stop making this rookie mistake in 2024",
        "The uncomfortable truth about scaling your brand",
        "Why your current strategy is failing (and how to fix it)",
        "3 underrated skills you need to learn today",
        "How I went from zero to 10k followers in 6 months",
      ],
      captions: [
        "A quick reminder for your feed today 💡",
        "Drop a 🚀 if you agree!",
        "Save this for later! 📌",
      ],
      bestTime: "Tuesday & Thursday at 9:00 AM EST",
    }

    return NextResponse.json(mockResponse)
  } catch (error) {
    console.error("LinkedIn Generator API Error:", error)
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    )
  }
}
