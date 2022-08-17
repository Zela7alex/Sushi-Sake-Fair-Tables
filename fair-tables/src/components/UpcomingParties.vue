<template>
  <div>
    <div class="parties">
      <p>
        <i class="far fa-bell" style="font-size: 20px"></i>Upcoming Parties<i
          class="fas fa-birthday-cake"
          style="font-size: 20px"
        ></i>
      </p>
      <table class="striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Size</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>10/12</td>
            <td>Eclair</td>
            <td>20</td>
            <td>305-223-2739</td>
          </tr>
          <tr>
            <td>10/18</td>
            <td>Jellybean</td>
            <td>10</td>
            <td>594-223-2372</td>
          </tr>
          <tr>
            <td>10/25</td>
            <td>Lollipop</td>
            <td>12</td>
            <td>562-627-2726</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
p {
  color: white;
}
.striped {
  font-size: 14px;
  margin: 0 auto;
}
thead {
  border: 4px solid rgb(white);
}
.fa-bell {
  margin-right: 9px;
}
.fa-birthday-cake {
  margin-left: 10px;
}
.parties {
  margin: 0 auto;
  text-align: center;
}
</style>
