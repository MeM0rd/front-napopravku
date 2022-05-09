<template>
  <v-container>
    <div v-if="searchedQuotes.length">
      <v-card v-for="q in searchedQuotes" :key="q.id" width="60%"
              class="ma-5 mx-auto rounded-bl-0 elevation-5 white--text" color="#444446" style="border-radius: 20px">
        <v-card-title class="text-h5 font-weight-bold">
          {{ q.author }}
          <v-spacer></v-spacer>
          <Date :date="q.created_at"></Date>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text class="text text-center white--text">
          {{ q.text }}
        </v-card-text>

        <v-card-text class="text-center">
          <v-chip v-for="t in q.tags" :key="t.name" class="mx-1 elevation-2" color="#FFAB73">
            {{ t.name }}
          </v-chip>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn plain outlined :to="{ name: 'Details', params: {id: q.id}}" color="white">
            Детали
          </v-btn>
        </v-card-actions>

      </v-card>
    </div>

    <div v-else class="text-center">
      <h1 class="white--text">
        Цитат по вашему запросу не существует! <br>
        Попробуйте ввести другие параметры поиска) <br>
      </h1>
      <v-btn plain outlined color="white" class="mt-10" @click.prevent="goHome">
        Попробовать снова
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import Date from "@/components/Date";

export default {
  name: "SearchedQuotes",
  components: {
    Date
  },
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('SEARCH_QUOTES', this.$route.params.search)
  },
  computed: {
    searchedQuotes() {
      return this.$store.getters.searchedQuotes;
    }
  },
  methods: {
    goHome() {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style scoped>

</style>