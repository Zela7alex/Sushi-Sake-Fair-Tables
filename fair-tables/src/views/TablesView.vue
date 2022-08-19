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
    <label id="sections-switch" class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
      <p>Sections</p>
    </label>

    <!----------------------------------TABLES 20-80------------------------------------------>
    <div id="inside">
      <TableEl id="table-20" class="tables"
        ><span class="table-num">20</span></TableEl
      >
      <TableEl id="table-21" class="tables"
        ><span class="table-num">21</span></TableEl
      >
      <TableEl id="table-22" class="tables"
        ><span class="table-num">22</span></TableEl
      >
      <TableEl id="table-23" class="tables"
        ><span class="table-num">23</span></TableEl
      >
      <TableEl id="table-30" class="tables"
        ><span class="table-num">30</span></TableEl
      >
      <TableEl id="table-31" class="tables"
        ><span class="table-num">31</span></TableEl
      >
      <TableEl id="table-32" class="tables"
        ><span class="table-num">32</span></TableEl
      >
      <TableEl id="table-33" class="tables"
        ><span class="table-num">33</span></TableEl
      >
      <TableEl id="table-40" class="tables"
        ><span class="table-num">40</span></TableEl
      >
      <TableEl id="table-41" class="tables"
        ><span class="table-num">41</span></TableEl
      >
      <TableEl id="table-42" class="tables"
        ><span class="table-num">42</span></TableEl
      >
      <TableEl id="table-50" class="tables"
        ><span class="table-num">50</span></TableEl
      >
      <TableEl id="table-51" class="tables"
        ><span class="table-num">51</span></TableEl
      >
      <TableEl id="table-52" class="tables"
        ><span class="table-num">52</span></TableEl
      >
      <TableEl id="table-53" class="tables"
        ><span class="table-num">53</span></TableEl
      >
      <TableEl id="table-60" class="tables"
        ><span class="table-num">60</span></TableEl
      >
      <TableEl id="table-61" class="tables"
        ><span class="table-num">61</span></TableEl
      >
      <TableEl id="table-70" class="tables"
        ><span class="table-num">70</span></TableEl
      >
      <TableEl id="table-71" class="tables"
        ><span class="table-num">71</span></TableEl
      >
      <TableEl id="table-80" class="tables"
        ><span class="table-num">80</span></TableEl
      >
      <SectionLetters id="c">C</SectionLetters>
      <SectionLetters id="d">D</SectionLetters>
      <SectionLetters id="e">E</SectionLetters>
      <SectionLetters id="f">F</SectionLetters>
      <AssignedSectionNamesTable />
      <!--------------------------------Hostess/Parties------------------------------------->
      <div id="hostess">Hostess</div>
      <UpcomingParties id="upcoming-parties" />
    </div>
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
    <TableEl id="table-14" class="tables"
      ><span class="table-num">14</span></TableEl
    >
    <TableEl id="table-15" class="tables"
      ><span class="table-num">15</span></TableEl
    >
    <TableEl id="table-16" class="tables"
      ><span class="table-num">16</span></TableEl
    >
    <SectionLetters id="a">A</SectionLetters>
    <SectionLetters id="b">B</SectionLetters>
  </div>
</template>

