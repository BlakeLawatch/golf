<template>
    <section class="row justify-content-center">
        <div class="col-11 d-flex justify-content-around p-2">
            <div class="bg-img course-card text-center">
                <p class="font">{{ course.name }} </p>
            </div>
            <div>
                <div class="d-flex mx-5 details">
                    <p class="mx-4">{{ course.city }}</p>
                    <p class="mx-4">{{ course.yardage }} yards</p>
                </div>
            </div>

        </div>
    </section>
</template>


<script setup>
import { computed, } from 'vue';
import { Course } from '../models/Course.js'



const props = defineProps({
    course: { type: Course, required: true }
})

// const courses = computed(() => AppState.courses)

// function setActiveCourse(){
//     coursesService.
// }

const backImg = computed(() => `url(${props.course?.coverImg})`)

</script>


<style lang="scss" scoped>
.bg-img {
    background-image: v-bind(backImg);
    background-position: center;
    background-size: cover;
    height: 20dvh;
    width: 25dvw;
}

.font {
    color: black;
    text-shadow: 1px 1px 2px white;
    font-size: 1.5rem;
    font-weight: bold;
}

.course-card {
    border: .1rem solid #f4dc00;
    border-radius: 4px;
}

.details {
    color: white;
    text-shadow: 1px 1px 2px #f4dc00;
}
</style>