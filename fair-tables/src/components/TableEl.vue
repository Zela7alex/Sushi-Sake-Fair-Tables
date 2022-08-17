<template>
  <div>
    <div class="tables">
      <slot></slot>
      <div id="info">
        <p id="server-name">Alex</p>
        <p id="time-at-table">1:20:21</p>
        <i class="fa fa-user" aria-hidden="true">4</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.tables {
  z-index: 1;
  background: rgb(119, 126, 119);
  width: 5vw;
  height: 10vh;
  border: 1px solid rgb(255, 253, 253);
  font-size: 10px;
  cursor: pointer;
  position: relative;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}
.tables:active {
  background-color: rgb(56, 54, 54);
}
#info {
  position: absolute;
  top: 3px;
  left: 7px;
  text-align: center;
}
#info p {
  margin-bottom: 0;
  padding-top: 0;
}

#server-name {
  margin-top: 18px;
  background-color: rgba(70, 63, 63, 0.481);
  text-align: center;
  border-radius: 2px;
  color: white;
}
#time-at-table {
  margin-top: 0;
}
.fa-user {
  font-size: 10px;
  padding: 0;
  margin-right: 0;
  text-align: left;
  color: rgb(43, 41, 41);
}
</style>
