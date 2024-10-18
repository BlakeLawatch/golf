<template>
    <div class="modal fade" id="ScoreModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="fs-5">Add Score</h1>
                </div>
                <div class="modal-body">
                    <form @sumbit.prevent="addScore()">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input v-model="editable.score" type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp">

                        </div>
                    </form>
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
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
        Modal.getOrCreateInstance("ScoreModal").hide()
    } catch (error) {
        Pop.error(error)
    }
}

</script>


<style lang="scss" scoped></style>