import BaseController from "../utils/BaseController";

export class CourseController extends BaseController {
    constructor(data) {
        super('api/course')
        this.router
            .post('', this.createCourse)
    }
    async createCourse(req, res, next) {

    }
}