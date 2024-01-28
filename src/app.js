import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// cookie-parser is used for cookies manipulation::
// cors/app.use only middlewares ke liye use hote haii!
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
// for json response limit::
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// for url encoded
app.use(express.static("public"));
// public folderme image, video store karne ke liye!!

app.use(cookieParser());

export { app };
