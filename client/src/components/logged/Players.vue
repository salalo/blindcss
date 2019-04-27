<template>
  <div class="players-container">
    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.players-container {
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

// MOBILE

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/
@media (min-width: 320px) and (max-width: 500px) {
  .players-container {
    width: 380px;
    height: 60px;
    position: unset;
    margin: 0 auto;
    margin-top: 100px;

    .player {
      width: 60px;
      height: 60px;
      background-color: $light-grey;
      margin: 0 5px;
      border-radius: 100%;
      display: inline-block;
    }
  }
}
</style>

