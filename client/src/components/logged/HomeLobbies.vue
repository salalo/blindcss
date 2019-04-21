<template>
  <div class="container">
    <p>Join or create a new lobby!</p>
    <div class="add-btn"></div>
    <span>SORT</span>
    <Button class="play-btn" type="outline" text="LOAD MORE"></Button>
  </div>
</template>

<script>
import Button from "../shared/Button.vue";
export default {
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.container {
  background-color: $white;
  color: $grey;

  p {
    font-size: 50px;
    text-align: center;
    margin-top: 0;
    padding-top: 100px;
  }
}
</style>

