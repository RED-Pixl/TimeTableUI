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
      this.$emit(value);
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
      this.$emit(value);
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
    <div class="selector accent-glow"></div>
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

  <div class="profile">
    <img src="/profile.png" alt="">
    <p class="poppins-medium">Simon<button @click="this.$emit('logout')" class="poppins-regular btn-primary accent-glow">Logout</button></p>
  </div>

  <div class="mobile" @focus="selectorYstr = 'calc(100% - 8rem)'">
    <div class="selector accent-glow"></div>
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
  background-color: var(--bg-color-secondary);
  color: var(--text-color);
  width: 24rem;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 0rem 3rem 3rem 0rem;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
}

.desktop>h1 {
  margin-block: 4rem;
  margin-inline: 2rem;
  text-align: left;
  display: block;
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

.desktop>h1:hover {
  scale: 1.2;
  translate: 2rem;
}

.menue-link>button:hover {
  scale: 1.2;
  translate: 2rem;
}

.selector {
  background-color: var(--accent-color);
  width: 4rem;
  height: 4rem;
  position: fixed;
  border-radius: 100%;
}

.profile {
  position: fixed;
  margin-inline: 2rem;
  bottom: 2rem;
  font-size: 1rem;
  display: flex;
}

.profile>img{
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
  margin-right: 2rem;
  box-shadow: #0000001a 0px 2px 5px 0px, #00000017 0px 9px 9px 0px, #0000000c 0px 20px 12px 0px, #00000002 0px 36px 14px 0px;
}

.profile>p {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.profile>p>button {
  width: 6rem;
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

  .profile {
    flex-direction: column;
    margin-inline: 1.5rem;
  }

  .profile>img {
    width: 5rem;
    height: 5rem;
  }

  .profile>p {
    text-align: center;
    width: 5rem;
    margin-top: 0.5rem;
  }

  .profile>p>button {
    width: 5rem;
    margin-top: 1.5rem;
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

  .profile {
    display: none;
  }

  .mobile {
    position: fixed;
    background-color: var(--bg-color-secondary);
    width: 80%;
    height: 8rem;
    bottom: 0;
    left: 0;
    padding-inline: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 3rem 3rem 0rem 0rem;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  }

  .mobile>div {
    margin-inline: 0rem;
  }

  .menue-link {
    margin-bottom: 6rem;
  }

  .selector {
    bottom: 5rem;
    left: calc((v-bind(selectorXstr) + 1.25rem) - 2rem);
  }
}
</style>