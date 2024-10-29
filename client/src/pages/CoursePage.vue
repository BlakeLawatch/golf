<template>
    <div v-if="activeCourse" class="container-fluid secondary-bg">
        <Navbar />
        <section class="row justify-content-center">
            <div class="col-md-12 col-6 d-flex justify-content-around p-4">
                <div>
                    <button v-if="account" type="button" class="mdi mdi-pen btn btn-primary rounded-pill"
                        data-bs-toggle="modal" data-bs-target="#ScoreModal">
                        Add Score
                    </button>
                </div>
                <div>
                    <h1 class="text-light permanent-marker">{{ activeCourse.name }}</h1>
                </div>

            </div>

            <div class="col-md-2 col-6 text-center" v-for="filter in filters" :key="filter">
                <button @click="changeFilterType(filter)">{{ filter }}</button>
            </div>
            <div class="col-md-6"></div>


            <div class="col-6">
                <div class="text-center pt-5">
                    <div class="d-flex" v-for="score in scores" :key="score.id">
                        <p>{{ score.creator.name }}</p>
                        <p class="ms-5">{{ score.score }}</p>

                    </div>

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
import Navbar from '@/components/Navbar.vue';


const scores = computed(() => AppState.scores)
const activeCourse = computed(() => AppState.activeCourse)
const route = useRoute()
const account = computed(() => AppState.account)
const filters = ["Your Scores", "Your Group", "All Scores"]

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

// async function changeFilterType(filter) {
//     try {
//         await scoresService.changeFilterType(filter)
//         return
//     } catch (error) {
//         Pop.error(error)
//     }
// }




</script>


<style lang="scss" scoped>
.main-style {
    color: linear-gradient;
}
</style>