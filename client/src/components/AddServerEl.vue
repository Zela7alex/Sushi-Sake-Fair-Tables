<template>
  <div>
    <div id="add-server-box">
      <p>Add Server</p>
      <input type="text" placeholder="Server Name" v-model="name" required />
      <button type="submit">
        <i class="fa-solid fa-plus" @click.prevent="createNewServerStart()"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
export default {
  computed: {},
  methods: {
    ...mapActions(['createNewServer']),
    createNewServerStart: function () {
      let uuidd = uuidv4()
      let payload = {
        name: this.name,
        id: uuidd,
        guestCount: 0,
      }
      this.createNewServer(payload)
      this.name = ''
    },
    hideBox: function () {
      this.displayBoxNone = false
    },
  },
  data() {
    return {
      name: '',
    }
  },
}
</script>

<style lang="css" scoped>
.displayNone {
  display: none;
}
#add-server-box {
  width: 14vw;
  height: 15vh;
  background-color: rgb(206, 214, 206, 0.8);
  border: 1px solid rgb(0, 0, 0);
  border-radius: 3px;
  position: relative;
}
input {
  width: 65%;
  background-color: rgba(248, 247, 247, 0.4);
  border: 1px solid white;
}
input:focus {
  outline: 2px solid rgb(112, 110, 110);
}
button {
  cursor: pointer;
  width: 20%;
  margin-top: 14px;
  margin-left: 50%;
  border: none;
  border-radius: 2px;
}
button:hover {
  background-color: rgba(29, 24, 24, 0.8);
  color: white;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}
p {
  font-size: 10px;
  color: rgb(80, 74, 74);
  font-style: italic;
  font-family: 'Helvetica';
  margin: 0 auto;
  margin-top: 11%;
  margin-bottom: 4%;
}
</style>
