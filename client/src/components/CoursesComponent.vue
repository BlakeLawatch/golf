<template>
    <div class="d-flex">
        <div class="bg-img course-card text-center">
            <p class="font">{{ course.name }} </p>
        </div>
        <div class="d-flex">
            <div class="d-flex details">
                <p>{{ course.city }}</p>
                <p>{{ course.yardage }}</p>
            </div>

        </div>
    </div>
</template>


<script setup>
import { computed, } from 'vue';
import { AppState } from '../AppState';
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