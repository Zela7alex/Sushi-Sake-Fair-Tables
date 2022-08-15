<template>
  <div class="home">
    <div id="server-names">
      <h4>Tues, October 8th 2022</h4>
      <h2>Server Count:</h2>
      <ServersHeadCount />
      <i class="fa fa-user-plus" aria-hidden="true" id="add-server"></i>
      <button id="erase-all">ERASE ALL</button>
    </div>
    <div id="inside"></div>
  </div>
</template>

<script>
import ServersHeadCount from '@/components/ServersHeadCount.vue'
export default { components: { ServersHeadCount } }
</script>

<style lang="css" scoped>
.home {
  color: white;
  position: relative;
}
h2 {
  padding: 0;
  margin-top: 0;
}
h4 {
  margin-bottom: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#server-names {
  background: rgb(68, 63, 63, 0.4);
  height: 60vh;
  width: 20vw;
  position: absolute;
  top: 25vh;
  right: 1vw;
  overflow-y: auto;
}
#add-server {
  text-align: center;
  background: rgba(145, 139, 139, 0.3);
  padding: 0.6em 0.6em 0.6em 0.7em;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 40px;
  margin-top: 3px;
}
#erase-all {
  font-size: 12px;
  color: white;
  cursor: pointer;
  background: rgba(250, 1, 1, 0.3);
  padding: 0.6em 0.6em 0.6em 0.7em;
  border-radius: 4px;
}
#inside {
  width: 58vw;
  height: 85vh;
  background: rgba(67, 64, 64, 0.4);
  position: absolute;
  top: 15vh;
  left: 18vw;
  border-top: 1px solid rgb(134, 131, 131);
  border-left: 1px solid rgb(134, 131, 131);
}
</style>
