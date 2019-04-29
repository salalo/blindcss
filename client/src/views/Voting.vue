<template>
  <div class="voting-container">
    <Menu></Menu>
    <Players></Players>
  </div>
</template>

<script>
import Players from "../components/logged/Players.vue";
import Menu from "../components/logged/Menu.vue";

export default {
  components: {
    Menu,
    Players
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.voting-container {
  background-color: $grey;
  width: 100vw;
  height: 100vh;
}
</style>
