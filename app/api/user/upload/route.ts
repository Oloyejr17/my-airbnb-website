import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const config = { api: { bodyParser: false } };

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    const timestamp = Date.now();
    const ext = file.name.split(".").pop();
    const fileName = `${timestamp}.${ext}`;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    fs.writeFileSync(path.join(uploadDir, fileName), buffer);

    return NextResponse.json({ url: `/uploads/${fileName}` });
  } catch (err) {
    console.error("Error uploading file:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
