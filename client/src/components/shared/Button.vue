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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
