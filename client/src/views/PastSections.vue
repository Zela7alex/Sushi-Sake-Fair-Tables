<template>
  <div>
    <!------------  Party Headers ---------->
    <div class="container">
      <div class="add-section">
        <i class="fa-solid fa-plus" @click="showEntryBox()"></i>
        <p>Add Sections</p>
      </div>
      <div class="edit-section">
        <i class="fa-solid fa-gear" @click="editSections()"></i>
        <p>Edit Sections</p>
      </div>
      <!------------  Form for Party Entry ---------->
      <form :class="{ displayNone: hideForm }">
        <i class="fa-solid fa-circle-xmark" @click="hideEntryBox()"></i>
        <div class="form-group row">
          <label
            for="colFormLabelSm"
            class="col-sm-2 col-form-label col-form-label-sm"
            >Date</label
          >
          <div class="col-sm-10">
            <input
              v-model="date"
              type="date"
              class="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="3/19/2023"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            for="colFormLabelSm"
            class="col-sm-2 col-form-label col-form-label-sm"
            >Day</label
          >
          <div class="col-sm-6">
            <select v-model="day" id="dayOptions" placeholder="Friday">
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-8">
            <p>A</p>
            <select v-model="sectionA" class="namesDropDown">
              <option v-for="(p, i) in people" :key="i">{{ p.name }}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-8">
            <p>B</p>
            <select v-model="sectionB" class="namesDropDown">
              <option v-for="(p, i) in people" :key="i">{{ p.name }}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-8">
            <p>C</p>
            <select v-model="sectionC" class="namesDropDown">
              <option v-for="(p, i) in people" :key="i">{{ p.name }}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-8">
            <p>D</p>
            <select v-model="sectionD" class="namesDropDown">
              <option v-for="(p, i) in people" :key="i">{{ p.name }}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-8">
            <p>E</p>
            <select v-model="sectionE" class="namesDropDown">
              <option v-for="(p, i) in people" :key="i">
                {{ p.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-8">
            <p>F</p>
            <select v-model="sectionF" class="namesDropDown">
              <option v-for="(p, i) in people" :key="i">{{ p.name }}</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          class="btn mb-2"
          @click.prevent="hideEntryBox(), createNewSectionsStart()"
        >
          Add Entry
        </button>
      </form>
    </div>
    <!------------  Each New Section List ------>
    <div class="sections">
      <SectionsEl />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
import SectionsEl from '@/components/SectionsEl.vue'
export default {
  computed: {
    ...mapState(['sections', 'people']),
  },
  components: {
    SectionsEl,
  },
  data() {
    return {
      hideForm: true,
      date: '',
      day: '',
      sectionA: '',
      sectionB: '',
      sectionC: '',
      sectionD: '',
      sectionE: '',
      sectionF: '',
      isEditingSections: false,
    }
  },
  methods: {
    hideEntryBox() {
      this.hideForm = true
    },
    showEntryBox() {
      this.hideForm = false
    },
    editSections() {
      if (this.isEditingSections) {
        this.isEditingSections = !this.isEditingSections
        this.$root.$emit('stop-editing-sections')
      } else {
        this.isEditingSections = !this.isEditingSections
        this.$root.$emit('start-editing-sections')
      }
    },
    getName(event) {
      this.changeA(event)
      this.changeB(event)
      this.changeC(event)
      this.changeD(event)
      this.changeE(event)
      this.changeF(event)
      // this.sectionA = event.name
      // this.sectionB = event.name
      // this.sectionC = event.name
      // this.sectionD = event.name
      // this.sectionE = event.name
      // this.sectionF = event.name

      console.log(event)
    },
    changeA(event) {
      this.sectionA = event.name
    },
    changeB(event) {
      this.sectionB = event.name
    },
    changeC(event) {
      this.sectionC = event.name
    },
    changeD(event) {
      this.sectionD = event.name
    },
    changeE(event) {
      this.sectionE = event.name
    },
    changeF(event) {
      this.sectionF = event.name
    },

    ...mapActions(['createNewSections']),
    async createNewSectionsStart() {
      const sectionsEntry = {
        date: this.date,
        day: this.day,
        sectionA: this.sectionA,
        sectionB: this.sectionB,
        sectionC: this.sectionC,
        sectionD: this.sectionD,
        sectionE: this.sectionE,
        sectionF: this.sectionF,
      }
      console.log(sectionsEntry)
      this.date = ''
      this.day = ''
      this.sectionA = ''
      this.sectionB = ''
      this.sectionC = ''
      this.sectionD = ''
      this.sectionE = ''
      this.sectionF = ''

      await this.createNewSections(sectionsEntry)
    },
  },
}
</script>

<style lang="css" scoped>
.displayNone {
  display: none;
}

.add-section {
  color: white;
  align-items: flex-start;
  position: absolute;
  top: 40%;
  right: 6.1%;
  overflow: none;
}

.edit-section {
  color: white;
  align-items: flex-start;
  position: absolute;
  top: 60%;
  right: 6.2%;
  overflow: none;
}

.fa-plus,
.fa-gear {
  width: 55%;
  font-size: 30px;
  padding: 5%;
  border-radius: 7%;
  background: rgba(106, 96, 96, 0.8);
  margin-bottom: 15%;
  overflow: none;
}
.fa-plus:hover,
.fa-gear:hover {
  background: rgb(255, 255, 255, 0.7);
  color: black;
  cursor: pointer;
  transition: 0.4s;
  overflow: none;
}

form {
  z-index: 2;
  position: absolute;
  top: 25%;
  right: 22%;
  padding: 3%;
  color: white;
  margin: 0;
  border: 1px solid rgb(255, 255, 255, 0.3);
  background: rgb(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 1px 2px 6px 2px rgb(83, 84, 84);
}
form input {
  background: rgb(249, 246, 246);
}

form button {
  width: 50%;
  margin-left: 50%;
  margin-top: 8%;
  color: white;
  background-color: rgb(49, 47, 47);
}
form button:hover {
  background-color: white;
  color: black;
}
.fa-circle-xmark {
  font-size: 25px;
  position: absolute;
  top: -6%;
  right: -8%;
}
.fa-circle-xmark:hover {
  color: rgb(117, 55, 55);
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  cursor: pointer;
}
.col-sm-6 {
  margin-right: 10%;
}

.col-sm-8 {
  display: flex;
  margin-left: 5%;
}
.col-sm-8 p {
  color: red;
}
select {
  cursor: pointer;
  color: rgb(247, 242, 242);
  border-radius: 5px;
  background: rgb(134, 132, 132);
  width: 115%;
}
select:focus {
  outline: none;
  box-shadow: 0px 0px 0px 2px rgb(247, 243, 231) inset;
}
select option {
  border: 0.2px solid white;
  color: rgb(246, 244, 242);
}
.sections {
  position: absolute;
  top: 20%;
}

.namesDropDown,
option {
  width: 90%;
  height: 60%;
  margin-left: 14%;
  background-color: rgb(60, 58, 58);
}
</style>
