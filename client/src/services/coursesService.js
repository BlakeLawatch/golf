import { AppState } from "@/AppState"
import { api } from "./AxiosService"
import { Course } from "@/models/Course"
import { logger } from "@/utils/Logger"

class CoursesService{

    async getCourses(){
        const res = await api.get('api/courses')
        AppState.courses = res.data.map((pojo)=> new Course(pojo))
        logger.log('got courses!!', res.data)
    }

    async getCoursebyId(courseId){
        const res = await api.get(`api/courses/${courseId}`)
        const currentCourse = new Course(res.data)
        AppState.activeCourse = currentCourse
        logger.log(currentCourse, "Active course")
    }

}

export const coursesService = new CoursesService()