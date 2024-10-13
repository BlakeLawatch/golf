<template>
    <div class="container-fluid">
        <section class="row">
            <div>
                <ScoreModal />
            </div>
            <div class="text-center pt-5">
                <p>{{ scores }}</p>
                <p>{{ activeCourse }}</p>
            </div>
        </section>

    </div>
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