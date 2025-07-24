const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  bookAppointment,
  getAppointments,
  getMidwives,
} = require("../controllers/appointmentController");

// @route   POST /api/appointments
router.post("/", auth, bookAppointment);
// @route   GET /api/appointments
router.get("/", auth, getAppointments);
// @route   GET /api/appointments/midwives
router.get("/midwives", auth, getMidwives);

module.exports = router;
