/* eslint-disable */

import { createStore } from "vuex";
import axios from "axios";
import { RootState } from "./types";

export default createStore<RootState>({
  state: {
    modalVisible: false,
    currentMovie: null,

    movies: [],
  },
  getters: {
    getMovies(state) { return state.movies },
    getCurrentMovie(state) { return state.currentMovie },

    getGenres(state) {
        let genres = state.movies.map(movie => movie.genres);
        return [...new Set([].concat(...genres))]
    },

    getMoviesByGenre(state, getters) { 
        let genres = getters.getGenres
        return genres
    },

  },
  mutations: {
    showModal(state, movieId: number) {
      let currentMovie = state.movies.find(movie => movie.id === movieId)
      state.currentMovie = currentMovie;
      state.modalVisible = true;
    },
    hideModal(state: any) {
      state.modalVisible = false;
      state.currentMovie = null;
    },
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
  },
  actions: {
    async fetchMovies({ commit }) {
      try {
        const data = await axios.get("https://api.tvmaze.com/shows?page=1");
        commit("SET_MOVIES", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  modules: {},
});

export const state = {};
