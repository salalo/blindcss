<template>
  <div v-if="isLogged">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
  <div v-else>
    <UnHeader></UnHeader>
    <UnMain></UnMain>
    <Footer></Footer>
  </div>
</template>

<script>
import UnHeader from "@/components/unlogged/HomeHeader.vue";
import UnMain from "@/components/unlogged/HomeMain.vue";
import Header from "@/components/logged/HomeHeader.vue";
import Main from "@/components/logged/HomeLobbies.vue";
import Footer from "@/components/shared/HomeFooter.vue";
import VueCookies from "vue-cookies";

export default {
  data() {
    return {
      isLogged: false
    };
  },

  components: {
    UnHeader,
    UnMain,
    Header,
    Main,
    Footer
  },

  mounted() {
    fetch("http://localhost:8081/auth/checkAuth", {
      method: "GET",
      credentials: "include"
    })
      .then(res => {
        console.log(res);
        // res.data == "unlogged"
        //   ? (this.isLogged = false)
        //   : (this.isLogged = true);
      })
      .catch(err => console.error(err));
    console.log(this.isLogged);
  }
};
</script>