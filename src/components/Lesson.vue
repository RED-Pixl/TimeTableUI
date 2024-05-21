<script>
export default {
    data() {
        return {
            rounded: '',
            marginb: '0.5rem',
        }
    },
    props: {
        subject: String,
        teacher: String,
        time: String,
        room: String,
        state: String,
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            if (this.state === 'ab') {
                this.rounded = '1.5rem 1.5rem 1rem 1rem';
            } else if (this.state === 'bb') {
                this.rounded = '1rem 1rem 1.5rem 1.5rem';
                this.marginb = '1rem';
            } else if (this.state === 'ib') {
                this.rounded = '1.5rem 1.5rem 1.5rem 1.5rem';
                this.marginb = '1rem';
            } else {
                this.rounded = '1rem 1rem 1rem 1rem';
            }
        }
    }
}
</script>

<template>
    <div @load="this.load()">
        <h3 class="poppins-medium">{{ subject }} - {{ teacher }}</h3>
        <p class="poppins-medium">{{ time }} - {{ room }}</p>
    </div>
</template>

<style scoped>
div {
    width: 100%;
    background-color: #cccccc;
    display:flex;
    flex-direction: column;
    border-radius: v-bind(rounded);
    margin-bottom: v-bind(marginb);
}

h3 {
    font-size: 1.5rem;
    margin-top:0.5rem;
    margin-left:1rem;
    margin-bottom:0rem;
    align-self: flex-start;
}

p {
    font-size: 1rem;
    margin-top:0rem;
    margin-left:1rem;
    margin-bottom:0.5rem;
    color: #737373;
}
</style>