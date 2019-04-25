<template>
  <aside>
    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

aside {
  width: 60px;
  height: 380px;
  position: absolute;
  top: calc(50% - 190px);
  left: 20px;

  .player {
    width: 60px;
    height: 60px;
    background-color: $light-grey;
    margin-bottom: 20px;
    border-radius: 100%;
  }
}
</style>

