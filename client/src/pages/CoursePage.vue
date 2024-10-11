<template>
    <div class="container-fluid">
        <section class="row">
            <div class="text-center pt-5">
                <button @click="addScore()" class="mdi mdi-plus-thick rounded-pill">Add Score</button>
                <p>{{ scores }}</p>
            </div>
        </section>

    </div>
</template>


<script>
import { AppState } from '@/AppState';
import { scoresService } from '@/services/ScoresService';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';


const scores = computed(() => AppState.scores)
const route = useRoute()

onMounted(() => {
    { getScoresbyCourseId() }
})

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