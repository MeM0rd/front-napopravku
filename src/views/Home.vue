<template>
  <v-container>

    <div class="d-flex justify-center align-center">
    <input type="search" v-model="search" placeholder="Поиск" class="text-center search white--text" width="100px"
           @keyup.enter="searchThis"
    >
      <v-btn @click.prevent="searchThis" outlined color="white">Искать</v-btn>
    </div>

    <v-hover v-slot="{ hover }" v-for="q in quotes" :key="q.id" open-delay="50" class="myCard">
      <v-card class="ma-5 mx-auto rounded-bl-0" width="60%" :elevation="hover ? 3 :10" color="#444446"
              style="border-radius: 20px">

        <v-card-title class="text-h5 white--text">
          {{ q.author }}
          <v-spacer></v-spacer>
          <Date :date="q.created_at"></Date>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text class="text white--text text-center">
          {{ q.text }}
        </v-card-text>

        <v-card-text class="text-center">
          <v-chip v-for="t in q.tags" :key="t.id" class="elevation-2 mx-1" color="#FFAB73">
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
    </v-hover>


    <Pagination></Pagination>

  </v-container>
</template>

<script>
import Pagination from "@/components/Pagination";
import Date from "@/components/Date";

export default {
  name: 'Home',
  components: {Pagination, Date},
  data() {
    return {
      search: ''
    }
  },
  computed: {
    quotes() {
      return this.$store.getters.list.data;
    },
    searchedQuotes() {
      return this.$store.getters.searchedQuotes;
    }
  },
  methods: {
    searchThis() {
      if (this.search) {
        this.$router.push({name: 'Search', params: {search: this.search}})
      }
    }
  },
  mounted() {
    return this.$store.dispatch('GET_LIST')
  }
}
</script>

<style>
.search {
  font-size: 30px;
  outline: none;
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}

.text {
  font-size: 18px;
}
whiteText {
  color: white;
}
</style>
