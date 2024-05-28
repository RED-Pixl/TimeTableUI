<script setup>
import Course from './Course.vue';
</script>

<script>
export default {
    components: {
        Course
    }
}
</script>

<template>
    <h1 class="poppins-medium">Kurse</h1>
    <div>
      <Course></Course>
      <Course></Course>
      <Course></Course>
      <Course></Course>
      <Course></Course>
      <Course></Course>
    </div>
</template>

<style scoped>
h1 {
    text-align: left;
    display: block;
    font-family: 'Poppins';
    color: #0d0d0d;
    font-size: 3rem;
}

@media only screen and (max-width: 600px) {
  h1 {
    text-align: center;
  }
}

div {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
}
</style>
