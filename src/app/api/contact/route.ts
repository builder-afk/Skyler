import { NextResponse } from 'next/server';
import { db } from '@/db';
import { contactMessages } from '@/db/schema';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Insert the new contact message into the database
    const newMessage = await db.insert(contactMessages).values({
      name: body.name,
      email: body.email,
      company: body.company || null,
      mobileNumber: body.mobileNumber || null,
      message: body.message,
    }).returning();

    return NextResponse.json(
      { success: true, message: newMessage[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
