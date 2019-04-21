<template>
  <div v-if="false">
    <UnHeader></UnHeader>
    <UnMain></UnMain>
    <Footer></Footer>
  </div>
  <div v-else>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import UnHeader from "@/components/unlogged/HomeHeader.vue";
import UnMain from "@/components/unlogged/HomeMain.vue";

import Header from "@/components/logged/HomeHeader.vue";
import Main from "@/components/logged/HomeLobbies.vue";
import Footer from "@/components/shared/HomeFooter.vue";

export default {
  components: {
    UnHeader,
    UnMain,
    Header,
    Main,
    Footer
  }
};
</script>