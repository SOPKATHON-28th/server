"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Penalty_1 = __importDefault(require("../models/Penalty"));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const randomInt = Math.floor(Math.random() * 3);
        const penalty = yield Penalty_1.default.findOne({ penaltyIdx: randomInt });
        res.json({
            "status": 200,
            "success": true,
            "message": "성공",
            "data": {
                penaltyIdx: penalty.penaltyIdx,
                img: penalty.img
            }
        });
        console.log("GET Penalty 200 OK");
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({
            "status": 500,
            "success": false,
            "message": "Server Error"
        });
        console.log("GET Penalty 500 ServerError");
    }
}));
module.exports = router;
//# sourceMappingURL=penalty.js.map