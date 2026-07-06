import { NextResponse } from 'next/server';
import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

// Define Zod models for structured output, replicating the Pydantic schemas
const ActionItemSchema = z.object({
  task: z.string().describe("The specific action item or task extracted from the notes"),
  assignee: z.string().describe("The person responsible for the task. If not mentioned, use 'TBD'"),
  deadline: z.string().describe("The deadline for the task, explicit or inferred. If none, use 'TBD'"),
  priority: z.number().describe("Priority score from 1-10 based on urgency and impact"),
  priority_reasoning: z.string().describe("Reasoning for the priority score"),
  context: z.string().describe("Context or reasoning for the task"),
});

const MeetingAnalysisSchema = z.object({
  participants: z.array(z.string()).describe("List of participants mentioned in the meeting"),
  action_items: z.array(ActionItemSchema).describe("List of extracted action items"),
});

const FollowUpEmailsSchema = z.object({
  general_summary: z.string().describe("General meeting summary email for all participants"),
  individual_tasks: z.array(z.string()).describe("A list of individual task assignment emails formatted nicely"),
  manager_summary: z.string().describe("Manager or stakeholder summary email highlighting key risks and timelines"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, notes, action_items, participants } = body;
    
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "OpenAI API key not configured" }, { status: 500 });
    }

    if (action === 'analyze_meeting') {
      if (!notes) {
        return NextResponse.json({ error: "Notes are required" }, { status: 400 });
      }

      const { object: analysis } = await generateObject({
        model: openai('gpt-4o-mini'),
        schema: MeetingAnalysisSchema,
        temperature: 0.2,
        system: "You are an expert AI assistant that analyzes meeting notes. Your goal is to extract action items, detect participants, infer deadlines, and assign a priority score (1-10) to each task.",
        prompt: `Here are the meeting notes:\n\n${notes}\n\nPlease follow the formatting instructions strictly.`,
      });

      return NextResponse.json(analysis);

    } else if (action === 'generate_emails') {
      if (!notes || !action_items || !participants) {
        return NextResponse.json({ error: "Notes, action_items, and participants are required" }, { status: 400 });
      }

      const { object: emails } = await generateObject({
        model: openai('gpt-4o-mini'),
        schema: FollowUpEmailsSchema,
        temperature: 0.2,
        system: "You are an executive assistant. Generate professional follow-up emails based on the provided meeting summary, participants, and action items.",
        prompt: `Participants: ${JSON.stringify(participants)}\n\nAction Items: ${JSON.stringify(action_items)}\n\nMeeting Notes: ${notes}`,
      });

      return NextResponse.json(emails);

    } else {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
