const functions = require("firebase-functions");
const axios = require("axios");

exports.chatWithGemini = functions.https.onCall(async (data, context) => {
  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
      {
        contents: [{ parts: [{ text: data.message }] }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    return { error: err.message };
  }
});
