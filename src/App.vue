<script setup>
import Login from './components/Login.vue';
import Sidebar from './components/Sidebar.vue';
import Dashboard from './components/Dashboard.vue';
import Courses from './components/Courses.vue';
import Messages from './components/Messages.vue';
import Calendar from './components/Calendar.vue';
import Settings from './components/Settings.vue';
</script>

<script>
export default {
    data() {
        return {
            login: false,
            page: 'dashboard'
        }
    },
    components: {
        Login,
        Sidebar,
        Dashboard
    }
}
</script>

<template>
    <Login v-if="!login" @login="login = true"></Login>
    <Sidebar v-if="login" @dashboard="page = 'dashboard'" @courses = "page = 'courses'" @messages = "page = 'messages'" @calendar = "page = 'calendar'" @settings = "page = 'settings'" @logout = "login = false"></Sidebar>
    <div v-if="login" class="content">
        <Dashboard v-if="page === 'dashboard'"></Dashboard>
        <Courses v-if="page === 'courses'"></Courses>
        <Messages v-if="page === 'messages'"></Messages>
        <Calendar v-if="page === 'calendar'"></Calendar>
        <Settings v-if="page === 'settings'"></Settings>
    </div>
</template>

<style scoped>
.content {
    margin: 0px;
    padding-block: 2rem;
    padding-inline: 4rem;
    margin-left: 24rem;
}

@media only screen and (max-width: 1200px) {
  .content {
    margin-left: 8rem;
  }
}

@media only screen and (max-width: 600px) {
  .content {
    margin-left: 0;
    padding-inline:2rem;
  }
}
</style>
