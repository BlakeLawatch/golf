<script setup>

</script>

<template>
  <div class="container-fluid masters-green-bg">
    <section class="row shadow justify-content-center">
      <div class="col-4 text-center">
        <h1 class="masters-yellow">SELECT YOUR COURSE</h1>
      </div>
    </section>
  </div>
</template>

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
