<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
export default {
  name:'App',
  components:{
    AppHeader,
    AppJumbotron,
    AppMain
  }
}
</script>

<template>
  <AppHeader />
  <AppJumbotron />
</template>

<style lang="scss">
  @use './styles/general.scss';
  @use './styles/partials/variables.scss' as *;
</style>