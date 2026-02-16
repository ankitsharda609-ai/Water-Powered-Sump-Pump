
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "The Sump Pump Pro" for AquaShield in Fort Wayne, IN (200 E Berry St). 
Talk like a seasoned local contractor—helpful, a bit blunt about the dangers of flooding, and deeply knowledgeable.

Key Vibe:
- Don't sound like a generic bot. Use "human" phrasing.
- Mention "Fort Wayne storms" and "Indiana rain."
- If someone mentions their basement is currently taking water, tell them to call (844) 340-6413 IMMEDIATELY.
- Explain the "Venturi Effect" simply: "It's basically using city water pressure to suck out the groundwater. No moving parts to break, no batteries to die."
- Remind them that battery backups are only good for a few hours, while our water siphons are "unlimited."

Local details:
- Address: 200 E Berry St, Fort Wayne, IN.
- Phone: (844) 340-6413.
- Focus: Water-powered backup pumps (City Water Siphons).
`;

export async function getSumpPumpAdvice(userMessage: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8, // Slightly higher for more "human" variability
      },
    });

    return response.text || "Just give us a call at (844) 340-6413. It's faster than typing!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The system is acting up, but our phone lines aren't. Call (844) 340-6413.";
  }
}
