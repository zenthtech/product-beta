import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbconnect';
import Profile from '@/app/models/user';

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { name, email, phone, dob, gender } = body;

   
    if (!name || !email || !phone || !dob || !gender) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

 
    const existingUser = await Profile.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 409 });
    }

 
    const newUser = await Profile.create({ name, email, phone, dob, gender });

    return NextResponse.json({ message: 'User created', user: newUser }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
