
import { GoogleGenAI, Type } from "@google/genai";

export const generateMindsetInsight = async (userStruggle: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `The user says their biggest struggle with fitness or resolutions is: "${userStruggle}". 
    Act as Ivan, the founder of Con Ganas Coaching. Provide a powerful, grounded, and luxury-tier insight (about 2-3 sentences) on why this is happening from a mindset perspective, and then a "Con Ganas" call to action. Use a tone that is driven, heart-centered, and empowering. Return in JSON format.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          insight: {
            type: Type.STRING,
            description: "A professional and empowering mindset insight from Ivan."
          },
          recommendation: {
            type: Type.STRING,
            description: "A short Con Ganas recommendation."
          }
        },
        required: ["insight", "recommendation"]
      }
    }
  });

  return JSON.parse(response.text);
};
