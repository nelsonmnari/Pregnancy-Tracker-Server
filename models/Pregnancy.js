const mongoose = require("mongoose");

const PregnancySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  dueDate: { type: Date, required: true },
  weeksPregnant: { type: Number },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Pregnancy", PregnancySchema);
