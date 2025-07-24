const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  createPregnancy,
  getPregnancy,
} = require("../controllers/pregnancyController");

// @route   POST /api/pregnancy
router.post("/", auth, createPregnancy);
// @route   GET /api/pregnancy
router.get("/", auth, getPregnancy);

module.exports = router;
