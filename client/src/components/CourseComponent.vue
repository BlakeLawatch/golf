<template>
    <p>hello</p>
    <!-- <img :src="course.img" alt=""> -->
    <p>{{ course.name }} </p>
</template>


<script setup>
import { computed } from 'vue';
// import { AppState } from '../AppState';
import { Course } from '../models/Course'
import { coursesService } from '../services/coursesService.js'

const courseProp = null

const props = courseProp({
    course: { type: Course, required: true }
})

// function setActiveCourse(){
//     coursesService.
// }


const coverImg = computed(() => `url(${props.course?.img})`)


</script>


<style lang="scss" scoped></style>