<script>
export default {
  data() {
    return {
      selected: 'dashboard',
      selectorY: 200
    }
  },
  methods: {
    select(value) {
      this.selected = value;
      switch (value) {
        case 'dashboard':
        selectorY = 200;

        case 'courses':
        selectorY = 300;

        case 'messages':
        selectorY = 400;

        case 'calendar':
        selectorY = 500;

        case 'settings':
        selectorY = 600;
      }
      animate();
    },

    animate() {
      console.log('animate');
      const selector = this.$refs.selector;
      while (selector.style.top != selectorY) {
        if (selector.style.top > selectorY) {
          selector.style.top -= 1;
        } else if (selector.style.top < selectorY) {
          selector.style.top += 1;
        }
      }
    }
  },
}
</script>

<template>
  <div class="desktop">
    <h1 class="logoText poppins-semibold">TimeTable</h1>
    <a class="poppins-medium" @click="select('dashboard')">Dashboard</a>
    <a class="poppins-medium" @click="select('courses')">Kurse</a>
    <a class="poppins-medium" @click="select('messages')">Nachrichten</a>
    <a class="poppins-medium" @click="select('calendar')">Kalender</a>
    <a class="poppins-medium" @click="select('settings')">Einstellungen</a>
  </div>
  <div class="selector"></div>
</template>

<style scoped>
.desktop {
  position: fixed;
  background-color: #cccccc;
  width: 24rem;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -100;
}

.desktop > h1, a {
  margin-block: 4rem;
  margin-inline: 2rem;
  text-align: left;
  display: block;
  font-family: 'Poppins';
  color: #0d0d0d;
}

.desktop > a {
  font-size: 1.5rem;
}

.desktop > h1:hover, a:hover {
  scale: 1.2;
}

.selector {
  background-color: #ff8d4c;
  width: 4rem;
  height: 4rem;
  z-index: -99;
  position: fixed;
  border-radius: 100%;
  box-shadow: #ff8e4c1a 0px 2px 5px 0px, #ff8d4c17 0px 9px 9px 0px, #ff8d4c0c 0px 20px 12px 0px, #ff8d4c02 0px 36px 14px 0px;
}

@media only screen and (max-width: 1200px) {
  .desktop {
    width: 10rem;
  }

  .desktop > h1, a {
    display: none;
  }
}
</style>