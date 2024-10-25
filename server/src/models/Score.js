import { Schema } from "mongoose";

export const ScoreSchema = new Schema({

    score: { type: Number, required: true },
    courseId: { type: Schema.Types.ObjectId, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true },
    greensInRegulation: { type: String, required: false },
    puttsPerRound: { type: String, required: false },
    outOfBounds: { type: String, required: false }
},
    {
        timestamps: true, toJSON: { virtuals: true }
    })

ScoreSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})