<script setup>
</script>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
  <div>
    <img src="/pattern.png" alt="">
    <h2 class="poppins-medium">Hello</h2>
  </div>
</template>

<style scoped>
div {
  width: 20rem;
  margin-right: 3rem;
  margin-bottom: 3rem;
  border-radius: 3rem;
  overflow: hidden;
  background-color: var(--bg-color-secondary);
  color: var(--text-color);
  box-shadow: #0000001a 0px 2px 5px 0px, #00000017 0px 9px 9px 0px, #0000000c 0px 20px 12px 0px, #00000002 0px 36px 14px 0px;
}

img {
  width: 20rem;
  height: 12rem;
  object-fit: cover;
}

h2 {
  padding: 0 1.5rem;
}
</style>
