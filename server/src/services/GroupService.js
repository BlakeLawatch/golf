import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"

class GroupService {

    async getGroups() {
        const groups = await dbContext.Groups.find().populate('creator')
        return groups
    }
    async getGroupbyId(groupId) {
        const group = (await dbContext.Groups.findById(groupId)).populate('creator')
        return group
    }
    async createGroup(groupData) {
        const newGroup = (await dbContext.Groups.create(groupData)).populate('creator')
        return newGroup
    }
    async removeGroup(groupId, userId) {
        const group = await this.getGroupbyId(groupId)
        if (group.creatorId.toString() != userId) {
            throw new Forbidden("Not yours to delete")
        }
        return "Group Deleted"
    }
}



export const groupService = new GroupService