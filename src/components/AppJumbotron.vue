<script>
import {store} from '../data/store'
export default {
  name:'AppJumbotron',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="dc-bg-jumbo-slider container-fluid mt-5">
    <div class="first-art article">
      <img :src="'../assets/recs-arts/'+store.articles[0].image+'.jpg'" :alt="store.articles[0].title">
      <div class="jumbo-article-preview dc-small-cont">
        <span>TODAY'S PICK</span>
        <h2>{{store.articles[0].title}}</h2>
        <p>By{{store.articles[0].author}}| {{store.articles[0].date}}</p>
      </div>
    </div>
  </div>
  <div class="dc-big-cont foodie-journal">
    <div class="container-fluid">
      
      <h3>FOODIE JOURNAL</h3>
      
      <div class="row">
      <div class="col-4 dc-article-thumb">

      </div>
      <div class="col-4 dc-article-thumb">

      </div>
      <div class="col-4 dc-article-thumb">

      </div>
    </div>

    </div>
    <div class="row">
      <div class="col-4"></div>
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
    padding-top:22vh;
    &.first-art{
      background-image: url('../assets/jumbotron/single-post-img3.jpg');
    }
    .jumbo-article-preview{
      background-color: white;
      border-radius:10px;
      padding:20px 80px;
      text-align:center;
      position:relative;
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
    // background-color: white;
    height:20vh;
    h3{
      font-family: "Catamaran", Arial, Helvetica, sans-serif;
      &::before{
        content:'';
        width:40%;
        border:2px solid grey;
        display:inline-block;
      }
    }
  }

</style>