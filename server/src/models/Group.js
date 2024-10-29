import { Schema } from "mongoose";

export const GroupSchema = new Schema({
    accountId: { type: Schema.Types.ObjectId, required: true },
    groupId: { type: Schema.Types.ObjectId, required: false },
    name: { type: String, required: true, maxLength: 30 }
},
    { timestamps: true, toJSON: { virtuals: true } })

GroupSchema.virtual('profile', {
    localField: 'accountId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})

GroupSchema.virtual('course', {
    localField: 'groupId',
    foreignField: '_id',
    ref: 'Course',
    justOne: false
})
