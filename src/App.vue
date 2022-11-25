<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppBlog from './components/AppBlog.vue';
export default {
  name:'App',
  components:{
    AppHeader,
    AppJumbotron,
    AppMain,
    AppBlog
  }
}
</script>

<template>
  <AppHeader />
  <AppJumbotron />
  <AppMain />
  <AppBlog/>
</template>

<style lang="scss">
  @use './styles/general.scss';
  @use './styles/partials/variables.scss' as *;
</style>