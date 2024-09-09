<template>
    <p>hello</p>
    <img :src="course.img" alt="">
</template>


<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState'
import { Course } from '../models/Course'

props: {
    course: { type: Course, required: true }
}

const coverImg = computed(() => `url(${props.course?.coverImg})`)
</script>


<style lang="scss" scoped></style>