import { dbContext } from "../db/DbContext";

class CourseService {

    async createCourse(courseData) {
        const newCourse = (await dbContext.Courses.create(courseData)).populate
        return newCourse
    }
}

export const courseService = new CourseService()