import auth0provider, { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";
import { groupService } from "../services/GroupService";

export class GroupController extends BaseController {
    constructor() {
        super('api/groups')
        this.router
            .get('', this.getGroups)
            .get('/:groupId', this.getGroupbyId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createGroup)
            .delete('/:groupId', this.removeGroup)
    }

    async getGroups(req, res, next) {
        try {
            const groups = await groupService.getGroups()
            return res.send(groups)
        } catch (error) {
            next(error)
        }
    }

    async getGroupbyId(req, res, next) {
        try {
            const groupId = req.params.groupId
            const group = await groupService.getGroupbyId(groupId)
            return res.send(group)
        } catch (error) {
            next(error)
        }
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
    async removeGroup(req, res, next) {
        try {
            const groupId = req.params.groupId
            const userId = req.userInfo.id
            const message = await groupService.removeGroup(groupId, userId)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
}