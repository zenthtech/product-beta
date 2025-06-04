// src/app/api/postAppointment/route.js

import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbconnect';
import { Appointment } from '@/app/models/appointment';

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { services, groomer, date, time } = body;

    if (!services || !Array.isArray(services) || services.length === 0 || !groomer || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newAppointment = await Appointment.create({
      services,
      groomer,
      date,
      time,
    });

    return NextResponse.json({ message: 'Appointment created', appointment: newAppointment }, { status: 201 });
  } catch (error) {
    console.error('❌ Error in POST /api/postAppointment:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
