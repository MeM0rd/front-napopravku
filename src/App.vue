<template>
  <v-app>

    <Header></Header>

    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: 'App',
  components: {Header},
};
</script>

<style>
main {
  background-color: #333236;
}
</style>