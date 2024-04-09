import fs from "fs";
import path from "path";

// Function to get the cached video path or generate and cache if not exists
function getCachedVideo() {
    const cachedFilePath = path.resolve('./public/assets/optimized_video.mp4');

    if (fs.existsSync(cachedFilePath)) {
        console.log("working with cache")
        return cachedFilePath;
    } else {
        const originalFilePath = path.resolve('./public/assets/intro.mp4');
        // Copy the original video file to the cache directory
        fs.copyFileSync(originalFilePath, cachedFilePath);
        return cachedFilePath;
    }
}

// Function to serve the cached video
function getVideoStream(req) {
    try {
        const range = req.headers.get("range");
        if (!range) {
            return new Response("Requires Range Header", { status: 400 });
        }

        const cachedFilePath = getCachedVideo();
        const videoSize = fs.statSync(cachedFilePath).size;
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

        const videoStream = fs.createReadStream(cachedFilePath, { start, end });
        return new Response(videoStream, { status: 206, headers });
    } catch (error) {
        console.error("Error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}

export async function GET(req) {
    return getVideoStream(req);
}
