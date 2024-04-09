import fs from "fs";
import path from "path";

function getVideoStream(req) {
  try {
    const range = req.headers.get("range");
    if (!range) {
      return new Response("Requires Range Header", { status: 400 });
    }
    const filePath = path.resolve('./public/assets/intro.mp4');
    console.log(filePath)

    const videoSize = fs.statSync(filePath).size;
    const CHUNK_SIZE = 10 ** 6; // 1 MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength.toString(),
      "Content-Type": "video/mp4",
      "Access-Control-Allow-Origin": "*", // Replace with your domain
    };
    const videoStram = fs.createReadStream(filePath, {
      start,
      end,
    });

    return new Response(videoStram, { status: 206, headers });
  } catch (error) {
    // If an error occurs, handle it and return an appropriate response
    console.error("Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function GET(req) {
  return getVideoStream(req);
}
