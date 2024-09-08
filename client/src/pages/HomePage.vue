<template>
  <div class="container-fluid">
    <section class="row justify-content-center masters-green-bg">
      <h1 class="masters-yellow shadow-main text-center">SELECT YOUR COURSE</h1>
      <div class="course-card d-flex col-3 text-center" v-for="course in courses" :key="course">
        <CourseComponent :course="course" />

        <!-- <div>
          <p class="f2">{{ course.name }}</p>
          <p class="f4">{{ course.city }}</p>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script setup>

import Pop from '../utils/Pop';
import { computed, onMounted } from 'vue'
import { coursesService } from '../services/coursesService.js'
import { AppState } from '../AppState'
import CourseComponent from '../components/CourseComponent.vue';

const courses = computed(() => AppState.courses)

onMounted(() => {
  { getCourses() }
})

async function getCourses() {
  try {
    await coursesService.getCourses()
  } catch (error) {
    Pop.error(error)
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

.course-card {
  border: .1rem solid #f4dc00;
}
</style>
