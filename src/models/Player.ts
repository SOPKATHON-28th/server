import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
  player: {
    type: Number,
    required: true
  },

  level: {
    type: Number,
    required: true
  },
});

//export default 
export default mongoose.model<mongoose.Document>("Player", PlayerSchema);