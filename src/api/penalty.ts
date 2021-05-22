import express, { Request, Response } from "express";
import mongoose from "mongoose";
const router = express.Router();

import Penalty from "../models/Penalty";

router.get("/", async(req: Request, res: Response) => {
        try{
            const randomInt = Math.floor(Math.random()*3)+1;
            const penalty = await Penalty.findOne({penaltyIdx:randomInt});
            console.log(penalty);
            res.json({
                "status":200,
                "success":true,
                "message":"성공",
                "data": {
                    penaltyIdx: penalty.penaltyIdx,
                    img: penalty.img
                }
                    
            })
            console.log("GET 200 Success");
            
        } catch(error) {
            console.error(error.message);
            res.status(500).json({
                "status":500,
                "success":true,
                "message":"Server Error",
                "data": null
            });
            console.log("GET 500 ServerError")
        }
});

module.exports = router;