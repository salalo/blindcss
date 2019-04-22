<template>
  <footer>
    <div class="content">
      <div class="logo"></div>
      <p>© 2019 Sala Wojciech</p>
      <p>All rights reserved.</p>

      <ul>
        <li>Contact</li>
        <li>Privacy & policy</li>
        <li>Copyrights</li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.logo {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: $light-grey;
  margin-bottom: 50px;
}
p {
  margin: 5px 0;
}
ul {
  padding: 0;
  margin-top: 100px;

  li {
    text-decoration: none;
    list-style: none;
    margin-top: 20px;
    @include transition(0s, $duration color);

    &:hover {
      @include transition(0s, $duration color);
      cursor: pointer;
      color: $hover-white;
    }
  }
}
footer {
  height: 500px;
  background-color: $grey;
  color: $light-grey;

  .content {
    margin-left: 25%;
    padding-top: 70px;
  }
}
</style>
