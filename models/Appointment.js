const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  mother: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  midwife: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
