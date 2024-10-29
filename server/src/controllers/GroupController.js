import auth0provider, { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";

export class GroupController extends BaseController {
    constructor() {
        super('api/groups')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .put('', this.createGroup)
    }


    async createGroup(res, req, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
}