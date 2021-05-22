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
const express_validator_1 = require("express-validator");
const Question_1 = __importDefault(require("../models/Question"));
const router = express_1.default.Router();
/**
 *  @route POST /player
 *  @desc 레벨, 플레이어 수를 입력하고 레벨에 맞는 질문 데이터를 가져옵니다.
 */
router.post("/", [
    express_validator_1.check("player", "플레이어는 2~8명 사이로 입력해주세요.").isInt({ min: 2, max: 8 }),
    express_validator_1.check("level", "레벨을 선택해주세요.").not().isEmpty()
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            "status": 400,
            "success": false,
            "message": errors,
            "data": null
        });
    }
    const { player, level } = req.body;
    var questions = yield Question_1.default.find({ level });
    questions = questions.sort(function () {
        return Math.random() - Math.random();
    });
    questions = questions.slice(undefined, player);
    res.json({
        "status": 200,
        "success": true,
        "message": "레벨, 플레이어 수 입력 성공",
        "data": {
            "player": player,
            "question": questions
        }
    });
}));
module.exports = router;
//# sourceMappingURL=player.js.map