<template>
  <div class="about text-center">
    <div v-if="account">
      <h1>Welcome {{ account.name }}</h1>
      <img class="rounded" :src="account.picture" alt="" />
      <p>{{ account.email }}</p>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#groupModal">
        Launch demo modal
      </button>
    </div>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </div>
  <GroupModal />
</template>

<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import GroupModal from '@/components/GroupModal.vue';
import { scoresService } from '@/services/ScoresService.js';
import Pop from '@/utils/Pop.js';

const account = computed(() => AppState.account)

async function createGroup() {

}

async function getScoresbyAccountId() {
  try {
    const accountId = account.id
    await scoresService.getScoresbyAccountId(accountId)

  } catch (error) {
    Pop.error(error)
  }

}
</script>

<style scoped lang="scss">
img {
  max-width: 100px;
}
</style>
