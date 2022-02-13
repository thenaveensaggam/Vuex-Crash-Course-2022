<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">Vuex</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/counter">Counter</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/employees">Employees</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/users">User List</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>
