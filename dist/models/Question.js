"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const QuestionSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model("Question", QuestionSchema);
//# sourceMappingURL=Question.js.map