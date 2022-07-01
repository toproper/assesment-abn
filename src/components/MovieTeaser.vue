<template>
  <div class="movie-teaser" @click="showModal(movieId)">
    <img :src="image" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "MovieTeaser",
  props: {
    movieId: Number,
    title: String,
    summary: String,
    image: String,
  },
  methods: {
    ...mapMutations(["showModal"]),
  },
});
</script>

<style scoped lang="scss">
.movie-teaser {
  padding: 0 0.4vw;

  h3 {
    color: darkblue;
    font-size: 3rem;
    font-weight: 900;
    font-family: helvetica;
  }

  img {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    width: 10vw;
    min-width: 150px;
    max-width: 200px;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.4);
    }
  }
}
</style>
