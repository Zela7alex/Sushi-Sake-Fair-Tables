<template>
  <div>
    <div id="sections-table">
      <div id="sections">
        <p id="sections-title">Sections</p>
        <ul id="section-letters">
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>F</li>
        </ul>
      </div>
      <div id="servers">
        <p id="servers-title">Servers</p>
        <ul>
          <li>{{ sections[0].sectionA }}</li>
          <li>{{ sections[0].sectionB }}</li>
          <li>{{ sections[0].sectionC }}</li>
          <li>{{ sections[0].sectionD }}</li>
          <li>{{ sections[0].sectionE }}</li>
          <li>{{ sections[0].sectionF }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['sections']),
  },
}
</script>

<style lang="css" scoped>
#sections-table {
  box-sizing: border-box;
  width: 15vw;
  margin-top: 54%;
  margin-left: 5%;
  display: flex;
  justify-content: center;
}
p {
  width: 100%;
  font-size: 10px;
  background-color: rgb(19, 17, 17);
  border: 0.2px solid rgb(220, 211, 211);
  margin: 0;
}
#sections {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#servers {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
ul {
  width: 100%;
  margin: 0;
  padding-inline-start: 0;
  box-shadow: 1px 2px 1px 0px rgb(34, 36, 35);
}
ul li {
  list-style-type: none;
  font-size: 13px;
}
li {
  border: 0.2px solid rgb(17, 16, 16);
  box-shadow: 2px 3px 4px 1px rgb(59, 61, 60, 0.7);
}
#section-letters {
  color: rgb(230, 34, 34);
}
</style>
