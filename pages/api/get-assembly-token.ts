import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const apiKey = process.env.ASSEMBLY_API_KEY;
    console.log("🔐 Loaded API Key:", apiKey); // check if key is loading

    if (!apiKey) {
      console.error("❌ No API key in env!");
      return res.status(500).json({ error: "Missing AssemblyAI API key." });
    }

    const authRes = await fetch("https://api.assemblyai.com/v2/realtime/token", {
      method: "POST",
      headers: {
        authorization: apiKey,
      },
    });

    const data = await authRes.json();
    console.log("📡 Response from AssemblyAI:", data);

    if (!authRes.ok) {
      console.error("❌ AssemblyAI returned error:", data);
      return res.status(500).json({ error: data.error || "Token fetch failed" });
    }

    res.status(200).json({ token: data.token });
  } catch (err) {
    console.error("❌ Unexpected error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
