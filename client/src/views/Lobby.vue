<template>
  <div class="waiting_room-container">
    <Menu></Menu>
    <main>asd</main>
  </div>
</template>

<script>
import Menu from "../components/logged/Menu.vue";

export default {
  components: {
    Menu
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.waiting_room-container {
  background-color: $grey;
}
</style>

