<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "@/stylesheets/master.scss";

::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  background: $grey;
}
::-webkit-scrollbar-thumb {
  background: $main;
  border-radius: 5px;
}

html,
body {
  height: 100vh;
  font-family: $font-family-sans;
  font-weight: $regular;
  font-size: $font-unit;
  color: $white;
  background-color: $white;
  padding: 0 !important;
  margin: 0 !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
