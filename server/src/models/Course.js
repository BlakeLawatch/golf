import { Schema } from "mongoose";

export const CourseSchema = new Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    yardage: { type: Number, required: false }
})