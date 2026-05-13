import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    
    studentName: {
    type: String,
    required: true
  },

  studentId: {
    type: String,
    required: true
  },

  subject: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ["Present", "Absent"],
    required: true
  }

});

export default mongoose.model("Attendance", attendanceSchema);