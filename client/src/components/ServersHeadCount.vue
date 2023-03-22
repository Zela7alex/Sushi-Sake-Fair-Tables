<template>
  <div>
    <div id="servers-list">
      <div id="server" v-for="p in people" :key="p.id" :value="p.id">
        <p>{{ p.name }}: {{ p.guestCount }}</p>
        <div>
          <i
            class="fa fa-trash"
            id="trash"
            aria-hidden="true"
            @click="handleRemoveServer(p.id)"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['people']),
  },
  methods: {
    ...mapMutations({
      removeServer: 'removeServer',
    }),
    handleRemoveServer(personId) {
      this.removeServer(personId)
    },
  },
}
</script>

<style lang="css" scoped>
#server {
  background-color: rgba(168, 158, 158, 0.2);
  text-align: left;
  margin: 1em;
  padding-left: 1em;
  display: flex;
}

p {
  width: 80%;
  min-width: 80%;
  margin-bottom: 0;
}
#trash {
  display: inline-block;
  cursor: pointer;
}
i {
  color: rgb(194, 189, 189);
  font-size: 14px;
}
#servers-list {
  width: 100%;
  height: 300px;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 4%;
}
</style>
