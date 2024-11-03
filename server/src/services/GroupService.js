import { dbContext } from "../db/DbContext"

class GroupService {

    async getGroups() {
        const groups = await dbContext.Groups.find().populate('creator')
        return groups
    }
    async createGroup(groupData) {
        const newGroup = (await dbContext.Groups.create(groupData)).populate('creator')
        return newGroup
    }
    async removeGroup(groupId, userId) {
        const message = await dbContext.Groups.findByIdAndDelete({ groupId })
        // if(userId != )
    }
}



export const groupService = new GroupService