<template>
    <p>hello</p>
    <!-- <p>{{ props.course.name }} </p> -->
</template>


<script setup>
import { computed, } from 'vue';
import { AppState } from '../AppState';
import { Course } from '../models/Course.js'

const courseProp = null

const props = courseProp({
    course: { type: Course, required: true }
})

const courses = computed(() => AppState.courses)

// function setActiveCourse(){
//     coursesService.
// }

// const coverImg = computed(() => `url(${props.course?.img})`)

</script>


<style lang="scss" scoped></style>