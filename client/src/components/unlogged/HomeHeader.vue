<template>
  <header>
    <nav>
      <span class="logo">BlindCSS</span>
      <span class="sign-btn sign-up">Sign Up</span>
      <span class="sign-btn">Sign In</span>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style <style lang="scss" scoped>
@import "@/stylesheets/master.scss";

header {
  height: 100vh;
  background-color: $grey;
}

nav {
  padding-top: 50px;

  .logo {
    margin-left: 150px;
  }
  .sign-up {
    margin: 0 150px 0 50px;
  }
  .sign-btn {
    float: right;
  }
}
</style>
