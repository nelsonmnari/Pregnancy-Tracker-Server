const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB();

app.use(
  cors({
    origin: [
      "https://pregnancy-tracker-client.vercel.app",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/pregnancy", require("./routes/pregnancy"));
app.use("/api/advice", require("./routes/advice"));
app.use("/api/appointments", require("./routes/appointments"));
app.use("/api/ai", require("./routes/ai"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
