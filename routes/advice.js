const express = require("express");
const router = express.Router();
const { getAdvice } = require("../controllers/adviceController");
const auth = require("../middleware/auth");

// @route   GET /api/advice
router.get("/", auth, getAdvice);

module.exports = router;
