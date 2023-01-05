<script>
export default {
  name:'AppHeader'
}
</script>

<template>
  <header>
    <div class="dc-big-cont py-3">
      <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-sm-2 download">
          <a href="#">Download App<span class="dc-ios">iOS</span></a>
          <a href="#">Advertise with us</a>
        </div>
        <div class="col-4 logo text-center p-3">
          <a href="#"><img src="/avada-food-logo.png" alt="food-logo"></a>
        </div>
        <div class="col-4 social">
          <a href="#" class="orangy"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="orangy"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="orangy"><i class="fa-brands fa-twitter"></i></a>
          <a href="#" class="orangy"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </div>
      <div class="dc-nav dc-small-cont d-flex justify-content-center">
        <ul class="d-flex justify-content-between">
         <li class="active"><a href="#">Home</a></li> 
          <li><a href="#">Recipes</a></li>
          <li><a href="#">Places</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li class="mag-link-head d-flex">
            <span><i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="search" name="search-within-site" id="search-within-site" class="mag-hidden" placeholder="Search..."></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/variables.scss' as *;
  header{
    height:270px;
    background-color: white;
    color:$primary-darkgrey;
    .col-lg-4:first-of-type{
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
      padding:3px 0;
      margin:0 1.8rem;
      border:none;
      position:relative;
      &::after{
        content:'';
        border-bottom:2px solid transparent;
        padding:0 10px;
        position:absolute;
        bottom:0;
        right:0;
        left:0;
        margin:0 auto;
        width:0;
        transition:all .3s ease-in-out;
      }
      &:hover a,  &:active a, &.active a{
        color:$primary-orange;
      }
      &:hover::after{
        width:100%;
        padding:0;
        border-bottom:2px solid $primary-orange;
      }
      &:active::after, &.active::after{
        width:100%;
        padding:0;
        border-bottom:2px solid $primary-orange;
      }
      a{
      color:$primary-darkgrey;
      font-size:1.1rem;
      transition:all .3s ease-in-out;
      }
      &.mag-link-head{
        transition: all .3s ease-in-out;
      }
      &.mag-link-head>.mag-hidden{
        opacity:0;
        width:80px;
        height:1.2rem;
        border:none;
        display:inline-block;
        margin-left:20px;
        &:focus-visible{
          color: #39393a;
          background-color: #fff;
          border-color: #fc7523;
          outline: 0;
        }
      }
      &.mag-link-head:hover span{
        color:$primary-orange;
        cursor:pointer;
      }
      &.mag-link-head:hover >.mag-hidden{
        opacity:1;
        transition-delay: 0.2s;
      }
      }
  
    .social{
      text-align:right;
      a{
        margin-left:20px;
        color:$primary-lightgrey;

      }
    }
  }

</style>