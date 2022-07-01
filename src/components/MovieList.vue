<template>
  <h2>{{ genre }}</h2>
  <div class="movie-list-container">
    <div class="movie-list">
      <template v-for="movie in moviesForGenre" :key="movie.id">
        <MovieTeaser
          :movieId="movie.id"
          :image="movie.image.medium"
          :title="movie.title"
          :summary="movie.summary"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import store from "@/store";
import { defineComponent, computed, ref } from "vue";
import MovieTeaser from "@/components/MovieTeaser.vue";

export default defineComponent({
  name: "MovieList",
  props: {
    genre: String,
  },
  setup(props) {
    const moviesForGenre = computed(() => {
      return store.getters.getMovies
        .filter((movie) => movie.genres.includes(props.genre))
        .slice(0, 15)
        .sort((a, b) => (a.rating.average > b.rating.average ? -1 : 1));
    });

    return {
      moviesForGenre,
    };
  },
  components: {
    MovieTeaser,
  },

  computed: {
    ...mapGetters({
      movies: "getMovies",
    }),
    ...mapState({
      visible: "modalVisible",
    }),
  },
});
</script>

<style scoped lang="scss">
h2 {
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
  font-family: helvetica;
  color: #c1c1c1;
  letter-spacing: 0.5rem;
}

.movie-list {
  display: flex;
  min-height: min-content;
  min-width: min-content;
  width: 75vw;
  justify-content: space-between;
  padding: 2vw 4vw;
}

.movie-list-container {
  flex: 1;
  display: flex;
  justify-content: space-around;
  overflow-y: auto;
  scrollbar-width: none;
  background-color: $background-color;
}

.movie-list-container::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
