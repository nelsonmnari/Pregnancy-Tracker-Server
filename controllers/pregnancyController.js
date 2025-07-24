const Pregnancy = require("../models/Pregnancy");

exports.createPregnancy = async (req, res) => {
  try {
    const { dueDate, weeksPregnant, notes } = req.body;
    const pregnancy = new Pregnancy({
      user: req.user.id,
      dueDate,
      weeksPregnant,
      notes,
    });
    await pregnancy.save();
    res.status(201).json(pregnancy);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getPregnancy = async (req, res) => {
  try {
    const pregnancy = await Pregnancy.findOne({ user: req.user.id });
    res.json(pregnancy);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
