import mongoose from "mongoose";

export interface IQuestion{
    _id?: string;
    title: string;
    level: number;
}