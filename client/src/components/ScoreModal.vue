<template>
    <div class="modal fade" id="ScoreModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="fs-5">Add Score</h1>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="addScore()">
                        <div class="mb-3">
                            <label for="score" class="form-label">Score?</label>
                            <input v-model="editable.score" type="number" class="form-control" id="score"
                                aria-describedby="score">
                        </div>
                        <button type="submit" class="btn btn-primary">Create</button>
                    </form>
                </div>


            </div>
        </div>
    </div>
</template>


<script setup>
import { scoresService } from '@/services/ScoresService';
import Pop from '@/utils/Pop';
import { Modal } from 'bootstrap';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const editable = ref({})


async function addScore() {
    try {
        const scoreData = editable.value
        scoreData.courseId = route.params.courseId
        await scoresService.addScore(scoreData)
        editable.value = {}
        Modal.getOrCreateInstance("#ScoreModal").hide()
    } catch (error) {
        Pop.error(error)
    }
}

</script>


<style lang="scss" scoped></style>