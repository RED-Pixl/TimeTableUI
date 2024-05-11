<script>
export default {
  data() {
    return {
      selected: 'dashboard',
      selectorY: 188,
      selectorYcurrent: 188,
      selectorYstr: '188px',
      selectorX: 50,
      selectorXcurrent: 50,
      selectorXstr: '50%',
    }
  },
  mounted() {
    this.selectorX = Math.round(this.$refs.dashboard.getBoundingClientRect().left);
    this.selectorXcurrent = this.selectorX
    this.selectorXstr = this.selectorX.toString() + 'px';
  },
  methods: {
    selectY(value) {
      console.log(value);
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
      this.animateY();
    },

    selectX(value) {
      console.log(value);
      this.selected = value;
      switch (value) {
        case 'dashboard':
          this.selectorX = Math.round(this.$refs.dashboard.getBoundingClientRect().left);
          break;

        case 'courses':
          this.selectorX = Math.round(this.$refs.courses.getBoundingClientRect().left);
          break;

        case 'messages':
          this.selectorX = Math.round(this.$refs.messages.getBoundingClientRect().left);
          break;

        case 'calendar':
          this.selectorX = Math.round(this.$refs.calendar.getBoundingClientRect().left);
          break;

        case 'settings':
          this.selectorX = Math.round(this.$refs.settings.getBoundingClientRect().left);
          break;
      }
      this.animateX();
    },

    animateY() {
      if (this.selectorYcurrent > this.selectorY) {
        this.selectorYcurrent -= 2;
      } else if (this.selectorYcurrent < this.selectorY) {
        this.selectorYcurrent += 2;
      }
      this.selectorYstr = this.selectorYcurrent.toString() + 'px';
      if (this.selectorYcurrent != this.selectorY) {
        setTimeout(this.animateY, 5)
      }
    },

    animateX() {
      if (this.selectorXcurrent > this.selectorX) {
        this.selectorXcurrent -= 1;
      } else if (this.selectorXcurrent < this.selectorX) {
        this.selectorXcurrent += 1;
      }
      this.selectorXstr = this.selectorXcurrent.toString() + 'px';
      if (this.selectorXcurrent != this.selectorX) {
        setTimeout(this.animateX, 2)
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
      <button class="poppins-medium" @click="selectY('dashboard')">Dashboard</button>
      <img src="/home.png" @click="selectY('dashboard')">
    </div>
    <div class="menue-link">
      <button class="poppins-medium" @click="selectY('courses')">Kurse</button>
      <img src="/school.png" @click="selectY('courses')">
    </div>
    <div class="menue-link">
      <button class="poppins-medium" @click="selectY('messages')">Nachrichten</button>
      <img src="/chat.png" @click="selectY('messages')">
    </div>
    <div class="menue-link">
      <button class="poppins-medium" @click="selectY('calendar')">Kalender</button>
      <img src="/calendar_month.png" @click="selectY('calendar')">
    </div>
    <div class="menue-link">
      <button class="poppins-medium" @click="selectY('settings')">Einstellungen</button>
      <img src="/settings.png" @click="selectY('settings')">
    </div>
  </div>

  <div class="mobile" @focus="selectorYstr = 'calc(100% - 8rem)'">
    <div class="selector"></div>
    <div class="menue-link" ref="courses">
      <img src="/school.png" @click="selectX('courses')">
    </div>
    <div class="menue-link" ref="messages">
      <img src="/chat.png" @click="selectX('messages')">
    </div>
    <div class="menue-link" ref="dashboard">
      <img src="/home.png" @click="selectX('dashboard')">
    </div>
    <div class="menue-link" ref="calendar">
      <img src="/calendar_month.png" @click="selectX('calendar')">
    </div>
    <div class="menue-link" ref="settings">
      <img src="/settings.png" @click="selectX('settings')">
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
  border-radius: 0rem 3rem 3rem 0rem;
}

.desktop>h1 {
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

.menue-link>button {
  text-align: left;
  font-family: 'Poppins';
  color: #0d0d0d;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  transition: ease-in-out 0.2s;
}

.menue-link>img {
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  transition: ease-in-out 0.2s;
}

.desktop>h1:hover,
button:hover {
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
}

@media only screen and (min-width: 1201px) {
  .selector {
    left: 21rem;
  }
}

@media only screen and (max-width: 1200px) {
  .desktop {
    width: 8rem;
  }

  .menue-link>button {
    display: none;
  }

  .desktop>h1 {
    color: transparent;
  }

  .menue-link>img {
    margin-inline: auto;
  }

  .selector {
    left: 5rem;
  }
}

@media only screen and (min-width: 601px) {
  .mobile {
    display: none;
  }

  .selector {
    top: v-bind(selectorYstr);
  }
}

@media only screen and (max-width: 600px) {

  .desktop {
    display: none;
  }

  .mobile {
    position: fixed;
    background-color: #cccccc;
    width: 80%;
    height: 10rem;
    bottom: 0;
    left: 0;
    padding-inline: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 3rem 3rem 0rem 0rem;
  }

  .mobile>div {
    margin-inline: 0rem;
  }

  .menue-link {
    transition: ease-in-out 0.2s;
    margin-bottom: 6rem;
  }

  .menue-link:hover {
    scale: 1.2;
  }

  .selector {
    bottom: 7rem;
    left: calc((v-bind(selectorXstr) + 1.25rem) - 2rem);
  }
}
</style>