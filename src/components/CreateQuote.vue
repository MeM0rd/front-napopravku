<template>
  <v-dialog v-model="dialog" width="60%">

    <template v-slot:activator="{on}">
      <v-btn v-on="on" plain outlined height="70%" color="white">
        Добавить &nbsp;
        <v-icon>
          mdi-comment-quote
        </v-icon>
      </v-btn>
    </template>

    <v-card class="py-4" color="#444446">
      <v-card-title class="justify-center white--text">
        <h2>Создайте цитату</h2>
      </v-card-title>

      <v-text-field
          color="green"
          class="mx-4"
          v-model="author"
          :counter="20"
          label="Имя"
          required
          :error-messages="allErrors.author"
          dark
          v-on:keyup.enter.prevent="createQuote"
      ></v-text-field>

      <v-textarea
          class="mx-4 my-textarea"
          color="green"
          v-model="text"
          :counter="4000"
          label="Цитата"
          no-resize
          required
          :error-messages="allErrors.text"
          dark
          v-on:keyup.enter.prevent="createQuote"
      ></v-textarea>

      <v-select
          class="mx-4"
          v-model="tags"
          :items="tagsList"
          item-text="name"
          item-value="id"
          multiple
          label="Выберите тэги"
          required
          chips
          deletable-chips
          clearable
          item-color="green"
          color="green"
          open-on-clear
          :error-messages="allErrors.tag_ids"
          dark
          v-on:keyup.enter.prevent="createQuote"
      ></v-select>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="createQuote" plain outlined color="white">
          Добавить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapActions} from 'vuex';
import {createOrUpdateQuotes} from "@/api/quotes/api";

export default {
  name: "CreateQuote",
  data() {
    return {
      dialog: false,
      tags: [],
      author: '',
      text: '',
      allErrors: []
    }
  },
  computed: {
    tagsList() {
      return this.$store.getters.tags;
    }
  },
  methods: {
    ...mapActions(['getTags']),
    createQuote() {
      createOrUpdateQuotes({
        author: this.author,
        text: this.text,
        tag_ids: this.tags
      }).then((result) => {
        if (result) {
          this.author = ''
          this.text = ''
          this.tags = []
          this.dialog = false
          this.$router.go()
        }
      }).catch(err => this.allErrors = err.response.data.data)
    }
  },
  mounted() {
    this.getTags();
  }
}
</script>
<style scoped>
.my-textarea v-textarea {
  color: white !important
}
</style>
