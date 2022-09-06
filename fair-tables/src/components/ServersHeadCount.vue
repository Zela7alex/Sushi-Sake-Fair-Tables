<template>
  <div>
    <div id="servers-list">
      <p id="server" v-for="p in people" :key="p.id" :value="p.id">
        {{ p.name }}: {{ p.guestCount }}
        <TrashServerCount id="trash" />
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TrashServerCount from '@/components/TrashServerCount.vue'
export default {
  computed: {
    ...mapGetters(['people']),
  },
  components: { TrashServerCount },
}
</script>

<style lang="css" scoped>
p {
  background-color: rgba(168, 158, 158, 0.2);
  text-align: left;
  margin: 1em;
  padding-left: 1em;
}
#trash {
  display: inline-block;
  width: 10%;
  margin-left: 4vw;
  cursor: pointer;
}
#servers-list {
  width: 100%;
  height: 250px;
}
</style>
