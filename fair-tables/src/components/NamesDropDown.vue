<template>
  <div>
    <select @change="onChange($event)" class="drop-down">
      <!--event on option change -->
      <option id="names" v-for="p in people" :key="p.id" :value="p.id">
        {{ p.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['people']),
  },
  data() {
    return {
      name: '',
    }
  },
  methods: {
    onChange(e) {
      // This event is selecting the "helper"
      var name = e.target.options[e.target.options.selectedIndex].text
      var personId = e.target.value
      // console.          log(name)
      // console.log(personId)
      this.$emit('change', { name, personId })
    },
  },
}
</script>

<style lang="css" scoped>
#names {
  color: rgb(222, 214, 214);
  padding: 12px 16px;
  display: block;
  width: 2vw;
}
select {
  cursor: pointer;
  color: white;
  border: rgb(241, 240, 236);
  background: rgb(45, 36, 36);
  width: 5vw;
}
select:focus {
  outline: none;
  box-shadow: 0px 0px 0px 2px rgb(247, 243, 231) inset;
}
select,
option {
  border: 0.2px solid white;
  color: rgb(246, 244, 242);
}
#dash {
  text-align: center;
}
</style>
