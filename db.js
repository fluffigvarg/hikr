import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.DB);

const hikeSchema = new mongoose.Schema({
    name: String,
    region: String,
    wtaLink: String,
    imgURL: String,
    length: Number,
    gain: Number,
    rating: Number,
    parkingPass: String,
    review: String
});

const Hike = mongoose.model("Hike", hikeSchema);

export default Hike;