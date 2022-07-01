<template>
  <ModalDialog>
    <MovieDetails title="Movie Title" />
  </ModalDialog>

  <div class="movie-lists">
    <template v-for="genre in getGenres" :key="genre">
      <MovieList :genre="genre" />
    </template>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent, onMounted } from "vue";
import { mapGetters, mapMutations } from "vuex";
import MovieList from "@/components/MovieList.vue";
import MovieDetails from "@/components/MovieDetails.vue";
import ModalDialog from "@/components/ModalDialog.vue";

export default defineComponent({
  name: "HomeView",
  beforeMount() {
    store.dispatch("fetchMovies");
  },
  props: {
    genre: String,
  },
  components: {
    MovieList,
    MovieDetails,
    ModalDialog,
  },
  methods: {
    ...mapMutations(["showModal"]),
  },

  computed: {
    ...mapGetters(["getMovie", "getGenres"]),
  },
});
</script>

<style scoped lang="scss">
.movie-lists {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>
