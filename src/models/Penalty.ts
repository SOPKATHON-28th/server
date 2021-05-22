import mongoose from "mongoose";

const PenaltySchema = new mongoose.Schema({
    img: {
        type:String
    },
    penaltyIdx: {
        type:Number
    }
});

export default mongoose.model<mongoose.Document>("Penalty",PenaltySchema);