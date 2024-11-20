import { AppState } from "@/AppState"
import { api } from "./AxiosService"
import { Group } from "@/models/Group"
import { logger } from "@/utils/Logger"

class GroupsService{

    async getGroups(){
        const res = await api.get(`api/groups`)
        AppState.groups = res.data.map((pojo) => new Group(pojo))
        logger.log(res.data, 'got groups')
    }
}

export const groupsService = new GroupsService()