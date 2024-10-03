import { dbContext } from "../db/DbContext"

class ScoreService {

    async createScore(scoreData) {
        const newScore = (await dbContext.Scores.create(scoreData)).populate('creator')
        return newScore
    }
}


export const scoresService = new ScoreService()