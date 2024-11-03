import { Schema } from "mongoose";

export const GroupSchema = new Schema({
    creatorId: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true, maxLength: 30 },
    capacity: { type: Number, required: false, maxLength: 50 }
},
    { timestamps: true, toJSON: { virtuals: true } })

GroupSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})

// GroupSchema.virtual('course', {
//     localField: 'groupId',
//     foreignField: 'courseId',
//     ref: 'Course',
//     justOne: false
// })
