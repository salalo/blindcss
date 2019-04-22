<template>
  <div class="btn" :class="type">{{ text }}</div>
</template>

<script>
export default {
  props: ["text", "type"]
};
</script>


<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.btn {
  width: 150px;
  height: 50px;
  border-radius: 4px;
  text-align: center;
  line-height: 50px;
}

.active {
  background-color: $main;
  @include transition(0s, $duration background-color);

  &:hover {
    @include transition(0s, $duration background-color);
    cursor: pointer;
    background-color: $hover-main;
  }
}

.outline {
  border: 1px solid $grey;
  color: $grey;
  @include transition(0s, $duration color);

  &:hover {
    @include transition(0s, $duration color);
    cursor: pointer;
    color: $hover-white;
  }
}
</style>
