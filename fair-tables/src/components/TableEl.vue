<template>
  <div>
    <div class="tables">
      <slot></slot>
      <div id="info">
        <p id="server-name">Alex</p>
        <p id="time-at-table">1:20:21</p>
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
  margin-top: 23px;
  background-color: rgba(70, 63, 63, 0.481);
  text-align: center;
  border-radius: 2px;
  color: white;
}
#time-at-table {
  margin-top: 0;
}
</style>
