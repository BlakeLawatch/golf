import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { CourseSchema } from '../models/Course';
import { ScoreSchema } from '../models/Score';
import { GroupSchema } from '../models/Group';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Courses = mongoose.model('Course', CourseSchema);
  Scores = mongoose.model('Score', ScoreSchema);
  Groups = mongoose.model('Group', GroupSchema)
}

export const dbContext = new DbContext()
