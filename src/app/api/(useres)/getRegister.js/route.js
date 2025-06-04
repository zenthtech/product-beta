import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbconnect';
import Profile from '@/app/models/user'; // Make sure the model name matches the file

export async function GET() {
  try {
    await dbConnect();
    const users = await Profile.find({});
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
