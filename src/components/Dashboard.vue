<script setup>
import Lesson from './Lesson.vue';
</script>

<script>
export default {
    data() {
        return {
            lessons: [
              ['Deutsch', 'Machnik', '07:50 - 08:35', '082', 'ab'],
              ['Latein', 'Heidenreich', '08:35 - 09:20', '082', 'bb'],
              ['Mathematik', 'Mosinger', '09:35 - 10:20', '082', 'ab'],
              ['Wirtschaft', 'Bode', '10.20-11:05', '082', 'bb'],
              ['Englisch', 'Ullman', '11:30-12:15', '082', 'ab'],
              ['Physik', 'Schuster', '12:15-13:00', '063', 'bb']
            ]
        }
    },
    components: {
        Lesson
    }
}
</script>

<template>
    <h1 class="poppins-medium">Dashboard</h1>
    <Lesson v-for="lesson in lessons" :subject="lesson[0]" :teacher="lesson[1]" :time="lesson[2]" :room="lesson[3]" :state="lesson[4]"</Lesson>
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
</style>
