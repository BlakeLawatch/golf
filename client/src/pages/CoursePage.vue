<template>
    <div v-if="activeCourse" class="container-fluid">
        <section class="row">
            <div class="text-center pt-5">
                <button @click="addScore()" class="mdi mdi-plus-thick rounded-pill">Add Score</button>
                <p>{{ scores }}</p>
                <p>{{ activeCourse.name }}</p>
            </div>
        </section>

    </div>
</template>


<script>
import { AppState } from '@/AppState';
import { coursesService } from '@/services/coursesService';
import { scoresService } from '@/services/ScoresService';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';


const scores = computed(() => AppState.scores)
const activeCourse = computed(() => AppState.activeCourse)
const route = useRoute()

onMounted(() => {
    { getScoresbyCourseId() }
    { getCoursebyId() }
})

async function getCoursebyId() {
    try {
        const courseId = route.params.courseId
        await coursesService.getCoursebyId(courseId)
    } catch (error) {
        Pop.error(error)
    }
}

async function getScoresbyCourseId() {
    try {
        const courseId = route.params.courseId
        await scoresService.getScoresbyCourseId(courseId)
    } catch (error) {
        Pop.error(error)
    }
}




</script>


<style lang="scss" scoped></style>