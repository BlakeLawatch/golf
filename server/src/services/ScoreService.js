import { dbContext } from "../db/DbContext"

class ScoreService {

    async createScore(scoreData) {
        const newScore = (await dbContext.Scores.create(scoreData)).populate('creator')
        return newScore
    }
    async getSCores(courseId) {
        const scores = await dbContext.Scores.find({ courseId }).populate('creator')
        return scores
    }
    async deleteScore(scoreId) {
        const deletedScore = await dbContext.Scores.findByIdAndDelete(scoreId)
        return deletedScore
    }
}


export const scoresService = new ScoreService()