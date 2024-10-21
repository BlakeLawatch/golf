<template>
    <!-- <section class="row justify-content-center"> -->
    <div class="d-flex course-card justify-content-around p-2">
        <div class="bg-img text-center">
            <p class="font">{{ course.name }} </p>
        </div>
        <div>
            <div class="mx-5 details">
                <p>{{ course.city }}</p>
                <p>{{ course.yardage }} yards</p>
            </div>
        </div>

    </div>
    <!-- </section> -->
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
    // border-width: .2rem;
    border-radius: 10px;
    // border-style: solid;
    border: .2rem solid;
    border-image: linear-gradient(to right, #91d1d0, #609ab1, #011223) border-box;
    width: 90%;
    box-shadow: inset 0px 0px 10px #011223;
}

.details {
    color: white;
    text-shadow: 1px 1px 2px #f4dc00;
}
</style>