<script>
export default {
  data() {
    return {
      selected: 'dashboard',
      selectorY: 188,
      selectorYcurrent: 188,
      selectorYstr: '188px'
    }
  },
  methods: {
    select(value) {
      this.selected = value;
      switch (value) {
        case 'dashboard':
        this.selectorY = 188;
        break;

        case 'courses':
        this.selectorY = 292;
        break;

        case 'messages':
        this.selectorY = 396;
        break;

        case 'calendar':
        this.selectorY = 500;
        break;

        case 'settings':
        this.selectorY = 604;
        break;
      }
      this.animate();
    },

    animate() {
      if (this.selectorYcurrent > this.selectorY) {
        this.selectorYcurrent -= 2;
      } else if (this.selectorYcurrent < this.selectorY) {
        this.selectorYcurrent += 2;
      }
      this.selectorYstr = this.selectorYcurrent.toString() + 'px';
      if (this.selectorYcurrent != this.selectorY) {
        setTimeout(this.animate, 5)
      }
    }
  },
}
</script>

<template>
  <div class="desktop">
  <div class="selector"></div>
    <h1 class="logoText poppins-semibold">TimeTable</h1>
    <div class="menue-link">
    <button class="poppins-medium" @click="select('dashboard')">Dashboard</button>
    <img src="/home.png" @click="select('dashboard')">
    </div>
    <div class="menue-link">
    <button class="poppins-medium" @click="select('courses')">Kurse</button>
    <img src="/school.png" @click="select('courses')">
    </div>
    <div class="menue-link">
    <button class="poppins-medium" @click="select('messages')">Nachrichten</button>
    <img src="/chat.png" @click="select('messages')">
    </div>
    <div class="menue-link">
    <button class="poppins-medium" @click="select('calendar')">Kalender</button>
    <img src="/calendar_month.png" @click="select('calendar')">
    </div>
    <div class="menue-link">
    <button class="poppins-medium" @click="select('settings')">Einstellungen</button>
    <img src="/settings.png" @click="select('settings')">
    </div>
  </div>
</template>

<style scoped>
.desktop {
  position: fixed;
  background-color: #cccccc;
  width: 24rem;
  height: 100%;
  top: 0;
  left: 0;
}

.desktop > h1 {
  margin-block: 4rem;
  margin-inline: 2rem;
  text-align: left;
  display: block;
  font-family: 'Poppins';
  color: #0d0d0d;
  background-color: transparent;
  border: none;
  transition: ease-in-out 0.2s;
  font-size: 3rem;
}

.menue-link {
  margin-block: 4rem;
  margin-inline: 2rem;
  display: flex;
  justify-content: space-between;
}

.menue-link > button {
  text-align: left;
  font-family: 'Poppins';
  color: #0d0d0d;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  transition: ease-in-out 0.2s;
}

.menue-link > img {
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  z-index: 1;
  transition: ease-in-out 0.2s;
}

.desktop > h1:hover, button:hover {
  scale: 1.2;
  translate: 2rem;
}

.selector {
  background-color: #ff8d4c;
  width: 4rem;
  height: 4rem;
  position: fixed;
  border-radius: 100%;
  box-shadow: #ff8e4c1a 0px 2px 5px 0px, #ff8d4c17 0px 9px 9px 0px, #ff8d4c0c 0px 20px 12px 0px, #ff8d4c02 0px 36px 14px 0px;
  top: v-bind(selectorYstr);
  left: 21rem;
}

@media only screen and (max-width: 1200px) {
  .desktop {
    width: 8rem;
  }

  .menue-link > button {
    display: none;
  }

  .desktop > h1 {
    color: transparent;
  }

  .menue-link > img {
    margin-inline: auto;
  }

  .selector {
    left: 5rem;
  }
}
</style>