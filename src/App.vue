<script>
import AppMain from '../src/components/AppMain.vue'
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from '../src/components/AppJumbotron.vue';
export default {
  name:'App',
  components:{
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <AppHeader />
</template>

<style lang="scss">
  @use './styles/general.scss';
  @use './styles/partials/variables.scss' as *;
</style>