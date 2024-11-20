import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  // Replace process.env.API_KEY with the actual environment variable or hardcoded key.
  const apiKey = "AIzaSyCjghAn1yYyoayNJ4VyEtGSEeNjdn3v1DI"; // Replace this with a secure method in production
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return response.text();
  }
  
  export default run;
  