// src/app/api/getAppointment/route.js

import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbconnect';
import { Appointment } from '@/app/models/appointment';

export async function GET() {
  try {
    await dbConnect();

    const appointments = await Appointment.find().sort({ createdAt: -1 });

    return NextResponse.json({ appointments }, { status: 200 });
  } catch (error) {
    console.error('❌ Error in GET /api/getAppointment:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
