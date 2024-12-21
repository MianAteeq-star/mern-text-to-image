import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectMongo from "./connectMongo/connectMongo.js";
import userRoutes from "./routes/user.routes.js"
import imageRoutes from "./routes/image.routes.js"
import stripeRouter from "./routes/stripe.routes.js";


dotenv.config();

const app = express();

app.use(cors({ origin: `${process.env.CLIENT_URL}`, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/user", userRoutes)
app.use("/api/v1/image", imageRoutes)
app.use('/api/v1/stripe', stripeRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT;


connectMongo()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
