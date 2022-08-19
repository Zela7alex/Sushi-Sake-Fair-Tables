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
          <li>Paola</li>
          <li>Kim</li>
          <li>Juan</li>
          <li>Joanna</li>
          <li>Julio</li>
          <li>Alex</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
#sections-table {
  box-sizing: border-box;
  width: 15vw;
  margin-top: 51%;
  margin-left: 5%;
  background-color: rgb(115, 106, 106, 0.4);
  display: flex;
  justify-content: center;
}
p {
  width: 100%;
  font-size: 10px;
  background-color: rgb(122, 118, 118);
  border: 1px solid rgb(220, 211, 211);
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
  border: 1px solid rgb(209, 199, 199);
}
ul li {
  list-style-type: none;
  font-size: 13px;
}
li {
  border: 1px solid rgb(229, 223, 223, 0.4);
}
#section-letters {
  color: rgb(230, 34, 34);
}
</style>
