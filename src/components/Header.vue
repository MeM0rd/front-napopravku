<template>
  <v-app-bar app color="#444446">

    <v-icon
      class="home"
      large
      @click="goHome"
      color="white"
    >
      mdi-home
    </v-icon>
    <v-spacer/>
    <CreateQuote></CreateQuote>
  </v-app-bar>
</template>

<script>

import CreateQuote from "@/components/CreateQuote";
export default {
  name: "Header",
  components: {CreateQuote},
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>