<script>
import{store} from '../data/store.js'
export default {
  name:'AppFooter',
  data(){
    return{store}
  }
}
</script>

<template>
  <section class="cta d-flex align-items-center justify-content-center flex-column">
    <h2 class="mb-4">Subscribe <span>&amp;</span> Receive A Free Book</h2>
    <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam officiis temporibus adipisci?</p>
    <div class="mb-5">
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email...">
      <button type="submit" class="btn-orange">SUBMIT</button>
    </div>
  </section>
  <section class="photos">
    <img v-for="(art,ind) in store.recipes.slice(0,4)" :key="ind"
    :src="store.articlesImgPath+art.image" :alt="art.title">
  </section>
  <footer>
    <div class="dc-big-cont">
      <div class="container-fluid">
        <div class="row">
          <div class="col-3 logo-socials d-flex flex-column justify-content-between">
            <img src="/avada-food-logo-mob-2x.png" alt="avada-food-logo">
            <div class="social">
              <a href="#" class="orangy" ><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#" class="orangy" ><i class="fa-brands fa-instagram"></i></a>
              <a href="#" class="orangy"><i class="fa-brands fa-twitter"></i></a>
              <a href="#" class="orangy" ><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          <div class="col-3 pages">
            <ul class="h-100">
              <li><a class="orangy" href="#">Recipes</a></li>
              <li><a class="orangy" href="#">Places</a></li>
              <li><a class="orangy" href="#">Blog</a></li>
              <li><a class="orangy" href="#">About</a></li>
              <li><a class="orangy" href="#">Contact</a></li>
            </ul>
          </div>
          <div class="col-3 contacts">
            <h6>CONTACT</h6>
            <ul>
              <li>775 New York Ave, Brooklyn, Kings, New York 11203</li>
              <li>+ 0100-505-0000</li>
              <li>info@avada-food-corner.com</li>
            </ul>
          </div>
          <div class="col-3 get-app d-flex flex-column">
            <h6>GET OUR APP !</h6>
            <img src="../assets/graphics/download-android.png" alt="dwnld-app">
            <img src="../assets/graphics/download-app-store.png" alt="dwnld-ios">
          </div>
      </div>
      </div>
      
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/variables.scss' as *;

  section.cta{
    background-image: url('../assets/graphics/subscribe-sec-bg.png');
    background-size:cover;
    background-position:top;
    width:100%;
    height:60vh;
    h2{
      font-size:2.5rem;
      span{
      color:$primary-orange;
      }
    }
    p{
      font-size:120%;
      font-weight:300;
      color:$primary-lightgrey;
    }
    div{
      width:80%;
      text-align: center;
      input{
      width:30%;
      display:inline;
      margin-right:1.5rem;
      }
      button{
          text-transform:uppercase;
          background-color: $primary-orange;
          color:white;
          padding:8px 15px;
          font-size:90%;
          border:none;
          transition:all .3s ease-in-out;
        &:hover{
        background-color: rgba($primary-orange, .75);
        color:$primary-darkgrey;}
      }
    }
    
    
  }

  section.photos{
    width:100%;
    img{
      width:25%;
    }
  }

  footer{
  width:100%;
  background-color:white;
  padding:30px 0;
    h6{
      color:$primary-orange;
      font-weight:400;
    }
    .row>.col-3{
      padding:1.5rem;
    }
    .row>.col-3:not(.get-app){
      border-right:1px dotted $primary-lightlightgrey;
    }
    .logo-socials{
      .social>a{
        color: $primary-lightlightgrey;
        margin-right:1.5rem;
      }
    }
    .pages{
      padding:1.5rem 1rem 1rem;
      li{
        height:20%;
        font-weight:500;
        a{
        color: $primary-lightgrey;}
      }
      
    }
    .contacts{
      *:not(h6){
        color: $primary-lightgrey;
        font-weight:300;
        font-size:98%;
      }
      ul{
        margin-top:1rem;
      }
      & li:nth-child(1)::before{
        content:"\f3c5";
        font-family: "Font Awesome 5 Free"; font-weight: 900;
        margin-right:1rem;
      }
      & li:nth-child(2)::before{
        content:"\f095";
        font-family: "Font Awesome 5 Free"; font-weight: 900;
        margin-right:1rem;
      }
      & li:nth-child(3)::before{
        content:"\f0e0";
        font-family: "Font Awesome 5 Free"; font-weight: 900;
        margin-right:1rem;
      }
    }
    .get-app{
    
      img{
        width:80%;
        margin:1rem 0 0.5rem;
      }
    }
  }
</style>