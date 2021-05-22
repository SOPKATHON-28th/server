import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";

import Question from "../models/Question";

const router = express.Router();

/**
 *  @route POST /player
 *  @desc 레벨, 플레이어 수를 입력하고 레벨에 맞는 질문 데이터를 가져옵니다.
 */
router.post(
    "/",
    [
        check("player","플레이어는 2~8명 사이로 입력해주세요.").isInt({ min : 2 , max : 8 }),
        check("level", "레벨을 선택해주세요.").not().isEmpty()
    ],
    async (req: Request, res: Response) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return res.status(400).json({ 
                "status" : 400,
                "success" : false,
                "message" : errors,
                "data" : null
            });
        }

        const { player, level } = req.body;

        var questions =  await Question.find({level})
        
        questions = questions.sort(function() {
                    return Math.random() - Math.random();
                    });
        
        questions = questions.slice(undefined, player)

        res.json({
          "status" : 200,
          "success" : true,
          "message" : "레벨, 플레이어 수 입력 성공",
          "data" : {
            "player" : player,
            "question" : questions
          }
        });
    }
);
module.exports = router;