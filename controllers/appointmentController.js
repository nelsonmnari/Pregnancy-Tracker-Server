const Appointment = require("../models/Appointment");
const User = require("../models/User");

exports.bookAppointment = async (req, res) => {
  try {
    const { midwifeId, date, location } = req.body;
    const appointment = new Appointment({
      mother: req.user.id,
      midwife: midwifeId,
      date,
      location,
    });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      mother: req.user.id,
    }).populate("midwife", "name email location");
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getMidwives = async (req, res) => {
  try {
    const midwives = await User.find(
      { role: "midwife" },
      "name email location"
    );
    res.json(midwives);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
