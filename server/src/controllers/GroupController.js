import auth0provider, { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";
import { groupService } from "../services/GroupService";

export class GroupController extends BaseController {
    constructor() {
        super('api/groups')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createGroup)
    }


    async createGroup(req, res, next) {
        try {
            const groupData = req.body
            groupData.creatorId = req.userInfo.id
            const newGroup = await groupService.createGroup(groupData)
            return res.send(newGroup)
        } catch (error) {
            next(error)
        }
    }
}