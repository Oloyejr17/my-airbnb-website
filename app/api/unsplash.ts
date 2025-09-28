import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Example: fetch latest Unsplash photos
    const r = await fetch("https://api.unsplash.com/photos", {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_SECRET_KEY}`,
      },
    });

    if (!r.ok) {
      return res.status(r.status).json({ error: "Failed to fetch from Unsplash" });
    }

    const data = await r.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: (error as Error).message });
  }
}
