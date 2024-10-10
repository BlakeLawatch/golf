import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"

class ScoreService {

    async createScore(scoreData) {
        const newScore = (await dbContext.Scores.create(scoreData)).populate('creator')
        return newScore
    }
    async getSCores(courseId) {
        const scores = await dbContext.Scores.find({ courseId }).populate('creator')
        return scores
    }
    async editScore(scoreData, scoreId, userId) {
        const updatedScore = await dbContext.Scores.findById(scoreId)

        if (updatedScore.creatorId.toString() != userId) {
            throw new Forbidden("Not yours to edit")
        }
    }
    async deleteScore(scoreId, userId) {
        const deletedScore = await dbContext.Scores.findByIdAndDelete(scoreId)

        if (deletedScore.creatorId.toString() != userId) {
            throw new Forbidden("Yeah Right")
        }
        return deletedScore
    }
}


export const scoresService = new ScoreService()