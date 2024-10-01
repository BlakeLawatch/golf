import { text } from "express";
import { Schema } from "mongoose";

export const CourseSchema = new Schema({

    score: { type: String, required: true },
    GreensInRegulation: { type: String, required: false },
    PuttsPerRound: { type: String, required: false },

})