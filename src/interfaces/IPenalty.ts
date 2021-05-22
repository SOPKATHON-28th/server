import mongoose from "mongoose";

export interface IPenalty{
    _id?: string;
    penaltyIdx: number;
    img: string;
}