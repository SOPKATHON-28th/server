import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";

const router = express.Router();

router.post(
    "/",
    [
        check("name","Name is required").not().isEmpty()
    ],
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }

        const { name } = req.body;
        res.json(name);
    }
);
module.exports = router;