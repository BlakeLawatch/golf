import auth0provider, { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";
import { scoresService } from "../services/ScoreService";
import { response } from "express";

export class ScoresController extends BaseController {
    constructor() {
        super('api/scores')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createScore)
            .put('/:scoreId', this.editScore)
            .delete('/:scoreId', this.deleteScore)
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

    async editScore(req, res, next) {
        try {
            const scoreData = req.body
            const scoreId = req.params.scoreId
            const userId = req.userInfo.id
            const updatedScore = await scoresService.editScore(scoreData, scoreId, userId)
            return res.send(updatedScore)
        } catch (error) {
            next(error)
        }
    }

    async deleteScore(req, res, next) {
        try {
            const scoreId = req.params.scoreId
            const userId = req.userInfo.id
            const deletedScore = await scoresService.deleteScore(scoreId, userId)
            return res.send(deletedScore)
        } catch (error) {
            next(error)
        }
    }
}