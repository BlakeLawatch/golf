import { dbContext } from "../db/DbContext";

class CourseService {

    async createCourse(courseData) {
        const newCourse = (await dbContext.Courses.create(courseData)).populate('creator')
        return newCourse
    }
    async getCourses(courseId) {
        const courses = await dbContext.Courses.find(courseId).populate('creator')
        return courses
    }
}

export const courseService = new CourseService()