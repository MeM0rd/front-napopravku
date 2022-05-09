<template>
  <v-container>
    <v-card v-for="q in certainQuote" :key="q.id" width="60%" class="ma-5 mx-auto rounded-bl-0 elevation-5 white--text" color="#444446" style="border-radius: 20px">
      <v-card-title class="text-h5 font-weight-bold">
        {{q.author}}
        <v-spacer></v-spacer>
        <Date :date="q.created_at"></Date>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="text text-center white--text">
        {{q.text}}
      </v-card-text>

      <v-card-text class="text-center">
        <v-chip v-for="t in q.tags" :key="t.name" class="mx-1 elevation-2" color="#FFAB73">
          {{t.name}}
        </v-chip>
      </v-card-text>

      <v-card-text class="sm1 text-center white--text">
        Последнее обновление цитаты было <Date :date="q.updated_at"></Date>
      </v-card-text>

    </v-card>
  </v-container>
</template>

<script>
import Date from "@/components/Date";

export default {
  name: "QuoteDetails",
  components: {
    Date
  },
  computed: {
    certainQuote() {
      return this.$store.getters.quoteById
    }
  },
  mounted() {
    this.$store.dispatch('QUOTE_BY_ID', this.$route.params.id)
  }
}
</script>

<style scoped>
.text {
  font-size: 18px;
}
</style>