<template>
  <div>
    <div id="edit-table">
      <p @click="$emit('close')" id="close-el">x</p>
      <p>Select Server :</p>
      <p id="server">{{ nameSelected }}</p>
      <NamesDropDown @change="getName" v-model="nameObject" id="drop-down" />
      <p id="guest-count">Guest Count ?</p>
      <input type="text" v-model="numOfGuests" />
    </div>
    <button
      id="ok-btn"
      @click.prevent="newTableStart(), $emit('close'), $emit('startTime')"
      type="submit"
    >
      OK
    </button>
  </div>
</template>

<script>
import NamesDropDown from '@/components/NamesDropDown.vue'
import { mapActions } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
export default {
  computed: {},
  components: { NamesDropDown },
  data() {
    return {
      nameObject: '',
      nameSelected: '',
      numOfGuests: '',
    }
  },
  methods: {
    getName(event) {
      this.nameObject = event
      this.nameSelected = event.name
    },
    ...mapActions(['newTable']),
    newTableStart: function () {
      let uuidd = uuidv4()
      let payload = {
        id: uuidd,
        selectedPerson: this.nameObject,
        numGuests: this.numOfGuests,
      }
      this.newTable(payload)
      this.$emit('newTable', {
        serverSelected: this.nameSelected,
        guestCount: this.numOfGuests,
      })
    },
  },
}
</script>

<style lang="css" scoped>
#edit-table {
  width: 14vw;
  color: rgb(248, 242, 242);
  background-color: rgba(14, 14, 14, 0.9);
  border-radius: 10px;
  position: relative;
  text-align: center;
  padding-bottom: 2px;
}
p {
  color: rgb(163, 155, 155);
  font-size: 10px;
  text-align: left;
  margin-left: 7px;
}

#close-el {
  color: white;
  position: absolute;
  left: 11vw;
  bottom: 11.2vh;
  background: rgb(50, 42, 42);
  border-radius: 20px;
  border: 0.1px solid rgb(61, 59, 59);
  width: 3vw;
  font-size: 17px;
  padding-bottom: 1px;
  text-align: center;
}
#close-el:hover {
  background: rgb(112, 38, 38);
  border: 0.1px solid rgb(212, 33, 33);
}
#drop-down {
  margin-right: 6vw;
}
#server {
  width: 3vw;
  color: rgb(250, 250, 250);
  position: absolute;
  top: 2.5vh;
  left: 8vw;
  z-index: 0;
}
#guest-count {
  margin-bottom: 1px;
}
input {
  width: 2em;
  margin-right: 4.5em;
  margin-bottom: 1vh;
  background: rgba(183, 171, 171, 0.7);
  color: white;
  font-style: border;
}
#ok-btn {
  position: absolute;
  bottom: 1.5vh;
  left: 9vw;
  cursor: pointer;
}
</style>
