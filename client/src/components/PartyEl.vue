<template>
  <div class="parties-div">
    <div class="row headers">
      <div class="col-sm">Name</div>
      <div class="col-sm">Phone</div>
      <div class="col-sm">Guests</div>
      <div class="col-sm">Date</div>
      <div class="col-sm">Time</div>
      <div class="col-sm">Comments</div>
    </div>
    <zoom-center-transition group>
      <div
        v-for="(p, i) in parties"
        :key="i"
        class="party-single"
        :class="{ displayNone: deleteEntry }"
      >
        <div class="party-info-row">
          <div class="partyEl">{{ p.name }}</div>
          <div class="partyEl">{{ p.phone }}</div>
          <div class="partyEl">{{ p.numOfGuests }}</div>
          <div class="partyEl">{{ p.date }}</div>
          <div class="partyEl">{{ p.time }}</div>
          <div class="partyEl">{{ p.comments }}</div>
        </div>
        <i
          class="fa-solid fa-circle-xmark displayNone"
          :class="{ display: isEditing }"
          @click="handleRemoveParty(p._id)"
        ></i>
      </div>
    </zoom-center-transition>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'
const partiesUrl = `${baseUrl}/parties`

export default {
  computed: {
    ...mapState(['parties']),
  },
  data() {
    return {
      deleteEntry: false,
      isEditing: false,
      dateHasPassed: false,
    }
  },
  methods: {
    ...mapMutations({
      removeParty: 'removeParty',
    }),
    ...mapActions({
      deletePartyAction: 'deletePartyAction',
    }),
    internalStartEditing() {
      this.isEditing = true
    },
    internalStopEditing() {
      this.isEditing = false
    },
    handleRemoveParty(partyById) {
      // Localstorage
      this.removeParty(partyById)
      // Mongodb
      this.removePartyFromDb(partyById)
    },
    async removePartyFromDb(partyId) {
      await axios.delete(`${partiesUrl}?partyId=${partyId}`)
    },

    datePassed() {
      let filterPartyDate = this.parties
      let htmlRows = document.querySelectorAll('.party-info-row')

      filterPartyDate.forEach((p, index) => {
        const pastDay = new Date(p.date)
        const today = new Date()
        if (pastDay < today) {
          htmlRows[index].style.backgroundColor = '#3E454B'
          htmlRows[index].style.color = '#3E454B'
        } else {
          htmlRows[index].style.color = '#FFFFFF'
        }
      })
    },
  },

  props: {
    edit: {
      type: Boolean,
    },
    duration: {
      type: [Number, Object],
      default: 300,
    },
    group: Boolean,
    tag: {
      type: String,
      default: 'span',
    },
    origin: {
      type: String,
      default: '',
    },
    styles: {
      type: Object,
      default: () => {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'ease-out',
        }
      },
    },
  },
  created() {
    this.$root.$on('start-editing-parties', this.internalStartEditing)
    this.$root.$on('stop-editing-parties', this.internalStopEditing)
  },
  mounted() {
    this.datePassed()
  },
  updated() {
    this.datePassed()
  },
}
</script>

<style scoped>
.parties-div {
  height: 80vh;
  width: 82vw;
  overflow-y: auto;
  position: fixed;
  bottom: 1em;
  left: 1em;
  padding-left: 0.5em;
  margin-left: 3%;
}
.parties-div::-webkit-scrollbar {
  display: none;
}

.headers {
  width: 85.7%;
  color: white;
  display: flex;
  border: 2px solid white;
  margin-left: 0em;
}
.party-single {
  display: flex;
  width: 100%;
  position: relative;
  height: 3.5em;
  margin-bottom: 00.5em;
  margin-top: 0.5em;
}

.party-info-row {
  width: 85.7%;
  display: flex;
}

.partyEl {
  width: 16.67%;
  /* color: white; */
  padding: 2%;
  font-size: 14px;
  border: 1px solid rgb(30, 29, 29);
  background: rgba(40, 39, 39, 0.7);
}

.fa-circle-xmark {
  font-size: 22px;
  position: absolute;
  right: 10%;
  top: 3%;
  color: rgb(72, 70, 70);
}
.fa-circle-xmark:hover {
  color: rgb(143, 5, 5);
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  cursor: pointer;
}
.displayNone {
  display: none;
}
.display {
  display: block;
}
</style>
