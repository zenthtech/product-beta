 
import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  services: {
    type: [String],
    required: true,
  },
  groomer: {
    type: String,
    required: true,
  },
  
  date: {
    type: String,  
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Appointment =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);
