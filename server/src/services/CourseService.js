import { dbContext } from "../db/DbContext";
import { Forbidden } from "../utils/Errors";

class CourseService {

    async createCourse(courseData) {
        const newCourse = (await dbContext.Courses.create(courseData)).populate('creator')
        return newCourse
    }
    async getCourses(courseId) {
        const courses = await dbContext.Courses.find(courseId).populate('creator')

        return courses
    }
    async getCoursebyId(courseId) {
        const course = (await dbContext.Courses.findById(courseId)).populate('creator')
        return course
    }
    async editCourse(courseInfo, courseId, userId) {
        const editedCourse = await dbContext.Courses.findById(courseId)

        if (editedCourse.creatorId.toString() != userId) {
            throw new Forbidden("Not yours course to edit")
        }

        editedCourse.name = courseInfo.name || editedCourse.name
        editedCourse.city = courseInfo.city || editedCourse.city
        editedCourse.yardage = courseInfo.yardage || editedCourse.yardage
        editedCourse.coverImg = courseInfo.coverImg || editedCourse.coverImg

        await editedCourse.save()
        return editedCourse
    }
    async eraseCourse(courseId, userId) {
        const erasedCourse = await dbContext.Courses.findByIdAndDelete(courseId)

        if (erasedCourse.creatorId != userId) {
            throw new Forbidden("Yeah right buddy")
        }
        return erasedCourse
    }
}

export const courseService = new CourseService()