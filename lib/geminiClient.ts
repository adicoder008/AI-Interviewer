export const sendToGemini = async (text: string): Promise<string> => {
  const res = await fetch("/api/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: text,
      role: "You are an expert  interviewer on the given topic. Start by asking if they are ready then start asksing questions like a professional",
    }),
  });

  const { reply } = await res.json();
  return reply;
};
