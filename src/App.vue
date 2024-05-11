<script setup>
import Login from './components/Login.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<script>
export default {
    data() {
        return {
            login: false
        }
    },
    components: {
        Login,
        Sidebar
    }
}
</script>

<template>
    <Login v-if="!login" @login="login = true"></Login>
    <Sidebar v-if="login"></Sidebar>
</template>

<style scoped>
</style>
