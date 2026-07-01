import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  
});

console.log("API Key Loaded:", process.env.OPENAI_API_KEY ? "Yes" : "No");

export async function GET() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello!" }],
    });

    const reply = response.choices[0].message.content;
    return Response.json({ success: true, reply });
  } catch (err) {
    return Response.json({ success: false, error: err.message });
  }
}
