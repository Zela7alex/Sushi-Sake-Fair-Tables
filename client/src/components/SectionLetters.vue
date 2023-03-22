<template>
  <div>
    <p><slot></slot></p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
p {
  color: red;
  font-weight: bolder;
  background-color: rgba(172, 161, 161, 0.4);
  width: 20px;
  padding: 1px;
  border-radius: 20px;
}
</style>
