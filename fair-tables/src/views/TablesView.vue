<template>
  <div class="home">
    <div id="server-names">
      <h4>Tues, October 8th 2022</h4>
      <h2>Server Count:</h2>
      <ServersHeadCount />
      <i class="fa fa-user-plus" aria-hidden="true" id="add-server"></i>
      <button id="erase-all">ERASE ALL</button>
    </div>
    <div class="reset-shift">
      <i style="font-size: 14px" class="fa reset" id="spin">&#xf021;</i>
      <p>Reset Shift</p>
    </div>
    <!----------------------------------TABLES 20-80------------------------------------------>
    <div id="inside"></div>
    <!----------------------------------TABLES 1-16------------------------------------------->
    <TableEl id="table-1" class="tables"
      ><span class="table-num">1</span></TableEl
    >
    <TableEl id="table-2" class="tables"
      ><span class="table-num">2</span></TableEl
    >
    <TableEl id="table-3" class="tables"
      ><span class="table-num">3</span></TableEl
    >
    <TableEl id="table-4" class="tables"
      ><span class="table-num">4</span></TableEl
    >
    <TableEl id="table-5" class="tables"
      ><span class="table-num">5</span></TableEl
    >
    <TableEl id="table-6" class="tables"
      ><span class="table-num">6</span></TableEl
    >
    <TableEl id="table-7" class="tables"
      ><span class="table-num">7</span></TableEl
    >
    <TableEl id="table-8" class="tables"
      ><span class="table-num">8</span></TableEl
    >
    <TableEl id="table-9" class="tables"
      ><span class="table-num">9</span></TableEl
    >
    <TableEl id="table-10" class="tables"
      ><span class="table-num">10</span></TableEl
    >
    <TableEl id="table-11" class="tables"
      ><span class="table-num">11</span></TableEl
    >
    <TableEl id="table-12" class="tables"
      ><span class="table-num">12</span></TableEl
    >
    <TableEl id="table-13" class="tables"
      ><span class="table-num">13</span></TableEl
    >
  </div>
</template>

<script>
import ServersHeadCount from '@/components/ServersHeadCount.vue'
import TableEl from '@/components/TableEl.vue'
export default { components: { ServersHeadCount, TableEl } }
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
#add-server:active {
  background: rgba(224, 219, 219, 0.3);
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
.reset-shift {
  color: white;
  z-index: 1;
  position: absolute;
  left: 90vw;
  top: 88vh;
  font-size: 10px;
}
.reset {
  background: rgba(152, 145, 145, 0.3);
  padding: 0.6em 0.6em 0.6em 0.7em;
  border-radius: 6px;
  cursor: pointer;
}
.reset:active {
  background: rgb(243, 34, 34, 0.3);
}
#table-1 {
  position: absolute;
  top: 88vh;
  left: 2vw;
  text-align: right;
}
#table-2 {
  position: absolute;
  top: 76vh;
  left: 2vw;
  text-align: right;
}
#table-3 {
  position: absolute;
  top: 64vh;
  left: 2vw;
  text-align: right;
}
#table-4 {
  position: absolute;
  top: 52vh;
  left: 2vw;
  text-align: right;
}
#table-5 {
  position: absolute;
  top: 40vh;
  left: 2vw;
  text-align: right;
}
#table-6 {
  position: absolute;
  top: 28vh;
  left: 2vw;
  text-align: right;
}
#table-7 {
  position: absolute;
  top: 15vh;
  left: 2vw;
  text-align: right;
}
#table-8 {
  position: absolute;
  top: 88vh;
  left: 12vw;
  text-align: right;
}
#table-9 {
  position: absolute;
  top: 75vh;
  left: 12vw;
  text-align: right;
}
#table-10 {
  position: absolute;
  top: 62vh;
  left: 12vw;
  text-align: right;
}
#table-11 {
  position: absolute;
  top: 43vh;
  left: 12vw;
  text-align: right;
}
#table-12 {
  position: absolute;
  top: 29vh;
  left: 12vw;
  text-align: right;
}
#table-13 {
  position: absolute;
  top: 16vh;
  left: 12vw;
  text-align: right;
}

.table-num {
  font-size: 15px;
  padding: 4px;
  color: rgb(250, 242, 242);
}
</style>
