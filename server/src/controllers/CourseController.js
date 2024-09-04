import auth0provider, { Auth0Provider } from "@bcwdev/auth0provider";
import { courseService } from "../services/CourseService";
import BaseController from "../utils/BaseController";


export class CourseController extends BaseController {
    constructor() {
        super(`api/courses`)
        this.router
            .get('', this.getCourses)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createCourse)
    }
    async createCourse(req, res, next) {
        try {
            const courseData = req.body
            // debugger
            courseData.creatorId = req.userInfo.id
            const newCourse = await courseService.createCourse(courseData)
            return res.send(newCourse)
        } catch (error) {
            next(error)
        }
    }
    async getCourses(req, res, next) {
        try {
            const courseId = req.body.courseId
            const courses = await courseService.getCourses(courseId)
            return res.send(courses)
        } catch (error) {
            next(error)
        }
    }
}