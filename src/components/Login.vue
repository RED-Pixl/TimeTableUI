<script>
import apiService from '../api_handling/apiService';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            schools: [],
            school: '',
            username: '',
            password: '',
            succesfull: true,
        };
    },
    mounted() {
        let schools = []
        //Get all registered schools from the api and save in schools
        schools = apiService.schools().then(res =>
            res.forEach(school => {
                this.schools.push(school.title)
            })
        )
        .catch(error => {
                console.error('Error fetching schools:', error);
        });
    },
    methods: {
        ...mapActions(['saveTokens']),
        goToSidebar() {
            this.$router.push({ name: 'About' });
        },
        async login(){
            try {
                const response = await apiService.login({ username: this.username, password: this.password });

                if (response.status === 200) {
                    const { jwt, refreshToken } = response.data.tokens;

                    if (jwt && refreshToken) {
                        await this.saveTokens({ jwt, refreshToken });
                        // Redirect user to homepage
                        this.goToSidebar();
                    } else {
                        throw new Error('Invalid response: Tokens missing or invalid');
                    }
                } else {
                    throw new Error(`Unexpected response status: ${response.status}`);
                }
            } catch (error) {
                this.error = 'Invalid username or password';
                console.error('Login failed:', error);
                // Redirect user back to login?
            }
        }
    },
};
</script>

<template>
    <h1 class="logoText poppins-semibold">TimeTable</h1>
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
        <div class="btn-primary accent-glow" @click="login">Login</div>
    </form>
</template>

<style scoped>
    h1 {
        margin-block: 4rem;
        width: 100%;
        text-align: center;
        display: block;
        background-color: transparent;
        border: none;
        font-size: 3rem;
    }

    form {
        margin: auto;
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: fit-content;
        padding: 2rem;
        border-radius: 3rem;
        font-family: 'Poppins';
        color: var(--text-color);
        background-color: var(--bg-color-secondary);
        box-shadow: #0000001a 0px 2px 5px 0px, #00000017 0px 9px 9px 0px, #0000000c 0px 20px 12px 0px, #00000002 0px 36px 14px 0px;
    }

    input, select, option {
        margin: 0.5rem;
        font-family: 'Poppins';
        background-color: var(--bg-color-primary);
    }

    select {
        width: 16rem;
        padding: 0.5rem;
        border-radius: 1rem;
        border: none;
    }

    select:focus {
        outline: var(--accent-color) solid 0.15rem;
    }

    input {
        width: 15rem;
        padding: 0.5rem;
        border-radius: 1rem;
        border: none;
    }

    input:focus {
        border: none;
        outline: var(--accent-color) solid 0.15rem;
    }

    div {
        margin-top:1.5rem;
        width: 10rem;
    }

    .warning {
        color: var(--error);
        font-size: 0.75rem;
    }
</style>
