import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  level: {
    type: Number,
    required: true
  },
});

//export default 
export default mongoose.model<mongoose.Document>("Question", QuestionSchema);