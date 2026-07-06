import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"
import * as fs from "fs"
import * as path from "path"

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()

    if (!prompt) {
      return new Response("Missing prompt", { status: 400 })
    }

    // Read the system prompt from implementation.md
    const implementationFilePath = path.join(process.cwd(), "implementation.md")
    let systemPrompt = ""
    try {
      systemPrompt = fs.readFileSync(implementationFilePath, "utf8")
    } catch (err) {
      console.error("Failed to read implementation.md:", err)
      return new Response("Internal Server Error: Missing system instructions", { status: 500 })
    }

    const result = streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: `Here is the product idea: ${prompt}`,
        },
      ],
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error("Generate Architecture Error:", error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
