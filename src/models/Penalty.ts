import mongoose from "mongoose";
import { IPenalty } from "../interfaces/IPenalty"
const PenaltySchema = new mongoose.Schema({
    img: {
        type:String,
        required: true
    },
    penaltyIdx: {
        type:Number,
        required: true
    }
});

export default mongoose.model<IPenalty & mongoose.Document>("Penalty",PenaltySchema);