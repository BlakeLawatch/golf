import auth0provider, { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";
import { scoresService } from "../services/ScoreService";

export class ScoresController extends BaseController {
    constructor() {
        super('api/scores')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createScore)
    }

    async createScore(req, res, next) {
        try {
            const scoreData = req.body
            scoreData.creatorId = req.userInfo.id
            const newScore = await scoresService.createScore(scoreData)
            return res.send(newScore)
        } catch (error) {
            next(error)
        }

    }

    async deleteScore(req, res, next) {
        try {
            const scoreId = req.params.scoreId
            const deletedScore = await scoresService.deleteScore(scoreId)
            return res.send(deletedScore)
        } catch (error) {
            next(error)
        }
    }
}