<template>
  <div class="movie-details">
    <div class="image"><img :src="movie.image.medium" /></div>
    <div class="info">
      <h2 class="header">
        {{ movie.name }}
        <span class="rating">{{ movie.rating.average }}</span>
      </h2>
      <div class="summary" v-html="movie.summary"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "MovieDetails",
  computed: {
    ...mapGetters({
      movie: "getCurrentMovie",
    }),
  },
});
</script>

<style scoped lang="scss">
h2,
.summary {
  margin: 0;
  color: $text-color;
}

.movie-details {
  display: flex;
  justify-content: space-between;
  padding: $whitespace;

  .info {
    margin-left: $whitespace;
  }

  .summary {
    text-align: left;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: $whitespace;
  }

  h2 {
    font-size: 3rem;
  }

  .rating {
    font-weight: 300;
    font-size: 3rem;
    color: #666;
  }
}
</style>
