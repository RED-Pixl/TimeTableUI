<script>
export default {
    data() {
        return {
            schools: ['Viscardi Gymnasium FFB', 'Graf-Rasso Gymnasium FFB'],
            school: '',
            username: '',
            password: '',
            succesfull: true,
        };
    },
    mounted() {
        //Get all registered schools from the api and save in schools
    },
    methods: {
        login() {
            // Perform login logic here
            if (this.school==='Viscardi Gymnasium FFB' && this.username==='simon' && this.password==='1234') {
                this.$emit('login');
            } else {
                this.succesfull = false;
            }
        },
    },
};
</script>

<template>
    <form>
        <label>Schule:</label>
        <select v-model="school" @click="succesfull=true">
            <option v-for="option in schools">{{option}}</option>
        </select>
        <label>Benutzername:</label>
        <input type="text" v-model="username" @click="succesfull=true">
        <label>Password:</label>
        <input type="password" v-model="password" @click="succesfull=true">
        <label class="warning" v-if="!succesfull">Falsche Benutzername oder Passwort</label>
        <div @click="login">Login</div>
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
        background-color: #cccccc;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    }

    input, div, select, option {
        margin: 0.5rem;
        font-family: 'Poppins';
    }

    select {
        width: 16rem;
        padding: 0.5rem;
        border-radius: 1rem;
        border: none;
        background-color: #e6e6e6;
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
        background-color: #e6e6e6;
    }

    input:focus {
        border: none;
        outline: #ff8d4c solid 0.1rem;
        outline-offset: -0.15rem;
    }

    div {
        margin-top:1.5rem;
        padding: 0.5rem;
        border-radius: 1rem;
        border: none;
        background-color: #ff8d4c;
        align-items: center;
        text-align: center;
        cursor: pointer;
        width: 10rem
    }

    .warning {
        color: #ff0f0f;
        font-size: 0.75rem;
    }
</style>
