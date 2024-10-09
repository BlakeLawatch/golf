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
}


export const scoresService = new ScoreService()