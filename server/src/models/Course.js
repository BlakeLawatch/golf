import { Schema } from "mongoose";

export const CourseSchema = new Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    coverImg: { type: String, required: true },
    yardage: { type: Number, required: false },
    creatorId: { type: Schema.Types.ObjectId, required: true }
},
    {
        timestamps: true, toJSON: { virtuals: true }
    })

CourseSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})