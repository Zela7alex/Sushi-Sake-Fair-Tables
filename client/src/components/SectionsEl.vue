<template>
  <div class="sections-div">
    <div
      v-for="(s, i) in sections"
      :key="i"
      class="sections-list"
      :class="{ displayNone: deleteEntry }"
    >
      <i
        class="fa-solid fa-circle-xmark displayNone"
        :class="{ display: isEditing }"
        @click="handleRemoveSection(s._id)"
      ></i>
      <div class="sec">
        <div>
          <p class="center">{{ s.date }}</p>
        </div>
        <div class="date">
          <p class="center">{{ s.day }}</p>
        </div>
        <div>
          <p class="letter">A</p>
          <p class="center">{{ s.sectionA }}</p>
        </div>
        <div>
          <p class="letter">B</p>
          <p class="center">{{ s.sectionB }}</p>
        </div>
        <div>
          <p class="letter">C</p>
          <p class="center">{{ s.sectionC }}</p>
        </div>
        <div>
          <p class="letter">D</p>
          <p class="center">{{ s.sectionD }}</p>
        </div>
        <div>
          <p class="letter">E</p>
          <p class="center">{{ s.sectionE }}</p>
        </div>
        <div>
          <p class="letter">F</p>
          <p class="center">{{ s.sectionF }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'
const sectionsUrl = `${baseUrl}/sections`

export default {
  computed: {
    ...mapState(['sections']),
  },
  data() {
    return {
      deleteEntry: false,
      isEditing: false,
      isFriday: false,
      isSaturday: false,
      isSunday: false,
    }
  },
  methods: {
    ...mapMutations({
      removeSection: 'removeSection',
    }),
    internalStartEditing() {
      this.isEditing = true
    },
    internalStopEditing() {
      this.isEditing = false
    },
    handleRemoveSection(sectionById) {
      this.removeSection(sectionById)
      // Mongodb
      this.removeSectionFromDb(sectionById)
    },
    async removeSectionFromDb(sectionId) {
      await axios.delete(`${sectionsUrl}?sectionId=${sectionId}`)
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
    this.$root.$on('start-editing-sections', this.internalStartEditing)
    this.$root.$on('stop-editing-sections', this.internalStopEditing)
  },
}
</script>

<style scoped>
.sections-div {
  width: 75vw;
  max-height: 70vh;
  max-width: 75vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
  margin-bottom: 2em;
  margin-left: 1em;
  border-style: solid;
  border-width: 1px;
  box-shadow: 1px 2px 1px 0px rgb(34, 36, 35);
}
.sections-div::-webkit-scrollbar {
  display: none;
}
.sections-list {
  display: flex;
  color: white;
  width: 25%;
  margin-top: 1em;
  margin-bottom: 1em;
}
.date {
  box-shadow: inset 0 0 6px #c22404;
}
.sec {
  width: 100%;
  margin-left: 1em;
  margin-right: 1em;
  border: 0.2px solid rgb(17, 16, 16);
  box-shadow: 2px 3px 4px 1px rgb(59, 61, 60, 0.7);
}

.sec div {
  display: flex;
  align-items: center;
  border: 0.2px solid rgba(55, 51, 51, 0.7);
}
.sec p {
  margin-bottom: 0;
  font-size: 12px;
  text-align: center;
}
.center {
  margin: 0 auto;
}
.letter {
  width: 30%;
  background: rgb(223, 9, 9, 0.5);
  box-shadow: inset 0 0 10px #9e1402;
}

.fa-circle-xmark {
  font-size: 22px;
  position: relative;
  left: 98%;
  top: 2%;
  z-index: 2;
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
/* .fridayColor {
  box-shadow: inset 0 0 6px #ec2b05;
}
.saturdayColor {
  box-shadow: inset 0 0 6px #e7e2e1;
}
.sundayColor {
  box-shadow: inset 0 0 6px #dcec05;
} */
</style>
