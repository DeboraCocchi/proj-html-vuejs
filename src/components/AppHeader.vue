<script>
export default {
  name:'AppHeader'
}
</script>

<template>
  <header>
    <div class="dc-big-cont">
      <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <span>Download App<span>iOS</span></span>
          <span>Advertise with us</span></div>
        <div class="col-4 logo text-center"><img src="/avada-food-logo.png" alt="food-logo"></div>
        <div class="col-4">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
      <div class="dc-nav dc-small-cont">
        <ul class="d-flex justify-content-between">
         <li><a href="#">Home</a></li> 
          <li><a href="#">Recipes</a></li>
          <li><a href="#">Places</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><span><i class="fa-solid fa-magnifying-glass"></i></span><input type="search" name="search-within-site" id="search-within-site" class="d-none"></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/variables.scss' as *;
header{
  height:250px;
  background-color: white;
  color:$primary-darkgrey;
  li{
    padding:20px 0;
    border:3px solid $primary-orange;
  }
  a{
    text-decoration: none;
    color:$primary-darkgrey;
    font-size:16px;
  }
}
</style>