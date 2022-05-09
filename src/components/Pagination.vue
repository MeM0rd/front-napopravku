<template>
  <v-pagination
      v-model="currentPage"
      :length="totalPages"
      total-visible="7"
      circle
      color="#444446"
  ></v-pagination>
</template>

<script>
export default {
  name: "Pagination",
  watch: {
    currentPage (newPage) {
      this.paginatePage(newPage)
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.$store.getters.list.current_page;
      },
      set( value ) {
        return this.$store.commit('SET_CURRENT_PAGE', value)
      }
    },
    totalPages() {
      return this.$store.getters.list.last_page;
    }
  },
  methods: {
    paginatePage (pNumber) {
      this.$store.dispatch('GET_LIST', pNumber)
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style scoped>

</style>