<template>
  <div>
    <!------------  Party Headers ---------->
    <div class="container">
      <div class="add-party">
        <i class="fa-solid fa-plus" @click="showForm()"></i>
        <p>Add Party</p>
      </div>
      <div class="edit-party">
        <i class="fa-solid fa-gear" @click="editParties()"></i>
        <p>Edit Parties</p>
      </div>
      <!------------  Form for Party Entry ---------->
      <form :class="{ displayNone: hideForm }">
        <i class="fa-solid fa-circle-xmark" @click="hideEntryBox()"></i>
        <div class="form-group row">
          <label
            for="colFormLabelSm"
            class="col-sm-2 col-form-label col-form-label-sm"
            >Name</label
          >
          <div class="col-sm-10">
            <input
              v-model="name"
              type="name"
              class="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="Jon Doe"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            for="colFormLabelSm"
            class="col-sm-2 col-form-label col-form-label-sm"
            >Phone</label
          >
          <div class="col-sm-10">
            <input
              v-model="phone"
              type="phone"
              class="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="555-555-5555"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            for="colFormLabelSm"
            class="col-sm-2 col-form-label col-form-label-sm"
            >Guests</label
          >
          <div class="col-sm-10">
            <input
              v-model="numOfGuests"
              type="guests"
              class="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="Num Of Guests"
            />
          </div>
        </div>
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
            >Time</label
          >
          <div class="col-sm-10">
            <input
              v-model="time"
              type="time"
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
            >*</label
          >
          <div class="col-sm-10">
            <input
              v-model="comments"
              type="comments"
              class="form-control form-control-sm comments"
              id="colFormLabelSm"
              placeholder="Comments"
            />
          </div>
        </div>
        <button
          type="submit"
          class="btn mb-2"
          @click.prevent="hideEntryBox(), createNewPartyStart()"
        >
          Add Entry
        </button>
      </form>
    </div>
    <!------------  Each New Party List ------>
    <div>
      <PartyEl />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
import PartyEl from '@/components/PartyEl.vue'
export default {
  computed: {
    ...mapState(['parties']),
  },
  components: {
    PartyEl,
  },
  data() {
    return {
      hideForm: true,
      name: '',
      phone: '',
      numOfGuests: '',
      date: '',
      time: '',
      comments: '',
      isEditingParties: false,
    }
  },
  methods: {
    hideEntryBox() {
      this.hideForm = true
    },
    showForm() {
      this.hideForm = false
    },
    editParties() {
      if (this.isEditingParties) {
        this.isEditingParties = !this.isEditingParties
        this.$root.$emit('stop-editing-parties')
      } else {
        this.isEditingParties = !this.isEditingParties
        this.$root.$emit('start-editing-parties')
      }
    },
    ...mapActions(['createNewParty']),
    async createNewPartyStart() {
      const partyEntry = {
        name: this.name,
        phone: this.phone,
        numOfGuests: this.numOfGuests,
        date: this.date,
        time: this.time,
        comments: this.comments,
      }
      console.log(partyEntry)
      this.name = ''
      this.phone = ''
      this.numOfGuests = ''
      this.date = ''
      this.time = ''
      this.comments = ''

      await this.createNewParty(partyEntry)
    },
  },
}
</script>

<style lang="css" scoped>
.displayNone {
  display: none;
}

.add-party {
  color: white;
  width: 8%;
  align-items: flex-start;
  position: absolute;
  top: 40%;
  right: 5.8%;
}

.edit-party {
  color: white;
  width: 8%;
  align-items: flex-start;
  position: absolute;
  top: 60%;
  right: 5.7%;
}

.fa-plus,
.fa-gear {
  width: 55%;
  font-size: 30px;
  padding: 5%;
  border-radius: 7%;
  background: rgba(106, 96, 96, 0.8);
  margin-bottom: 15%;
}
.fa-plus:hover,
.fa-gear:hover {
  background-color: rgb(255, 255, 255, 0.7);
  color: black;
  cursor: pointer;
}

form {
  width: 30%;
  z-index: 2;
  position: absolute;
  top: 25%;
  right: 22%;
  padding: 3%;
  color: white;
  margin: 0;
  border: 1px solid rgb(255, 255, 255, 0.3);
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 1px 2px 6px 2px rgb(83, 84, 84);
}
form input {
  background: rgba(229, 224, 224, 0.9);
}

form .comments {
  height: 160%;
}

form button {
  width: 50%;
  margin-left: 50%;
  margin-top: 8%;
  color: white;
  background-color: rgb(116, 106, 106);
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
</style>
