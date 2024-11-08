import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    groupId: { type: Schema.Types.ObjectId, required: false }
    // NOTE If you wish to add additional properties do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

AccountSchema.virtual('group', {
  localField: 'groupId',
  ref: 'Group',
  foreignField: '_id',
  justOne: true
})

