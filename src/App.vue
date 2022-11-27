<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppBlog from './components/AppBlog.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name:'App',
  components:{
    AppHeader,
    AppJumbotron,
    AppMain,
    AppBlog,
    AppFooter
  }
}
</script>

<template>
  <AppHeader />
  <AppJumbotron />
  <AppMain />
  <AppBlog/>
  <AppFooter />
</template>

<style lang="scss">
  @use './styles/general.scss';
  @use './styles/partials/variables.scss' as *;
</style>