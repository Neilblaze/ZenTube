const express = require("express");
const ytdl = require("ytdl-core");
const cors = require("cors");
// const format = ".m4a(H.264)"
// const id = url.split("=")[1];
const fs = require('fs'); // for YT-CC
const path = require('path'); // for YT-CC
const https = require('https'); // for YT-CC

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    console.log(
        `Log Timestamp  :  ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()} — Processed OK`
    );
    res.status(200).send("Server Healthy — 200 OK");
});

app.get("/info", async (req, res) => {
    const { url } = req.query;

    if (url) {
        const isValid = ytdl.validateURL(url);

        if (isValid) {
            const info = (await ytdl.getInfo(url)).videoDetails;

            const title = info.title;
            const videoId = info.videoId;
            const thumbnail = info.thumbnails[2].url;
            const duration = info.lengthSeconds;
            const views = info.viewCount;
            // const author = info.author;
            
            const author_url = info.author.channel_url;
            const author_name = info.author.name;
            const author_verified = info.author.verified;
            const author_subscriber = info.author.subscriber_count;
            const author_avatar = info.author.thumbnails[0].url; //optional
            // const format = .m4a(264)
            // const captions = info.captions.url;
            const description = info.description;


            res.send({ title: title, videoId: videoId, thumbnail: thumbnail, duration: duration, views: views, author_url: author_url, author_name: author_name, author_verified: author_verified, author_subscriber:author_subscriber, author_avatar: author_avatar, description: description });
        } else {
            res.status(400).send("Invalid URL");
        }
    } else {
        res.status(400).send("Invalid query");
    }
});

// app.get("/caption", async (req, res) => {
//     const { url } = req.query;
    
//     if (url) {
//         const isValid = ytdl.validateURL(url);
//         const format = 'xml'; //en-us
        
//         if (isValid) {
//             const info = (await ytdl.getInfo(url)).captionTrack;
//             const lang = 'en';
//             const captions = info.player_response.captions.playerCaptionsTracklistRenderer;
//             res.send({ captions: captions });
//         } else {
//             res.status(400).send("Invalid url");
//         }
//     } else {
//         res.status(400).send("Invalid query");
//     }
// });

app.get("/mp3", async (req, res) => {
    const { url } = req.query;

    if (url) {
        const isValid = ytdl.validateURL(url);

        if (isValid) {
            const videoName = (await ytdl.getInfo(url)).videoDetails.title;

            res.header(
                "Content-Disposition",
                `attachment; filename="${videoName}.mp3"`
            );
            res.header("Content-type", "audio/mpeg3");

            ytdl(url, { quality: "highestaudio", format: "mp3" }).pipe(res);
        } else {
            res.status(400).send("Invalid URL");
        }
    } else {
        res.status(400).send("Invalid query");
    }
});

app.get("/mp4", async (req, res) => {
    const { url } = req.query;

    if (url) {
        const isValid = ytdl.validateURL(url);

        if (isValid) {
            const videoName = (await ytdl.getInfo(url)).videoDetails.title;

            res.header(
                "Content-Disposition",
                `attachment; filename="${videoName}.mp4"`
            );

            ytdl(url, {
                quality: "highest",
                format: "mp4",
            }).pipe(res);
        } else {
            res.status(400).send("Invalid URL");
        }
    } else {
        res.status(400).send("Invalid query");
    }
});

app.listen(process.env.PORT || 3003, () => {
    console.log("Server active — listening on PORT 3003");
});
