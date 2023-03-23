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
            <td>{{ parties[parties.length - 1].date }}</td>
            <td>{{ parties[parties.length - 1].name }}</td>
            <td>{{ parties[parties.length - 1].numOfGuests }}</td>
            <td>{{ parties[parties.length - 1].phone }}</td>
          </tr>
          <tr>
            <td>{{ parties[parties.length - 2].date }}</td>
            <td>{{ parties[parties.length - 2].name }}</td>
            <td>{{ parties[parties.length - 2].numOfGuests }}</td>
            <td>{{ parties[parties.length - 2].phone }}</td>
          </tr>
          <tr>
            <td>{{ parties[parties.length - 3].date }}</td>
            <td>{{ parties[parties.length - 3].name }}</td>
            <td>{{ parties[parties.length - 3].numOfGuests }}</td>
            <td>{{ parties[parties.length - 3].phone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['parties']),
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="css" scoped>
p {
  color: white;
}
.striped {
  font-size: 14px;
  margin: 0 auto;
}
th {
  width: 19%;
  border: 0.5px solid white;
}
tr {
  box-shadow: 2px 3px 2px 1px rgb(59, 61, 60, 0.4);
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
  width: 22rem;
}
</style>
