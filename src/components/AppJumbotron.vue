<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import {store} from '../data/store.js'
export default {
  name:'AppJumbotron',
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
      store
    }
  },
  setup() {
    return {
      modules: [Navigation],
    }
  }
}
</script>

<template>
  <!-- swiper -->
  <div class="dc-bg-jumbo-slider container-fluid p-0">
    <div class="first-art article">

      <swiper :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="(art, ind) in store.articles" :key="ind">
          <img :src="store.articlesImgPath+art.image" alt="">
          <div class="jumbo-article-preview dc-small-cont">
            <span>TODAY'S PICK</span>
            <h2>{{store.articles[ind].title}}</h2>
            <p class="jumbo-author">By {{store.articles[ind].author}} | {{store.articles[ind].date}}</p>
          </div>
        </swiper-slide>
    </swiper> 

    </div>
  </div>

  <!-- section-foodie-journal: top 3 articles -->
  <div class="dc-big-cont foodie-journal px-0 py-4">
    <div class="container-fluid text-center">
      <h3 class="pt-2 pb-3">FOODIE JOURNAL</h3>
      <div class="row flex-wrap">

        <div class="col-4 dc-article-thumb"
        v-for="(art, index) in store.articles.slice(0,3)" :key="index">
          <div class="thumb-head">
            <img :src="store.articlesImgPath+art.image" :alt="art.title">
            <div class="cover-on-hover">
              <span><i class="fa-solid fa-link"></i></span>
              <h5>{{art.title}}</h5>
            </div>
          </div>
          <div class="thumb-body d-flex flex-column justify-content-between">
            <h4>{{art.title}}</h4>
            <p>By {{art.author}} | {{art.date}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as *;
  
  
  
  .swiper.swiper-initialized.swiper-horizontal[data-v-6f625875]{
    height:75vh;
  }


  .dc-bg-jumbo-slider{
    .article{
    height:76vh;
    width:100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    img{
      width:100%;
      height:100%;
      object-fit: cover;
    }
    .jumbo-article-preview{
      background-color: white;
      border-radius:10px;
      padding:1.5rem 3rem;
      text-align:center;
      position:relative;
      top:-70%;
      z-index:11;
      h2{
        font-size:2.3rem;
        font-weight:400;
        margin-top:1.5rem;
      }
      p.jumbo-author{
        font-family: "Vidaloka", serif;
        color:$primary-lightgrey;
      }
      span{
        background-color:$primary-orange;
        color:white;
        font-weight:600;
        text-align:center;
        padding:8px 16px;
        border-radius:8px;
        position:absolute;
        top:-20px;
        left: 50%;
        transform: translateX(-50%);
      }
      h5{
        margin-top:1.5rem;
        color:$primary-lightgrey;
      }
    }

  }
  }
  .dc-big-cont.foodie-journal{
    background-color: white;
    position:relative;
    top:-50px;
    z-index:12;
    h3{
      font-family: "Catamaran", Arial, Helvetica, sans-serif;
      font-weight:300;
      font-size:1.3rem;
      line-height:1.2rem;
      color:$primary-darkgrey;
      &::before, &::after{
        content:'';
        max-width: 100%;
        width:34%;
        border:1px solid rgba(227, 225, 225, 0.72);
        display:inline-block;
        margin-bottom:0.5rem;
      }
      &::before{
        margin-right:20px;
      }
      &::after{
        margin-left:20px;
      }
    }
  }
  .dc-article-thumb{
    min-width:245px;
    margin:15px auto;
    .thumb-head{
      height:55%;
      position:relative;
      transition: all .3s ease-in-out;
      &:hover>div.cover-on-hover{
        opacity:1;
        transition-delay: 0.1s;
      }
      img{
      height:100%;
      width:100%;
      object-fit:cover;
      }
    }
    .thumb-body{
      h4{
      margin-top:1rem;
      font-size:1.4rem;

    }
    p{
      color:$primary-lightgrey;
      line-height:0.8rem;
      margin-top:0.5rem;
      font-size:90%;
    }
    }
  }

  

</style>