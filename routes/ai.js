const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
require("dotenv").config();

// POST /api/ai/ask
router.post("/ask", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    // Call OpenAI API (replace with your key and endpoint)
    const openaiRes = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful health assistant for expectant mothers.",
            },
            { role: "user", content: message },
          ],
          max_tokens: 150,
        }),
      }
    );
    const data = await openaiRes.json();
    if (!openaiRes.ok) {
      console.error("OpenAI API error:", data);
      return res
        .status(500)
        .json({ error: data.error?.message || "AI service error" });
    }
    const aiMessage =
      data.choices?.[0]?.message?.content || "Sorry, I could not answer that.";
    res.json({ answer: aiMessage });
  } catch (err) {
    console.error("AI route error:", err);
    res.status(500).json({ error: "AI service error" });
  }
});

module.exports = router;
