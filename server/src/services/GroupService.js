import { dbContext } from "../db/DbContext"

class GroupService {


    async createGroup(groupData) {
        const newGroup = (await dbContext.Groups.create(groupData)).populate('creator')
        return newGroup
    }
}



export const groupService = new GroupService