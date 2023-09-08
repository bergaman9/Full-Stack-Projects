import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import routes from "./routes/soccerRoutes";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const app = express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// CORS setup
app.use(cors());

routes(app);

app.get("/", (req, res) => {
  res.send(`Our soccer application is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your soccer server is running on port ${PORT}`);
});
