<template>
  <div class="container-fluid">
    <section class="row justify-content-around master-bg">
      <Navbar />
      <h1 class="masters-yellow shadow-main text-center">SELECT YOUR COURSE</h1>
      <div class="d-flex justify-content-center col-6 py-4" v-for="course in courses" :key="course.id">
        <router-link :to="{ name: 'Course', params: { courseId: course.id } }">
          <CoursesComponent :course="course" />

        </router-link>

        <div>
          <!-- <p class="f2">{{ course.name }}</p>
          <p class="f4">{{ course.city }}</p>
          <img :src="course.coverImg" alt=""> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

import Pop from '../utils/Pop';
import { computed, onMounted } from 'vue'
import { coursesService } from '../services/coursesService.js'
import { AppState } from '../AppState'
import CoursesComponent from '../components/CoursesComponent.vue';
import Navbar from '@/components/Navbar.vue';
import { groupsService } from '@/services/groupsService.js';


const courses = computed(() => AppState.courses)

onMounted(() => {
  { getCourses() }
  { getGroups() }
})

async function getCourses() {
  try {
    await coursesService.getCourses()
  } catch (error) {
    Pop.error(error)
  }
}
async function getGroups() {
  try {
    await groupsService.getGroups()
  }
  catch (error) {
    Pop.error(error);
  }
}


</script>


<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
