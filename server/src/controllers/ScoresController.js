import auth0provider, { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";

export class ScoresController extends BaseController {
    constructor() {
        super('api/scores')
        this.router
            .post('', this.createScore)
            .use(Auth0Provider.getAuthorizedUserInfo)
    }

    async createScore
}