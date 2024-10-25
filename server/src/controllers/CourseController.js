import auth0provider, { Auth0Provider } from "@bcwdev/auth0provider";
import { courseService } from "../services/CourseService";
import BaseController from "../utils/BaseController";
import { scoresService } from "../services/ScoreService";


export class CourseController extends BaseController {
    constructor() {
        super(`api/courses`)
        this.router
            .get('', this.getCourses)
            .get('/:courseId', this.getCoursebyId)
            .get('/:courseId/scores', this.getScores)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createCourse)
            .put('/:courseId', this.editCourse)
            .delete('/:courseId', this.eraseCourse)
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
    async getCoursebyId(req, res, next) {
        try {
            const courseId = req.params.courseId
            const course = await courseService.getCoursebyId(courseId)
            return res.send(course)
        } catch (error) {
            next(error)
        }

    }
    async getScores(req, res, next) {
        try {
            const courseId = req.params.courseId
            const scores = await scoresService.getSCores(courseId)
            return res.send(scores)
        } catch (error) {
            next(error)
        }
    }
    async createCourse(req, res, next) {
        try {
            const courseData = req.body
            courseData.creatorId = req.userInfo.id
            const newCourse = await courseService.createCourse(courseData)
            return res.send(newCourse)
        } catch (error) {
            next(error)
        }
    }
    async editCourse(req, res, next) {
        try {
            const courseInfo = req.body
            const courseId = req.params.courseId
            const userId = req.userInfo.id
            const editedCourse = await courseService.editCourse(courseInfo, courseId, userId)
            return res.send(editedCourse)
        } catch (error) {
            next(error)
        }
    }
    async eraseCourse(req, res, next) {
        try {
            const courseId = req.params.courseId
            const userId = req.userInfo.id
            const erasedCourse = await courseService.eraseCourse(courseId, userId)
            return res.send(erasedCourse)
        }
        catch (error) {
            next(error)
        }
    }
}