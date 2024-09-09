<template>
    <p>hello</p>
    <img :src="course.img" alt="">
</template>


<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState'

props: {
    course: { type: Course, required: true }
}

const coverImg = computed(() => `url(${props.course?.img})`)
</script>


<style lang="scss" scoped></style>