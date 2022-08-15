<template>
  <div>
    <p id="server">
      Alex: <slot id="num-of-guests">20</slot><TrashServerCount id="trash" />
    </p>
    <p id="server">Paola: <slot id="num-of-guests">30</slot></p>
    <p id="server">Kim: <slot id="num-of-guests">8</slot></p>
    <p id="server">Juan: <slot id="num-of-guests">12</slot></p>
    <p id="server">Lore: <slot id="num-of-guests">12</slot></p>
    <p id="server">Joanna: <slot id="num-of-guests">12</slot></p>
  </div>
</template>

<script>
import TrashServerCount from '@/components/TrashServerCount.vue'
export default {
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
  margin-left: 6vw;
}
</style>
