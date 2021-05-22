import express, { Request, Response } from "express";
import { Mongoose } from "mongoose";
const router = express.Router();

import Penalty from "../models/Penalty";

router.get("/", async(req: Request, res: Response) => {
        try{
            const randomInt = Math.floor(Math.random()*3);
            const penalty = await Penalty.findOne({penaltyIdx:randomInt});
            res.json({
                "status":200,
                "success":true,
                "message":"성공",
                "data": {
                    penaltyIdx: penalty.penaltyIdx,
                    img: penalty.img
                }
                    
            })
            console.log("GET Penalty 200 OK");
            
        } catch(error) {
            console.error(error.message);
            res.status(500).json({
                "status":500,
                "success":false,
                "message":"Server Error"
            });
            console.log("GET Penalty 500 ServerError")
        }
});

module.exports = router;