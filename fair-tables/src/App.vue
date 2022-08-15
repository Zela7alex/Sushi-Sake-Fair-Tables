<template>
  <div id="app">
    <nav>
      <router-link to="/">Tables</router-link> |
      <router-link to="/past-sections">Past Sections</router-link>
    </nav>
    <router-view />
    <img id="sushi-logo" src="./assets/sushi-sake-logo.png" alt="ghhghg" />
  </div>
</template>

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
}
#sushi-logo {
  width: 9em;
  position: absolute;
  left: 3%;
  top: 20%;
}

nav {
  padding: 0;
  display: flex;
  flex-direction: column;
  padding: 1em;
  position: absolute;
  right: 2%;
  top: 10%;
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

nav a.router-link-exact-active {
  color: #f4f8f6;
}
</style>
