<template>
  <div>
    <div class="tables" @click="editEl = true">
      <slot></slot>
      <div id="info">
        <p id="server-name">{{ nameSelected }}</p>
        <p id="time-at-table">{{ timeAtTable }}</p>
        <i class="fa fa-user" aria-hidden="true">{{ numOfGuests }}</i>
      </div>
    </div>
    <EditTable
      id="edit-table"
      v-if="editEl"
      @close="editEl = false"
      @newTable="newTableData"
      @startTime="timerStart"
    />
  </div>
</template>

<script>
import EditTable from '@/components/EditTable.vue'
export default {
  components: {
    EditTable,
  },
  data() {
    return {
      editEl: false,
      nameSelected: '',
      timeAtTable: '00:00:00',
      numOfGuests: '',
    }
  },
  methods: {
    newTableData({ serverSelected, guestCount }) {
      this.nameSelected = serverSelected
      this.numOfGuests = guestCount
    },
    // Timer start for tables
    timerStart() {
      let arr = this.timeAtTable.split(':')
      let hour = arr[0]
      let min = arr[1]
      let sec = arr[2]

      if (sec == 59) {
        if (min == 59) {
          hour++
          min = 0
          if (hour < 10) hour = '0' + hour
        } else {
          min++
        }
        if (min < 10) min = '0' + min
        sec = 0
      } else {
        sec++
        if (sec < 10) sec = 0 + sec
      }
      this.timeAtTable = hour + ':' + min + ':' + sec
      setTimeout(this.timerStart, 1000)
    },
  },
  prop: {},
}
</script>

<style lang="css" scoped>
.tables {
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
#edit-table {
  position: absolute;
  bottom: 6vh;
  left: 2vw;
  z-index: 1;
}
.displayEditTable {
  display: inline;
}
.fa-user {
  font-size: 10px;
  padding: 0;
  margin-right: 0;
  text-align: left;
  color: rgb(43, 41, 41);
}
</style>