<script>
import ServersHeadCount from '@/components/ServersHeadCount.vue'
import TableEl from '@/components/TableEl.vue'
import UpcomingParties from '@/components/UpcomingParties.vue'
import SectionLetters from '@/components/SectionLetters.vue'
import AssignedSectionNamesTable from '@/components/AssignedSectionNamesTable.vue'
export default {
  components: {
    ServersHeadCount,
    TableEl,
    UpcomingParties,
    SectionLetters,
    AssignedSectionNamesTable,
  },
}
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
  top: 28vh;
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
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
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
  top: 89vh;
  font-size: 10px;
}
.reset {
  background: rgba(152, 145, 145, 0.3);
  padding: 0.6em 0.6em 0.6em 0.7em;
  border-radius: 6px;
  cursor: pointer;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
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
#table-14 {
  position: absolute;
  top: 3vh;
  left: 23vw;
  text-align: right;
}
#table-15 {
  position: absolute;
  top: 3vh;
  left: 33vw;
  text-align: right;
}
#table-16 {
  position: absolute;
  top: 3vh;
  left: 43vw;
  text-align: right;
}
/*----------------------TABLES 20-80-----------------------------*/
#table-20 {
  position: absolute;
  top: 73vh;
  left: 2vw;
  text-align: right;
}
#table-21 {
  position: absolute;
  top: 28vh;
  left: 2vw;
  text-align: right;
}
#table-22 {
  position: absolute;
  top: 15vh;
  left: 2vw;
  text-align: right;
}
#table-23 {
  position: absolute;
  top: 2vh;
  left: 2vw;
  text-align: right;
}
#table-30 {
  position: absolute;
  top: 73vh;
  left: 10vw;
  text-align: right;
}
#table-31 {
  position: absolute;
  top: 28vh;
  left: 10vw;
  text-align: right;
}
#table-32 {
  position: absolute;
  top: 15vh;
  left: 10vw;
  text-align: right;
}
#table-33 {
  position: absolute;
  top: 2vh;
  left: 10vw;
  text-align: right;
}
#table-40 {
  position: absolute;
  top: 28vh;
  left: 18vw;
  text-align: right;
}
#table-41 {
  position: absolute;
  top: 15vh;
  left: 18vw;
  text-align: right;
}
#table-42 {
  position: absolute;
  top: 2vh;
  left: 18vw;
  text-align: right;
}
#table-50 {
  position: absolute;
  top: 41vh;
  left: 26vw;
  text-align: right;
}
#table-51 {
  position: absolute;
  top: 28vh;
  left: 26vw;
  text-align: right;
}
#table-52 {
  position: absolute;
  top: 15vh;
  left: 26vw;
  text-align: right;
}
#table-53 {
  position: absolute;
  top: 2vh;
  left: 26vw;
  text-align: right;
}
#table-60 {
  position: absolute;
  top: 28vh;
  left: 40vw;
  text-align: right;
}
#table-61 {
  position: absolute;
  top: 15vh;
  left: 40vw;
  text-align: right;
}
#table-70 {
  position: absolute;
  top: 28vh;
  left: 50vw;
  text-align: right;
}
#table-71 {
  position: absolute;
  top: 15vh;
  left: 50vw;
  text-align: right;
}
#table-80 {
  position: absolute;
  top: 41vh;
  left: 52vw;
  text-align: right;
}
#hostess {
  position: absolute;
  top: 2vh;
  left: 43vw;
  text-align: right;
  border: 1px solid rgb(134, 131, 131);
  padding: 1em 2em;
}
#upcoming-parties {
  position: absolute;
  top: 54vh;
  left: 32vw;
}
#a {
  position: absolute;
  top: 75vh;
  left: 8.4vw;
}
#b {
  position: absolute;
  top: 33vh;
  left: 8.4vw;
}
#c {
  position: absolute;
  top: 65vh;
  left: 3.4vw;
}
#d {
  position: absolute;
  top: 65vh;
  left: 11.4vw;
}
#e {
  position: absolute;
  top: 40vh;
  left: 21.4vw;
}
#f {
  position: absolute;
  top: 40vh;
  left: 44.4vw;
}

.table-num {
  font-size: 15px;
  padding: 4px;
  color: rgb(250, 242, 242);
}
/*----------------------------Section Tables ON-------------------------------------------*/
#sections-switch {
  position: absolute;
  top: 90vh;
  left: 80vw;
}
#sections-switch p {
  font-size: 11px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 52px;
  height: 26px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 18px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
input:checked + .slider {
  background-color: #c03d20;
}

input:focus + .slider {
  box-shadow: 0 0 1px #7c1c04;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>
