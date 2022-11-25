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
          <a href="#">Download App<span class="dc-ios">iOS</span></a>
          <a href="#">Advertise with us</a>
        </div>
        <div class="col-4 logo text-center"><img src="/avada-food-logo.png" alt="food-logo"></div>
        <div class="col-4 social">
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
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
  height:280px;
  background-color: white;
  color:$primary-darkgrey;
  .col-4:first-of-type{
    font-size:80%;
    & *{
      color:$primary-lightgrey;}
    .dc-ios{
    background-color: $primary-orange;
    border-radius:3px;
    color:white;
    font-size:90%;
    padding:2px 6px;
    margin-right:1.3rem;
    margin-left:.5rem;
  }
  }
  ul{
    margin:2rem 0;
  }
  li{
    padding:12px 0;
    border:3px solid $primary-orange;
     a{
    color:$primary-darkgrey;
    font-size:16px;
  }
  }
 
  .col-4.social{
    text-align:right;
    a{
      margin-left:30px;
      color:$primary-lightgrey;

    }
  }
}
</style>