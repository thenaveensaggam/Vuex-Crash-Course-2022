<template>
  <NavBar/>
  <router-view/>
</template>

<style>
@import "styles.css";
</style>
<script>
import NavBar from "@/components/NavBar";

export default {
  components: {NavBar}
}
</script>
