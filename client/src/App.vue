<template>
  <div id="app">
    <nav>
      <router-link to="/" class="no-decoration">Tables</router-link>
      |
      <router-link to="/past-sections">Past Sections</router-link>|
      <router-link to="/parties-calendar">Parties Calendar</router-link>
    </nav>
    <router-view />
    <img
      id="sushi-logo"
      src="./assets/sushi-sake-logo.png"
      alt="sushi sake logo"
    />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['setAllPartiesAction', 'setAllSectionsAction']),
    ...mapActions({ initializeServerData: 'initializeServerData' }),
    ...mapActions({ initializeTableData: 'initializeTableData' }),
  },
  created() {
    this.setAllPartiesAction()
    this.setAllSectionsAction()
    this.initializeServerData(this.$store)
    this.initializeTableData(this.$store)
  },
}
</script>

<style>
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: black;
  position: relative;
}
#app {
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  overflow-y: auto;
  overflow-x: none;
  height: 100vh;
}
#sushi-logo {
  width: 9em;
  position: absolute;
  left: 3%;
  top: 5vh;
}

nav {
  padding: 0;
  display: flex;
  flex-direction: column;
  padding: 1em;
  position: absolute;
  right: 2%;
  top: 2vh;
}

nav a {
  font-weight: bold;
  color: #a3adb7;
  text-decoration: none;
  background: rgb(33, 32, 32);
  padding: 4%;
  width: 150px;
  font-size: 15px;
}
a:hover {
  text-decoration: none;
  color: white;
}

nav a.router-link-exact-active {
  color: #f4f8f6;
}
</style>
