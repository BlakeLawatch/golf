import { AppState } from "@/AppState"
import { api } from "./AxiosService"
import { Score } from "@/models/Score"
import { logger } from "@/utils/Logger"

class ScoresService{

    async getScoresbyCourseId(courseId){
        const res = await api.get(`api/courses/${courseId}/scores`)
        AppState.scores = res.data.map((pojo)=> new Score(pojo))
        logger.log('Here are the scores', res.data)
    }

    async addScore(scoreData){
        const res = await api.post(`api/scores`, scoreData)
        const newScore = new Score(res.data)
        AppState.scores.push(newScore)
    }
}


export const scoresService = new ScoresService()