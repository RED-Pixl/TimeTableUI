<script>
export default {
    data() {
        return {
            schools: ['Viscardi Gymnasium FFB', 'Graf-Rasso Gymnasium FFB'],
            school: '',
            username: '',
            password: '',
        };
    },
    mounted() {
        //Get all registered schools from the api and save in schools
    },
    methods: {
        login() {
            // Perform login logic here
            console.log('Hi')
            console.log('Login successful! + School: ' + this.school + ' + Username: ' + this.username + ' + Password: ' + this.password);
            this.$emit('login');
        },
    },
};
</script>

<template>
    <form>
        <label>Schule:</label>
        <select v-model="school">
            <option v-for="option in schools">{{option}}</option>
        </select>
        <label>Benutzername:</label>
        <input type="text" v-model="username">
        <label>Password:</label>
        <input type="password" v-model="password">
        <button @click="login">Login</button>
    </form>
</template>

<style scoped>
    form {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        height: fit-content;
        padding: 2rem;
        border-radius: 3rem;
        font-family: 'Poppins';
        color: #0d0d0d;
        background-color: #E6E6E6;
    }

    input, button, select, option {
        margin: 0.5rem;
        font-family: 'Poppins';
    }

    select {
        width: 16rem;
        padding: 0.5rem;
        border-radius: 1rem;
        border: none;
    }

    select:focus {
        outline: #ff8d4c solid 0.1rem;
        outline-offset: -0.15rem;
    }

    input {
        width: 15rem;
        padding: 0.5rem;
        border-radius: 1rem;
        border: none;
    }

    input:focus {
        border: none;
        outline: #ff8d4c solid 0.1rem;
        outline-offset: -0.15rem;
    }

    button {
        margin-top:1.5rem;
        padding: 0.5rem;
        border-radius: 1rem;
        border: none;
        background-color: #ff8d4c;
        cursor: pointer;
        width: 10rem
    }
</style>
