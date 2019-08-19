<template>
  <div class="rank">
    <ScrollView :data="moviesList">
      <Card v-for="(movie, index) in moviesList" :key="movie._id" :movie="movie" @select="selectItem" :sort="index + 1"/>
    </ScrollView>
    <div class="loading-wrap" v-show="!moviesList.length">
      <Loading/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      moviesList: [],
      isrank: true
    }
  },
  created() {
    this.getmovies()
  },
  methods: {
    selectItem(id) {
      this.$router.push(`/movie/${id}`)
    },
    getmovies() {
      axios.get('/api/api/movie/get_rank')
      .then(res => {
        console.log(res);
        if(res.data.code === 1001) {
          this.moviesList = res.data.result.movies
        }
      })
    }
  },
}
</script>

<style lang="stylus" scoped>
.rank
  height 100%
  .loading-wrap
    display flex
    align-items center
    height 100%
</style>
