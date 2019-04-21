<template>
  <div :class="type">{{ text }}</div>
</template>

<script>
export default {
  props: ["text", "type"]
};
</script>


<style <style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.active {
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

.outline {
  width: 150px;
  height: 50px;
  border: 1px solid $grey;
  color: $grey;
  border-radius: 4px;
  text-align: center;
  line-height: 50px;
  @include transition(0s, $duration color);

  &:hover {
    @include transition(0s, $duration color);
    cursor: pointer;
    color: $hover-white;
  }
}
</style>
