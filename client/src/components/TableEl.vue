<template>
  <div>
    <div
      class="tables"
      @click="editEl = true"
      :class="{ displayActive: tableActive }"
    >
      <slot></slot>
      <div id="info">
        <p id="server-name">{{ nameSelected }}</p>
        <p id="time-at-table">{{ timeAtTable }}</p>
        <i
          class="fa fa-user"
          aria-hidden="true"
          :class="{ userWhite: tableActive }"
          ><p>{{ numOfGuests }}</p></i
        >
      </div>
    </div>
    <EditTable
      id="edit-table"
      :tableId="tableId"
      v-if="editEl"
      @close="editEl = false"
      @newTable="newTableData"
      @startTime="timerStart"
      @clearTableData="clearTable"
    />
  </div>
</template>

<script>
import EditTable from '@/components/EditTable.vue'
import { mapState, mapActions } from 'vuex'
import moment from 'moment'
export default {
  components: {
    EditTable,
  },
  computed: {
    ...mapState(['tables']),
    ...mapActions(['removeTableFromLocal']),
    ...mapActions(['clearAllTablesFromLocal']),
  },
  data() {
    return {
      editEl: false,
      nameSelected: '',
      timeAtTable: '00:00:00',
      numOfGuests: '',
      tableActive: false,
      timerId: null,
      clearing: false,
    }
  },
  methods: {
    newTableData({ serverSelected, guestCount, occupied }) {
      this.nameSelected = serverSelected
      this.numOfGuests = guestCount

      if (occupied === true) {
        this.tableActive = true
      }
    },
    clearTable({ serverSelected, guestCount, occupied, tableId }) {
      this.nameSelected = serverSelected
      this.numOfGuests = guestCount
      if (occupied === false) {
        this.tableActive = false
      }
      this.timeAtTable = '00:00:00'
      clearInterval(this.timerId)
      this.timerId = null
      // Clear table from local storage here
      this.removeTableFromLocal(tableId)
    },

    resetTable() {
      this.clearing = true
      if (this.clearing === true) {
        this.nameSelected = ''
        this.numOfGuests = ''
        this.tableActive = false
        this.timeAtTable = '00:00:00'
        clearInterval(this.timerId)
        this.timerId = null
      }
      this.clearAllTablesFromLocal()
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
      this.timeAtTable =
        this.ensureTwoDigits(hour) +
        ':' +
        this.ensureTwoDigits(min) +
        ':' +
        this.ensureTwoDigits(sec)
      if (!this.timerId) {
        this.timerId = setInterval(this.timerStart, 1000)
      }
    },
    internalLoad(data) {
      this.nameSelected = data.selectedPerson.name
      this.numOfGuests = data.numOfGuests
      this.tableActive = true
      const totalSeconds = moment
        .duration(moment().diff(moment(data.tableStarted)))
        .asSeconds()
      const totalMinutes = Math.floor(totalSeconds / 60)

      const seconds = Math.floor(totalSeconds % 60)
      const hours = Math.floor(totalMinutes / 60)
      const minutes = totalMinutes % 60

      this.timeAtTable =
        this.ensureTwoDigits(hours) +
        ':' +
        this.ensureTwoDigits(minutes) +
        ':' +
        this.ensureTwoDigits(seconds)
      this.timerStart()
    },
    ensureTwoDigits(number) {
      if (number.toString().length === 2) {
        return number
      } else {
        return `0${number}`
      }
    },
  },
  props: {
    tableId: String,
    resetTheShift: Boolean,
  },
  created() {
    this.tables.forEach((table) => {
      if (table.tableId === this.tableId) {
        this.internalLoad(table)
      }
    })
    this.$root.$on('reset-all-tables', this.resetTable)
  },
  mounted() {},
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
.displayActive {
  background: rgba(30, 27, 27, 0.7);
  border: 1px solid grey;
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
  background-color: rgba(164, 152, 152, 0.481);
  padding: 1px;
  text-align: center;
  border-radius: 2px;
  color: white;
}
#time-at-table {
  margin-top: 1px;
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 0;
  margin-top: 7%;
  margin-left: 11%;
  color: rgb(43, 41, 41);
}
.fa-user p {
  margin-left: 7px;
}
.userWhite {
  color: white;
  margin-right: 5px;
  padding-bottom: 4px;
}
</style>
