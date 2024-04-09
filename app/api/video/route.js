import fs from "fs";
import path from "path";

function getVideoStream(req) {
  const range = req.headers.get("range");
  if (!range) {
    return new Response("Ruquires Range Header", { status: 400 });
  }
  const filePath = "./public/assets/intro.mp4"; // Replace with your actual file path
  const videoSize = fs.statSync(filePath).size;
  const CHUNK_SIZE = 10 ** 6; //1 MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength.toString(),
    "Content-Type": "video/mp4",
  };
  const videoStram = fs.createReadStream(filePath, {
    start,
    end,
  });

  return new Response(videoStram, { status: 206, headers });
}
export async function GET(req) {
  return getVideoStream(req);
}
