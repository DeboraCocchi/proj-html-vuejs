<script>
export default {
  name:'AppHeader'
}
</script>

<template>
  <header>
    <div class="dc-big-cont py-3 h-100 d-flex align-items-center">
      <div class="container-fluid">
      <div class="row main-header-row">

        <div class="col-lg-4 d-lg-block d-none download">
          <a href="#">Download App<span class="dc-ios">iOS</span></a>
          <a href="#">Advertise with us</a>
        </div>
        <!-- logo grande -->
        <div class="col-lg-4 d-lg-block d-none logo text-center p-0">
          <a href="#"><img src="/avada-food-logo.png" alt="food-logo"></a>
        </div>

        <!-- logo mobile -->
        <div class="col-4 d-lg-none d-block logo text-start">
          <a href="#"><img src="/avada-food-logo-mob-2x.png" alt="food-logo" class="p-0 img-mob-logo"></a>
        </div>

        <div class="col-4 d-lg-block d-none social">
          <a href="#" class="orangy"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="orangy"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="orangy"><i class="fa-brands fa-twitter"></i></a>
          <a href="#" class="orangy"><i class="fa-brands fa-youtube"></i></a>
        </div>

        <div class="dc-mobile nav-mobile d-lg-none col-4 offset-4 d-flex justify-content-end">
          <i class="fa-solid fa-bars m-0"></i>
          <div class="dc-menu-mobile">
          <ul class="d-flex flex-column justify-content-end align-items-end m-0">
            <li class="active"><a href="#">Home</a></li> 
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Places</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
       <!-- menu nav esteso -->
      <div class="dc-nav col-12 dc-small-cont justify-content-center d-none d-lg-flex">
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
    .col-lg-4.download{
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
    .dc-nav{
      margin:0 auto;
       ul{
        margin:2rem 0;
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
          a{
            color:$primary-darkgrey;
            font-size:1.1rem;
            transition:all .3s ease-in-out;
          }
          &:hover a, &:active a, &.active a{
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
          &.mag-link-head{
            transition: all .3s ease-in-out;
          }
          &.mag-link-head .mag-hidden{
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
          }
          &.mag-link-head:hover .mag-hidden{
            opacity:1;
            transition-delay: 0.2s;
          }
        }
    }
    
    }
     img.img-mob-logo{
        min-width:180px;
      }
  
    .social{
      text-align:right;
      a{
        margin-left:20px;
        color:$primary-lightgrey;

      }
    }



    // media-queries
    div.dc-mobile.nav-mobile{
      text-align:right;
      position:relative;
      &:hover>.dc-menu-mobile{
          display:flex;
          position:absolute;
          z-index:2;
      }
      i{
        display:inline-block;
        color:$primary-orange;
        padding:5px 8px;
        border-radius:5px;
        border:1px solid $primary-orange;
        font-size:180%;
        margin-top:1rem;
        
         
      }
      
      .dc-menu-mobile{
        display:none;
        padding:0.8rem 2.4rem;
        top:0rem;
        right:3.2rem;
        border-radius:5px;
        z-index:2;
        background-color: white;
        border:1px solid $primary-orange;
        pointer-events:all;
        line-height:1.3rem;
        a{
        color:$primary-darkgrey;
        font-size:1.1rem;
        transition:all .3s ease-in-out;

        }
        li{
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
        }
      }
  }
  }

  .d-lg-none.d-md-block.logo{
    padding:0;
    img{
    width:100%;
    vertical-align:middle;
    padding:1rem 0 0 0.5rem;
    }
  } 

  @media screen and (max-width:992px) {
    header{
      height:180px;
      .main-header-row{
        align-items:center;
      }
    }
  }

 

</style>