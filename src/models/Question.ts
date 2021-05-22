import mongoose from "mongoose";
import { IQuestion } from "../interfaces/IQuestion"

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
export default mongoose.model<IQuestion & mongoose.Document>("Question", QuestionSchema);