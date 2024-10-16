<template>
    <div v-if="activeCourse" class="container-fluid">
        <section class="row justify-content-center">
            <div class="col-12">
                <div class="text-end pt-3">
                    <button type="button" class="btn btn-primary rounded-pill" data-bs-toggle="modal"
                        data-bs-target="#ScoreModal">
                        Add Score
                    </button>
                </div>

            </div>
            <div class="col-6">
                <div class="text-center pt-5">
                    <div class="d-flex" v-for="score in scores" :key="score.id">
                        <p>{{ score.creator.name }}</p>
                        <p>{{ score.score }}</p>

                    </div>
                    <p>{{ activeCourse.name }}</p>
                </div>

            </div>
        </section>

    </div>
    <ScoreModal />
</template>


<script setup>
import { AppState } from '@/AppState';
import { coursesService } from '@/services/coursesService';
import { scoresService } from '@/services/ScoresService';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ScoreModal from '../components/ScoreModal.vue'


const scores = computed(() => AppState.scores)
const activeCourse = computed(() => AppState.activeCourse)
const route = useRoute()

onMounted(() => {
    { getCoursebyId() }
    { getScoresbyCourseId() }

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