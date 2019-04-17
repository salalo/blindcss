<template>
  <div>{{ text }}</div>
</template>

<script>
export default {
  props: ["text"]
};
</script>


<style <style lang="scss" scoped>
@import "@/stylesheets/master.scss";

div {
  width: 150px;
  height: 50px;
  background-color: $main;
  border-radius: 4px;
  text-align: center;
  line-height: 50px;
  @include transition(0s, $duration background-color);

  &:hover {
    @include transition(0s, $duration background-color);
    cursor: pointer;
    background-color: $hover-main;
  }
}
</style>
