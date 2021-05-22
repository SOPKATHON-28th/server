import mongoose from "mongoose";

const PenaltySchema = new mongoose.Schema({
    img: {
        type: String
    },
    name: String
});

export default mongoose.model<mongoose.Document>("Penalty",PenaltySchema);