<script>
import {store} from '../data/store'
export default {
  name:'AppJumbotron',
  data(){
    return{
      store
    }
  },
  methods:{
    getPath(path){
      let source, result;
      source = '../assets/recs-arts/';
      return source+path;
    }
  }
}
</script>

<template>
  <div class="dc-bg-jumbo-slider container-fluid p-0">
    <div class="first-art article">
      <!-- <img :src="'../assets/recs-arts/'+store.articles[0].author+'.jpg'" :alt="store.articles[0].title"> -->
      <img src="../assets/recs-arts/japanese.jpg" :alt="store.articles[0].title">
      <div class="jumbo-article-preview dc-small-cont">
        <span>TODAY'S PICK</span>
        <h2>{{store.articles[0].title}}</h2>
        <p>By {{store.articles[0].author}} | {{store.articles[0].date}}</p>
      </div>
    </div>
  </div>

  <div class="dc-big-cont foodie-journal px-0 pt-4 pb-0">
    <div class="container-fluid text-center">
      <h3 class="py-3">FOODIE JOURNAL</h3>
      <div class="row">

        <div class="col-4 h-100 dc-article-thumb flex-column"
        v-for="(art, index) in store.articles.slice(0,3)" :key="index">
          <img :src="store.articlesImgPath+art.image" :alt="art.title">
          <h4>{{art.title}}</h4>
          <p>By {{art.author}} | {{art.date}}</p>
        </div>
      </div>
    </div>
  </div>

  
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as *;
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
      padding:20px 80px;
      text-align:center;
      position:relative;
      top:-70%;
      h2{
        font-size:2.8rem;
        font-weight:400;
        margin-top:1.5rem;
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
    h3{
      font-family: "Catamaran", Arial, Helvetica, sans-serif;
      font-weight:400;
      font-size:1.4rem;
      line-height:1.4rem;
      color:$primary-darkgrey;
      &::before, &::after{
        content:'';
        width:30%;
        border:1px solid rgba(227, 225, 225, 0.72);
        display:inline-block;
        margin-bottom:calc(1.5rem / 2);
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
    height:100%;
    img{
      height:90%;
      width:100%;
      object-fit:cover;
    }
    h4, p{
      margin-top:1rem;
    }
    p{
      color:$primary-lightgrey;
    }
  }

</style>