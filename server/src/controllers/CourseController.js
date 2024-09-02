import { courseService } from "../services/CourseService";
import BaseController from "../utils/BaseController";


export class CourseController extends BaseController {
    constructor() {
        super(`api/course`)
        this.router
            .post('', this.createCourse)
    }
    async createCourse(req, res, next) {
        try {
            const courseData = req.body
            debugger
            courseData.creatorId = req.userInfo.id
            const newCourse = await courseService.createCourse(courseData)
            return res.send(newCourse)
        } catch (error) {
            next(error)
        }
    }
}